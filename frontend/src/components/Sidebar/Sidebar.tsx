import { NavLink } from 'react-router-dom';
import { UserPen, House, Settings, CalendarRange, LogOut } from 'lucide-react';

const Sidebar = () => {
  return (
    <div
      className="fixed top-0 left-0 w-64 h-full bg-blue-900 text-white z-50 overflow-hidden transition-transform duration-300 ease-in-out"
    >
      <div className="flex items-center justify-between p-4 border-b border-blue-700">
        <h2 className="text-xl font-semibold">Dashboard</h2>
      </div>
      <nav className="mt-6">
        <ul>
          <li className="flex items-center p-2 hover:bg-blue-700 rounded-md">
            <House className="mr-3" />
            <NavLink
              to="/"
              className="block px-4 py-2 text-gray-300 hover:text-white"
            >
              Home
            </NavLink>
          </li>
          <li className="flex items-center p-2 border-blue-700 rounded-md">
            <Settings className="mr-3" />
            <NavLink
              to="/settings"
              className="block px-4 py-2 text-gray-300 hover:text-white"
            >
              Settings
            </NavLink>
          </li>
          <li className="flex items-center p-2 border-blue-700 rounded-md">
            <UserPen className="mr-3" />
            <NavLink
              to="/profile"
              className="block px-4 py-2 text-gray-300 hover:text-white"
            >
              Profile
            </NavLink>
          </li>
          <li className="flex items-center p-2 border-blue-700 rounded-md">
            <CalendarRange className="mr-3" />
            <NavLink
              to="/calendar"
              className="block px-4 py-2 text-gray-300 hover:text-white"
            >
              Calendar
            </NavLink>
          </li>
          <li className="flex items-center p-2 border-blue-700 rounded-md">
            <LogOut className="mr-3" />
            <NavLink
              to="/signout"
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
