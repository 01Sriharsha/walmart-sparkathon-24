import React from "react";

interface Notification {
  id: string;
  title: string;
  message: string;
  timestamp: string;
}

const notifications: Notification[] = [
  {
    id: "1",
    title: "New Trailer Assigned",
    message: "A new trailer has been assigned to your section.",
    timestamp: "2024-08-16 10:00 AM",
  },
  {
    id: "2",
    title: "Shipment Checked In",
    message: "Shipment ID 12345 has been successfully checked in.",
    timestamp: "2024-08-16 11:15 AM",
  },
  {
    id: "3",
    title: "Slot Availability Update",
    message: "A new slot has become available in Section 2.",
    timestamp: "2024-08-16 01:30 PM",
  },
  // Add more notifications as needed
];

const NotificationCard: React.FC<{ notification: Notification }> = ({
  notification,
}) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-4">
      <h3 className="text-lg font-semibold mb-2">{notification.title}</h3>
      <p className="text-gray-700">{notification.message}</p>
      <p className="text-gray-500 text-sm mt-2">{notification.timestamp}</p>
    </div>
  );
};

const NotificationPage: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Notifications</h1>
      {notifications.map((notification) => (
        <NotificationCard key={notification.id} notification={notification} />
      ))}
    </div>
  );
};

export default NotificationPage;
