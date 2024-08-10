import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { AiFillBell } from "react-icons/ai";
import { FaParking } from "react-icons/fa";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";


const AddSlot = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-1/4 bg-blue-600 p-4">
        <div className="flex items-center justify-center mb-8">
          <img src="../assets/yms.jpg" alt="Software Logo" className="h-12" />
          <h1 className="text-white text-2xl font-bold ml-4">Yard Mangement</h1>
        </div>
        <div className="flex flex-col space-y-4">
          <Button className="text-white flex items-center space-x-2">
            <FaParking />
            <span>Add Parking Slot</span>
          </Button>
          <Button className="text-white flex items-center space-x-2">
            {/* Add more buttons if needed */}
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-3/4 p-8">
        <div className="flex justify-end items-center space-x-4">
          <AiFillBell className="text-blue-600 text-2xl" />
          <div className="flex items-center space-x-2">
            {/* <img
              src="avatar.jpg"
              alt="User Avatar"
              className="h-8 w-8 rounded-full"
            /> */}
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            {/* <span className="text-gray-600">Moni Roy</span> */}
            {/* <span className="text-gray-400 text-sm">Admin</span> */}
          </div>
        </div>

        {/* Form Section */}
        <Card className="mt-8 p-8">
          <form className="space-y-4">
            <div>
              <label htmlFor="id" className="text-yellow-500">
                ID:
              </label>
              <Input id="id" placeholder="PL1234" />
            </div>
            <div>
              <label htmlFor="section" className="text-yellow-500">
                Section:
              </label>
              <Input id="section" placeholder="A1" />
            </div>
            <div>
              <label htmlFor="slotNumber" className="text-yellow-500">
                Slot Number:
              </label>
              <Input id="slotNumber" placeholder="101" />
            </div>
            <div>
              <label htmlFor="slotId" className="text-yellow-500">
                Slot ID:
              </label>
              <Input id="slotId" placeholder="SL-001" />
            </div>
            <Button type="submit" className="bg-yellow-500 text-white w-full">
              Submit
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default AddSlot;
