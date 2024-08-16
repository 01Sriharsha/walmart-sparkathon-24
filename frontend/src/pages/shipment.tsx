import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import QRCode from "qrcode.react";

interface ShipmentFormInputs {
  driverName: string;
  trailerId: string;
  shipmentContent: string;
  destination: string;
}

const ShipmentForm: React.FC = () => {
  const { register, handleSubmit, reset } = useForm<ShipmentFormInputs>();
  const [qrValue, setQrValue] = useState<string | null>(null);

  const onSubmit: SubmitHandler<ShipmentFormInputs> = (data) => {
    const qrData = JSON.stringify(data);
    setQrValue(qrData);
    reset(); // Optionally reset the form after submission
  };

  return (
    <div className="max-w-lg mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Shipment Form</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block font-medium mb-2">Driver Name</label>
          <input
            type="text"
            {...register("driverName", { required: true })}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Enter driver name"
          />
        </div>
        <div>
          <label className="block font-medium mb-2">Trailer ID</label>
          <input
            type="text"
            {...register("trailerId", { required: true })}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Enter trailer ID"
          />
        </div>
        <div>
          <label className="block font-medium mb-2">Shipment Content</label>
          <textarea
            {...register("shipmentContent", { required: true })}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Enter shipment content"
          />
        </div>
        <div>
          <label className="block font-medium mb-2">Destination</label>
          <input
            type="text"
            {...register("destination", { required: true })}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Enter destination"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Generate QR Code
        </button>
      </form>

      {qrValue && (
        <div className="mt-8 text-center">
          <h3 className="text-xl font-semibold mb-2">QR Code:</h3>
          <QRCode value={qrValue} size={200} />
        </div>
      )}
    </div>
  );
};

export default ShipmentForm;
