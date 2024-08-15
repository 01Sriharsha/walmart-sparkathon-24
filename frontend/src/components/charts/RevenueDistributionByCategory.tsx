import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

const options: ApexOptions = {
  chart: {
    type: 'pie',
    height: 350,
  },
  labels: ['Electronics', 'Clothing', 'Home Appliances', 'Other'],
  colors: ['#FF5733', '#33FF57', '#3357FF', '#F5F5F5'],
  legend: {
    position: 'bottom',
  },
  plotOptions: {
    pie: {
      expandOnClick: true,
    },
  },
};

const series = [44, 33, 20, 3];

const RevenueDistributionPieChart: React.FC = () => {
  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white p-5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-4">
      <h4 className="text-lg font-semibold mb-4">Revenue Distribution by Category</h4>
      <ReactApexChart options={options} series={series} type="pie" height={350} />
    </div>
  );
};

export default RevenueDistributionPieChart;
