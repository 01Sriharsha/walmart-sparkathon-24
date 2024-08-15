import React from "react";
import { shipmentData, Shipment } from "../../data/CheckInData";

const CheckInList: React.FC = () => {
  return (
    <div className="container mx-auto p-5">
      <h1 className="text-3xl text-center mb-5 text-blue-700">Shipment Details</h1>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {shipmentData.map((shipment: Shipment, index: number) => (
          <div
            key={index}
            className="p-4 bg-white shadow-lg rounded-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <h2 className="text-xl font-semibold mb-3">
              Vehicle Number: {shipment.vehicleNumber}
            </h2>
            <p className="text-gray-600 mb-2">
              <strong>Arrival Time:</strong> {shipment.arrivalTime}
            </p>
            <p className="text-gray-600 mb-2">
              <strong>Arrival Date:</strong> {shipment.arrivalDate}
            </p>
            <p className="text-gray-600 mb-2">
              <strong>Quantity:</strong> {shipment.quantity}
            </p>
            <p className="text-gray-600">
              <strong>Item Description:</strong> {shipment.itemDescription}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CheckInList;
