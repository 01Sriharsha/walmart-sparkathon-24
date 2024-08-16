import React from "react";
import { NavLink } from "react-router-dom";
import {
  CircleUser,
  UserPen,
  Eye,
  Settings,
  CalendarRange,
  LogOut,
  Truck
} from "lucide-react";
import { useAuth } from "../../context/AuthContext";

const Sidebar: React.FC = () => {
  const { role } = useAuth();

  return (
    <div className="fixed top-0 left-0 w-64 h-full bg-blue-900 text-white z-50 overflow-hidden transition-transform duration-300 ease-in-out">
      <div className="flex items-center justify-between p-4 border-b border-blue-700">
        <div className="flex items-center">
          <img src="./src/assets/logo.png" alt="Logo" className="h-12 w-12 mr-2" />
          <span className="text-xl font-semibold">Yard Logix</span>
        </div>
      </div>
      <nav className="mt-6">
        <ul>
          {role === "admin" && (
            <>
              <li className="flex items-center p-2 hover:bg-blue-700 rounded-md">
                <Eye className="mr-3" />
                <NavLink
                  to="/eagle-view"
                  className="block px-4 py-2 text-gray-300 hover:text-white"
                >
                  Eagle View
                </NavLink>
              </li>
              <li className="flex items-center p-2 hover:bg-blue-700 rounded-md">
                <UserPen className="mr-3" />
                <NavLink
                  to="/add-user"
                  className="block px-4 py-2 text-gray-300 hover:text-white"
                >
                  Add Manager
                </NavLink>
              </li>
              <li className="flex items-center p-2 hover:bg-blue-700 rounded-md">
                <CalendarRange className="mr-3" />
                <NavLink
                  to="/admin/reports"
                  className="block px-4 py-2 text-gray-300 hover:text-white"
                >
                  Reports
                </NavLink>
              </li>
            </>
          )}
          {role === "manager" && (
            <>
              <li className="flex items-center p-2 hover:bg-blue-700 rounded-md">
                <Eye className="mr-3" />
                <NavLink
                  to="/"
                  className="block px-4 py-2 text-gray-300 hover:text-white"
                >
                  Eagle View
                </NavLink>
              </li>
              <li className="flex items-center p-2 hover:bg-blue-700 rounded-md">
                <UserPen className="mr-3" />
                <NavLink
                  to="/add-user"
                  className="block px-4 py-2 text-gray-300 hover:text-white"
                >
                  Add Supervisor
                </NavLink>
              </li>
              <li className="flex items-center p-2 hover:bg-blue-700 rounded-md">
                <CalendarRange className="mr-3" />
                <NavLink
                  to="/manager/add-slot"
                  className="block px-4 py-2 text-gray-300 hover:text-white"
                >
                  Add Slot
                </NavLink>
              </li>
            </>
          )}
          {role === "supervisor" && (
            <ul>
            <li className="flex items-center p-2 hover:bg-blue-700 rounded-md">
              <UserPen className="mr-3" />
              <NavLink
                to="/add-user"
                className="block px-4 py-2 text-gray-300 hover:text-white"
              >
                Add Worker
              </NavLink>
            </li>
            <li className="flex items-center p-2 hover:bg-blue-700 rounded-md">
            <Truck className="mr-3" />
              <NavLink
                to="/loadShipments"
                className="block px-4 py-2 text-gray-300 hover:text-white"
              >
                Load Shipments
              </NavLink>
            </li>
            </ul>
          )}
                    <li className="flex items-center p-2 hover:bg-blue-700 rounded-md">
            <CircleUser className="mr-3" />
            <NavLink
              to="/profile"
              className="block px-4 py-2 text-gray-300 hover:text-white"
            >
              Profile
            </NavLink>
          </li>
          <li className="flex items-center p-2 hover:bg-blue-700 rounded-md">
            <Settings className="mr-3" />
            <NavLink
              to="/settings"
              className="block px-4 py-2 text-gray-300 hover:text-white"
            >
              Settings
            </NavLink>
          </li>
          <li className="flex items-center p-2 hover:bg-blue-700 rounded-md">
            <LogOut className="mr-3" />
            <NavLink
              to="/login"
              className="block px-4 py-2 text-gray-300 hover:text-white"
            >
              Logout
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
