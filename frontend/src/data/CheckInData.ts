// shipmentData.ts
export interface Shipment {
  arrivalTime: string;
  arrivalDate: string;
  quantity: string;
  itemDescription: string;
  vehicleNumber: string;
}

export const shipmentData: Shipment[] = [
  {
    arrivalTime: "10:30 AM",
    arrivalDate: "2024-08-15",
    quantity: "50",
    itemDescription: "Electronic Components",
    vehicleNumber: "KA-01-AB-1234",
  },
  {
    arrivalTime: "11:15 AM",
    arrivalDate: "2024-08-16",
    quantity: "120",
    itemDescription: "Textiles",
    vehicleNumber: "MH-02-XY-5678",
  },
  {
    arrivalTime: "12:45 PM",
    arrivalDate: "2024-08-17",
    quantity: "75",
    itemDescription: "Furniture",
    vehicleNumber: "DL-03-MN-9876",
  },
  {
    arrivalTime: "02:30 PM",
    arrivalDate: "2024-08-18",
    quantity: "200",
    itemDescription: "Automobile Parts",
    vehicleNumber: "TN-04-ZX-4567",
  },
  {
    arrivalTime: "03:00 PM",
    arrivalDate: "2024-08-19",
    quantity: "90",
    itemDescription: "Groceries",
    vehicleNumber: "AP-05-QW-3456",
  },
  {
    arrivalTime: "04:20 PM",
    arrivalDate: "2024-08-20",
    quantity: "150",
    itemDescription: "Medicines",
    vehicleNumber: "GJ-06-BN-7890",
  },
  {
    arrivalTime: "05:45 PM",
    arrivalDate: "2024-08-21",
    quantity: "80",
    itemDescription: "Stationery",
    vehicleNumber: "UP-07-AS-1234",
  },
  {
    arrivalTime: "06:10 PM",
    arrivalDate: "2024-08-22",
    quantity: "130",
    itemDescription: "Machinery",
    vehicleNumber: "WB-08-TU-5678",
  },
  {
    arrivalTime: "07:35 PM",
    arrivalDate: "2024-08-23",
    quantity: "110",
    itemDescription: "Clothing",
    vehicleNumber: "RJ-09-OP-9012",
  },
  {
    arrivalTime: "08:00 PM",
    arrivalDate: "2024-08-24",
    quantity: "95",
    itemDescription: "Books",
    vehicleNumber: "MP-10-LK-3456",
  },
];
