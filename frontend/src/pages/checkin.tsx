import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { QrReader } from "react-qr-reader";
import { useTrailerContext } from "@/providers/eagle-view-context";

interface QRCodeData {
  driverName: string;
  trailerId: string;
  trailerName: string;
  shipmentDetails: string;
}

const CheckIn: React.FC = () => {
  const [qrData, setQrData] = useState<QRCodeData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { setTrailers } = useTrailerContext();
  const navigate = useNavigate();

  const handleScan = (data: string | null | undefined) => {
    if (data) {
      try {
        const parsedData: QRCodeData = JSON.parse(data);
        setQrData(parsedData);
        setError(null);
      } catch (err) {
        setError("Invalid QR code data.");
      }
    }
  };

  const handleError = (err: any) => {
    console.error(err);
    setError("Error reading QR code.");
  };

  const handleCheckIn = () => {
    if (qrData) {
      // Update the trailer data context
      setTrailers((prev) => [
        ...prev,
        {
          id: qrData.trailerId,
          name: qrData.trailerName,
          filled: true,
          driverName: qrData.driverName,
          shipmentDetails: qrData.shipmentDetails,
        },
      ]);

      // Redirect to Eagle View page
      navigate("/eagle-view");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Check-In Page</h1>

      <div className="mb-4">
        <QrReader
          constraints={{}}
          onResult={(result, error) => {
            if (result) {
              handleScan(result.getText());
            } else if (error) {
              handleError(error);
            }
          }}
          className="w-full"
        />
      </div>

      {error && <p className="text-red-500">{error}</p>}

      {qrData && (
        <div className="bg-gray-100 p-4 rounded shadow-md">
          <h2 className="text-xl font-semibold mb-2">Driver Details</h2>
          <p>
            <strong>Name:</strong> {qrData.driverName}
          </p>
          <h2 className="text-xl font-semibold mb-2">Trailer Details</h2>
          <p>
            <strong>ID:</strong> {qrData.trailerId}
          </p>
          <p>
            <strong>Name:</strong> {qrData.trailerName}
          </p>
          <h2 className="text-xl font-semibold mb-2">Shipment Details</h2>
          <p>{qrData.shipmentDetails}</p>
          <button
            onClick={handleCheckIn}
            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
          >
            Check In
          </button>
        </div>
      )}
    </div>
  );
};

export default CheckIn;
