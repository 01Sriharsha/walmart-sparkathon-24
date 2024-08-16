import CardDataStats from "@/components/cards/CardDataStats";
import Sidebar from "@/components/Sidebar/Sidebar";
import CardArrivedShipments from "@/components/cards/CardShipment";
import CheckInList from "@/components/Lists/CheckInList";

const WorkerDashboard = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <div className="flex-1 p-4 ml-64 overflow-auto">
        {" "}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
          <CardDataStats title="Total Fulfillment Centers" total="25" rate="+5%" levelUp>
            <svg
              className="fill-meta-3"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.36L18 8.8V12h-2V9.9L12 8l-4 1.9V12H6V8.8L12 4.36zM6 14h2v6H6v-6zm4 0h2v6h-2v-6zm4 0h2v6h-2v-6z"
                fill=""
              />
            </svg>
          </CardDataStats>
          <CardDataStats title="Total Workers" total="150" rate="+10%" levelUp>
            <svg
              className="fill-meta-3"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2a6 6 0 00-6 6v2a6 6 0 006 6 6 6 0 006-6V8a6 6 0 00-6-6zm-3 6a3 3 0 116 0 3 3 0 01-6 0zm-3 4a6 6 0 016 6v2H6v-2a6 6 0 010-12v2z"
                fill=""
              />
            </svg>
          </CardDataStats>
        </div>
        <div className="flex flex-wrap mt-4">
          <div className="w-full px-4">
            <CheckInList />
          </div>
        </div>
        <div className="flex flex-wrap mt-4">
          <div className="w-full px-4">
            <CardArrivedShipments />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkerDashboard;
