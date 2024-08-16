import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const AddSlot = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <Card className="p-8 shadow-lg rounded-lg max-w-md w-full bg-white">
        <h2 className="text-2xl font-bold mb-6 text-blue-900">Add New Slot</h2>
        <form className="space-y-6">
          <div>
            <label htmlFor="id" className="block text-sm font-medium text-gray-700 mb-2">
              ID
            </label>
            <Input
              id="id"
              placeholder="PL1234"
              className="border-gray-300 focus:ring-yellow-500 focus:border-yellow-500"
            />
          </div>
          <div>
            <label htmlFor="section" className="block text-sm font-medium text-gray-700 mb-2">
              Section
            </label>
            <Input
              id="section"
              placeholder="A1"
              className="border-gray-300 focus:ring-yellow-500 focus:border-yellow-500"
            />
          </div>
          <div>
            <label htmlFor="slotNumber" className="block text-sm font-medium text-gray-700 mb-2">
              Slot Number
            </label>
            <Input
              id="slotNumber"
              placeholder="101"
              className="border-gray-300 focus:ring-yellow-500 focus:border-yellow-500"
            />
          </div>
          <div>
            <label htmlFor="slotId" className="block text-sm font-medium text-gray-700 mb-2">
              Slot ID
            </label>
            <Input
              id="slotId"
              placeholder="SL-001"
              className="border-gray-300 focus:ring-yellow-500 focus:border-yellow-500"
            />
          </div>
          <Button
            type="submit"
            className="bg-yellow-500 text-white hover:bg-yellow-600 focus:ring-4 focus:ring-yellow-300 w-full py-2 rounded-md"
          >
            Submit
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default AddSlot;
