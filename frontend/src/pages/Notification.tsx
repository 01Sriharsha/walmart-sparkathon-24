
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const Notification = () => {
  const { toast } = useToast();

  const handleButtonClick = (type: string) => {
    switch (type) {
      case "arrived":
        toast({
          title: "Truck arrived",
          description: (
            <div>
              Unload the truck
              <div className="flex gap-2 mt-2">
                <button className="bg-green-500 text-white px-3 py-1 rounded">
                  Accept
                </button>
                <button className="bg-red-500 text-white px-3 py-1 rounded">
                  Decline
                </button>
              </div>
            </div>
          ),
          duration: 5000,
        });
        break;
      case "waiting":
        toast({
          title: "Truck waiting",
          description: (
            <div>
              Navigate to unload point or wait in the parking lot
              <div className="flex gap-2 mt-2">
                <button className="bg-blue-500 text-white px-3 py-1 rounded">
                  Navigate
                </button>
                <button className="bg-yellow-500 text-white px-3 py-1 rounded">
                  Wait
                </button>
              </div>
            </div>
          ),
          duration: 5000,
        });
        break;
      case "left":
        toast({
          title: "Truck left",
          description: "The truck has left the premises.",
          duration: 5000,
        });
        break;
      default:
        return;
    }
  };

  return (
    <div className="p-8">
      <div className="flex gap-4">
        <Button
          className="bg-red-500 text-white px-4 py-2 rounded"
          onClick={() => handleButtonClick("arrived")}
        >
          Truck Arrived
        </Button>
        <Button
          className="bg-yellow-500 text-white px-4 py-2 rounded"
          onClick={() => handleButtonClick("waiting")}
        >
          Truck Waiting
        </Button>
        <Button
          className="bg-green-500 text-white px-4 py-2 rounded"
          onClick={() => handleButtonClick("left")}
        >
          Truck Left
        </Button>
      </div>
    </div>
  );
};

export default Notification;
