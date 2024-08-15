import { User } from "lucide-react";
import { useState, ChangeEvent, FormEvent } from "react";
import Sidebar from "@/components/Sidebar/Sidebar";

const ProfilePage = () => {
  const [formData, setFormData] = useState({
    fullName: "John Doe",
    emailAddress: "johndoe@example.com",
    phoneNumber: "+123 456 7890",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 p-4 ml-32 overflow-auto">
        <div className="flex flex-col items-center p-8 mt-12 bg-gray-100 min-h-screen">
          <div className="max-w-4xl w-full bg-white shadow-md rounded-lg p-6">
            {/* Profile Header */}
            <div className="flex items-center mb-6">
              <div className="h-24 w-24 rounded-full border-4 border-primary bg-gray-200 flex items-center justify-center">
                <User size={96} className="text-gray-400" />
              </div>
              <div className="ml-6">
                <h1 className="text-2xl font-semibold text-gray-800">
                  {formData.fullName}
                </h1>
                <p className="text-gray-600">{formData.emailAddress}</p>
                <p className="text-gray-600">{formData.phoneNumber}</p>
              </div>
            </div>

            {/* Profile Information Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label
                    className="block text-sm font-semibold text-gray-700"
                    htmlFor="fullName"
                  >
                    Full Name
                  </label>
                  <input
                    className="mt-1 w-full rounded border border-gray-300 px-4 py-2 text-gray-900"
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label
                    className="block text-sm font-semibold text-gray-700"
                    htmlFor="emailAddress"
                  >
                    Email Address
                  </label>
                  <input
                    className="mt-1 w-full rounded border border-gray-300 px-4 py-2 text-gray-900"
                    type="email"
                    id="emailAddress"
                    name="emailAddress"
                    value={formData.emailAddress}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label
                    className="block text-sm font-semibold text-gray-700"
                    htmlFor="phoneNumber"
                  >
                    Phone Number
                  </label>
                  <input
                    className="mt-1 w-full rounded border border-gray-300 px-4 py-2 text-gray-900"
                    type="text"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                  />
                </div>
                <div className="md:col-span-2">
                  <label
                    className="block text-sm font-semibold text-gray-700"
                    htmlFor="bio"
                  >
                    Bio
                  </label>
                  <textarea
                    className="mt-1 w-full rounded border border-gray-300 px-4 py-2 text-gray-900"
                    id="bio"
                    name="bio"
                    rows={4}
                    value={formData.bio}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Buttons */}
              <div className="flex justify-end gap-4">
                <button
                  className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600"
                  type="button"
                  onClick={() => alert("Cancel")}
                >
                  Cancel
                </button>
                <button
                  className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                  type="submit"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
