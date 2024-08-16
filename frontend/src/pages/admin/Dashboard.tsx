import CardDataStats from "@/components/cards/CardDataStats";
import ChartOne from "@/components/charts/ChartOne";
import RevenueDistributionPieChart from "@/components/charts/RevenueDistributionByCategory";
import Sidebar from "@/components/Sidebar/Sidebar";
import ManagerList from "@/components/Lists/ManagerList";
import CardArrivedShipments from "@/components/cards/CardShipment";
import { useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const AdminDashboard = () => {
  const reportRef = useRef<HTMLDivElement>(null);

  const downloadPdf = async () => {
    if (reportRef.current) {
      const canvas = await html2canvas(reportRef.current);
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("report.pdf");
    }
  };
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <div className="ml-64 p-4 overflow-auto w-full">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Yard Management Report</h1>
          <button
            onClick={downloadPdf}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600"
          >
            Download PDF
          </button>
        </div>

        <div ref={reportRef} className="p-4">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4 2xl:gap-6">
            <CardDataStats
              title="Total Fulfillment Centers"
              total="25"
              rate="+5%"
              levelUp
            >
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
            <CardDataStats
              title="Total Managers"
              total="10"
              rate="-2%"
              levelDown
            >
              <svg
                className="fill-meta-5"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 4a2 2 0 10-2 2 2 2 0 002-2zm0 4a4 4 0 014 4v2H8v-2a4 4 0 014-4zm8 4v2a2 2 0 01-2 2h-4v2h-2v-2H6a2 2 0 01-2-2v-2h2v2h12v-2h2z"
                  fill=""
                />
              </svg>
            </CardDataStats>
            <CardDataStats
              title="Total Workers"
              total="150"
              rate="+10%"
              levelUp
            >
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
            <CardDataStats
              title="Total Supervisors"
              total="5"
              rate="-1%"
              levelDown
            >
              <svg
                className="fill-meta-5"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2a2 2 0 10-2 2 2 2 0 002-2zm0 4a4 4 0 014 4v2H8v-2a4 4 0 014-4zm8 6v2a2 2 0 01-2 2h-4v2h-2v-2H6a2 2 0 01-2-2v-2h2v2h12v-2h2z"
                  fill=""
                />
              </svg>
            </CardDataStats>
          </div>

          <div className="flex flex-wrap mt-6">
            <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
              <ChartOne />
            </div>
            <div className="w-full xl:w-4/12 px-4">
              <RevenueDistributionPieChart />
            </div>
          </div>

          <div className="flex flex-wrap mt-6">
            <div className="w-full mb-12 xl:mb-0 px-4">
              <ManagerList />
            </div>
          </div>

          <div className="flex flex-wrap mt-6">
            <div className="w-full px-4">
              <CardArrivedShipments />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
