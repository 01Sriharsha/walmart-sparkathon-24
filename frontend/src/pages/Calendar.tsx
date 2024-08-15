import { useState } from "react";
import Breadcrumb from "../components/Breadcrumbs/Breadcrumb";
import Sidebar from "@/components/Sidebar/Sidebar";
import {
  addMonths,
  format,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  isSameMonth,
  isSameDay,
  addDays,
  getDay,
} from "date-fns";

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const renderHeader = () => {
    const dateFormat = "MMMM yyyy";

    return (
      <div className="flex justify-between items-center">
        <button onClick={prevMonth}>&#10094;</button>
        <span>{format(currentMonth, dateFormat)}</span>
        <button onClick={nextMonth}>&#10095;</button>
      </div>
    );
  };

  const renderDays = () => {
    const dateFormat = "eeee";
    const days = [];

    const startDate = startOfWeek(currentMonth);

    for (let i = 0; i < 7; i++) {
      days.push(
        <div
          className="flex h-15 items-center justify-center p-1 text-xs font-semibold sm:text-base xl:p-5"
          key={i}
        >
          {format(addDays(startDate, i), dateFormat)}
        </div>
      );
    }

    return <div className="grid grid-cols-7 bg-primary text-white">{days}</div>;
  };

  const renderCells = () => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);

    const rows = [];
    let days = [];
    let day = startDate;
    let formattedDate = "";

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = format(day, "d");
        const cloneDay = day;

        // Check if this day is a Friday (getDay() returns 5 for Friday)
        const isFriday = getDay(day) === 5;

        days.push(
          <div
            className={`ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31 ${
              !isSameMonth(day, monthStart)
                ? "disabled"
                : isSameDay(day, new Date())
                ? "bg-blue-500 text-white"
                : ""
            }`}
            onClick={() => console.log(format(cloneDay, "PP"))}
          >
            <span className="font-medium text-black dark:text-white">
              {formattedDate}
            </span>
            {isFriday && (
              <span className="absolute bottom-1 left-1 text-xs font-semibold text-red-500 dark:text-red-300">
                Report Generation
              </span>
            )}
          </div>
        );

        day = addDays(day, 1);
      }

      rows.push(<div className="grid grid-cols-7">{days}</div>);

      days = [];
    }

    return <div>{rows}</div>;
  };

  const prevMonth = () => {
    setCurrentMonth(addMonths(currentMonth, -1));
  };

  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  return (
    <>
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex-1 p-4 ml-64 overflow-auto">
          <Breadcrumb pageName="Calendar" />

          <div className="w-full max-w-full rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            {renderHeader()}
            {renderDays()}
            {renderCells()}
          </div>
        </div>
      </div>
    </>
  );
};

export default Calendar;
