import React from "react";
import { Bell, User } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Navbar: React.FC = () => {
  const [position, setPosition] = React.useState("bottom");
  const navigate = useNavigate();
  const { setRole } = useAuth();

  const handleNavigation = (value: string) => {
    setPosition(value);
    setRole(value);

    switch (value) {
      case "admin":
        navigate("/adminDashboard");
        break;
      case "manager":
        navigate("/managerDashboard");
        break;
      case "supervisor":
        navigate("/supervisorDashboard");
        break;
      case "worker":
        navigate("/workerDashboard");
        break;
      default:
        break;
    }
  };

  return (
    <nav className="bg-blue-900 text-white p-5 flex justify-between items-center">
      {/* Left: Logo and Website Name */}
      <div className="flex items-center">
        <img src="./src/assets/logo.png" alt="Logo" className="h-8 w-8 mr-2" />
        <span className="text-xl font-semibold">Website Name</span>
      </div>

      {/* Right: Notification and Profile Dropdown */}
      <div className="flex items-center space-x-4">
        <Link
          to={"/notification"}
          className="relative p-2 text-white hover:text-gray-300"
        >
          <Bell className="w-6 h-6" />
          <span className="absolute top-0 right-0 block h-2 w-2 bg-red-600 rounded-full" />
        </Link>

        {/* Profile Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="text-blue-700">
              <User />
              Profile
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>Choose Profile</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuRadioGroup
              value={position}
              onValueChange={handleNavigation}
            >
              <DropdownMenuRadioItem value="admin">Admin</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="manager">
                Manager
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="supervisor">
                Supervisor
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="worker">
                Worker
              </DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};

export default Navbar;
