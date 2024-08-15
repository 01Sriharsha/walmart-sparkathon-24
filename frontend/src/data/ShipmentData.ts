export interface ShipmentData {
  label: string;
  backgroundColor: string;
  data: number[];
}

export const shipmentLabels: string[] = [
  "Shipment A",
  "Shipment B",
  "Shipment C",
  "Shipment D",
  "Shipment E",
  "Shipment F",
  "Shipment G",
  "Shipment H",
  "Shipment I",
  "Shipment J",
];

export const shipmentDatasets: ShipmentData[] = [
  {
    label: "On Time",
    backgroundColor: "#4caf50",
    data: [12, 19, 3, 5, 2, 8, 15, 10, 6, 7],
  },
  {
    label: "Delayed",
    backgroundColor: "#f44336",
    data: [2, 3, 20, 15, 12, 4, 1, 9, 8, 3],
  },
];
