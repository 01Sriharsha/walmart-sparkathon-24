import { useTrailerContext } from '@/providers/eagle-view-context';
import React from 'react';
import { DragDropContext, Droppable, Draggable, DropResult } from "react-beautiful-dnd";

const NUM_SLOTS = 5;

const EagleView: React.FC = () => {
  const { trailers } = useTrailerContext();

  const initialSlots: (typeof trailers[0] | null)[][] = [
    trailers.length > 0 ? [trailers[0], null, null, null, null] : [null, null, null, null, null],
    trailers.length > 1 ? [trailers[1], null, null, null, null] : [null, null, null, null, null],
    [null, null, null, null, null], // Section 3 empty
  ];

  const [slots, setSlots] = React.useState<(typeof trailers[0] | null)[][]>(initialSlots);

  console.log(trailers);
  

  const handleOnDragEnd = (result: DropResult) => {
    const { source, destination } = result;
    if (!destination) return;

    const sourceSectionIndex = parseInt(source.droppableId);
    const destSectionIndex = parseInt(destination.droppableId);

    if (sourceSectionIndex === destSectionIndex && source.index === destination.index) {
      return;
    }

    const sourceSection = Array.from(slots[sourceSectionIndex]);
    const destSection = Array.from(slots[destSectionIndex]);

    const [movedTrailer] = sourceSection.splice(source.index, 1);
    destSection.splice(destination.index, 0, movedTrailer);

    while (sourceSection.length < NUM_SLOTS) sourceSection.push(null);
    while (destSection.length < NUM_SLOTS) destSection.push(null);

    setSlots((prev) => {
      const updatedSections = [...prev];
      updatedSections[sourceSectionIndex] = sourceSection;
      updatedSections[destSectionIndex] = destSection;
      return updatedSections;
    });
  };

  return (
    <div className="container mx-auto p-4 grid grid-cols-3 gap-4">
      <DragDropContext onDragEnd={handleOnDragEnd}>
        {slots.map((section, sectionIndex) => (
          <Droppable key={sectionIndex} droppableId={sectionIndex.toString()}>
            {(provided) => (
              <div
                className="bg-gray-100 p-4 rounded-md shadow-md min-h-screen"
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                <h2 className="text-xl font-semibold mb-4">Section {sectionIndex + 1}</h2>
                {section.map((slot, index) => (
                  <div
                    key={`${sectionIndex}-${index}`}
                    className="p-4 mb-4 border-2 border-dashed border-gray-300 rounded"
                    style={{ minHeight: "80px" }}
                  >
                    {slot && (
                      <Draggable key={slot.id} draggableId={slot.id} index={index}>
                        {(provided) => (
                          <div
                            className="p-4 bg-blue-500 rounded shadow text-center text-white"
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            {slot.id}
                          </div>
                        )}
                      </Draggable>
                    )}
                  </div>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        ))}
      </DragDropContext>
    </div>
  );
};

export default EagleView;
