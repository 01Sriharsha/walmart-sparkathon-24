import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { shipmentLabels, shipmentDatasets } from "../../data/ShipmentData";

// Register components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Arrived Shipments",
    },
  },
  scales: {
    x: {
      type: "category" as const,
    },
    y: {
      beginAtZero: true,
    },
  },
};

export default function CardArrivedShipments() {
  return (
    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
      <div className="rounded-t mb-0 px-4 py-3 border-0">
        <div className="flex flex-wrap items-center">
          <div className="relative w-full px-4 max-w-full flex-grow flex-1">
            <h3 className="font-semibold text-xl text-blue-700">
              Arrived Shipments
            </h3>
          </div>
        </div>
      </div>
      <div className="block w-full overflow-x-auto">
        <Bar
          data={{ labels: shipmentLabels, datasets: shipmentDatasets }}
          options={options}
        />
      </div>
    </div>
  );
}
