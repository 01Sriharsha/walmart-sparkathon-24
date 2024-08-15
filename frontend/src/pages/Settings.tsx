import { ChangeEvent, FormEvent, useState } from "react";
import Breadcrumb from "../components/Breadcrumbs/Breadcrumb";
import Sidebar from "@/components/Sidebar/Sidebar";
import { User } from "lucide-react";

const Settings = () => {
  const [formData, setFormData] = useState({
    fullName: "Devid Jhon",
    phoneNumber: "+990 3343 7865",
    emailAddress: "devidjond45@gmail.com",
    username: "devidjhon24",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque posuere fermentum urna, eu condimentum mauris tempus ut. Donec fermentum blandit aliquet.",
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
        <div className="mx-auto max-w-3xl">
          <Breadcrumb pageName="Settings" />
          <div className="grid gap-10 md:grid-cols-2">
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
              <div className="border-b border-stroke py-4 px-7 dark:border-strokedark">
                <h3 className="text-xl font-semibold text-black dark:text-white">
                  Personal Information
                </h3>
              </div>
              <div className="p-7">
                <form onSubmit={handleSubmit}>
                  <div className="mb-6 flex flex-col gap-6 sm:flex-row">
                    <div className="w-full sm:w-1/2">
                      <label
                        className="mb-2.5 block text-sm font-semibold text-black dark:text-white"
                        htmlFor="fullName"
                      >
                        Full Name
                      </label>
                      <input
                        className="w-full rounded border border-stroke bg-gray-100 py-3 px-4 text-black focus:border-primary focus:ring-primary dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                        type="text"
                        name="fullName"
                        id="fullName"
                        placeholder="Devid Jhon"
                        value={formData.fullName}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="w-full sm:w-1/2">
                      <label
                        className="mb-2.5 block text-sm font-semibold text-black dark:text-white"
                        htmlFor="phoneNumber"
                      >
                        Phone Number
                      </label>
                      <input
                        className="w-full rounded border border-stroke bg-gray-100 py-3 px-4 text-black focus:border-primary focus:ring-primary dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                        type="text"
                        name="phoneNumber"
                        id="phoneNumber"
                        placeholder="+990 3343 7865"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="mb-6">
                    <label
                      className="mb-2.5 block text-sm font-semibold text-black dark:text-white"
                      htmlFor="emailAddress"
                    >
                      Email Address
                    </label>
                    <input
                      className="w-full rounded border border-stroke bg-gray-100 py-3 px-4 text-black focus:border-primary focus:ring-primary dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                      type="email"
                      name="emailAddress"
                      id="emailAddress"
                      placeholder="devidjond45@gmail.com"
                      value={formData.emailAddress}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      className="mb-2.5 block text-sm font-semibold text-black dark:text-white"
                      htmlFor="username"
                    >
                      Username
                    </label>
                    <input
                      className="w-full rounded border border-stroke bg-gray-100 py-3 px-4 text-black focus:border-primary focus:ring-primary dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                      type="text"
                      name="username"
                      id="username"
                      placeholder="devidjhon24"
                      value={formData.username}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      className="mb-2.5 block text-sm font-semibold text-black dark:text-white"
                      htmlFor="bio"
                    >
                      BIO
                    </label>
                    <textarea
                      className="w-full rounded border border-stroke bg-gray-100 py-3 px-4 text-black focus:border-primary focus:ring-primary dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                      name="bio"
                      id="bio"
                      rows={6}
                      placeholder="Write your bio here"
                      value={formData.bio}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                  <div className="flex justify-end gap-4">
                    <button
                      className="rounded border border-stroke py-2 px-6 font-semibold text-white bg-gray-600 hover:bg-gray-700 dark:border-strokedark dark:bg-gray-700"
                      type="button"
                      onClick={() =>
                        setFormData({
                          fullName: "",
                          phoneNumber: "",
                          emailAddress: "",
                          username: "",
                          bio: "",
                        })
                      }
                    >
                      Cancel
                    </button>
                    <button
                      className="rounded bg-primary py-2 px-6 font-semibold text-white hover:bg-opacity-90"
                      type="submit"
                    >
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <div className="rounded-sm bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
              <div className="border-b border-stroke py-4 px-7 dark:border-strokedark">
                <h3 className="font-medium text-black dark:text-white">
                  Your Photo
                </h3>
              </div>
              <div className="p-7">
                <form action="#">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="h-14 w-14 rounded-full">
                      <User />
                    </div>
                    <div>
                      <span className="mb-1.5 text-black dark:text-white">
                        Edit your photo
                      </span>
                      <span className="flex gap-2.5">
                        <button className="text-sm hover:text-primary">
                          Delete
                        </button>
                        <button className="text-sm hover:text-primary">
                          Update
                        </button>
                      </span>
                    </div>
                  </div>

                  <div
                    id="FileUpload"
                    className="relative mb-5.5 block w-full cursor-pointer appearance-none rounded border border-dashed border-primary bg-gray py-4 px-4 dark:bg-meta-4 sm:py-7.5"
                  >
                    <input
                      type="file"
                      accept="image/*"
                      className="absolute inset-0 z-50 m-0 h-full w-full cursor-pointer p-0 opacity-0 outline-none"
                    />
                    <div className="flex flex-col items-center justify-center space-y-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full border border-stroke bg-white dark:border-strokedark dark:bg-boxdark">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M1.99967 9.33337C2.36786 9.33337 2.66634 9.63185 2.66634 10V12.6667C2.66634 12.8435 2.73658 13.0131 2.8616 13.1381C2.98663 13.2631 3.1562 13.3334 3.33301 13.3334H12.6663C12.8431 13.3334 13.0127 13.2631 13.1377 13.1381C13.2627 13.0131 13.333 12.8435 13.333 12.6667V10C13.333 9.63185 13.6315 9.33337 13.9997 9.33337C14.368 9.33337 14.6667 9.63185 14.6667 10V12.6667C14.6667 13.8999 13.8998 14.6667 12.6667 14.6667H3.33334C2.10019 14.6667 1.33334 13.8999 1.33334 12.6667V10C1.33334 9.63185 1.632 9.33337 1.99967 9.33337Z"
                            fill="#4B5563"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M8.00067 7.00001C8.08123 7.00001 8.16062 7.02879 8.22958 7.08577L9.63229 8.12606L11.4307 6.73856L11.5847 6.59456C11.6556 6.52363 11.7511 6.48511 11.8471 6.48511C11.9432 6.48511 12.0387 6.52363 12.1095 6.59456L12.2635 6.73856L13.0607 7.41885C13.1058 7.46083 13.1431 7.51161 13.1648 7.56894C13.1865 7.62627 13.1914 7.68793 13.1784 7.7499C13.1653 7.81187 13.1345 7.87077 13.0897 7.91291L8.5824 12.3334H7.84902C7.75915 12.3334 7.68149 12.2974 7.62844 12.2351L5.63577 10.3327C5.61551 10.3126 5.5958 10.2934 5.5769 10.2746L4.75774 9.6429C4.72239 9.60173 4.68399 9.558 4.64414 9.51174C4.59816 9.46298 4.55061 9.41539 4.50041 9.36851C4.45443 9.32577 4.40919 9.28434 4.36213 9.24447L4.28985 9.19689L4.22453 9.15684C4.20624 9.14461 4.19006 9.12695 4.17689 9.10502L4.11953 9.02163C4.09174 8.97882 4.06694 8.93853 4.0453 8.90171C4.01931 8.8564 3.99668 8.81769 3.97797 8.78348C3.94848 8.72198 3.92583 8.65848 3.91047 8.59309L3.89769 8.54329C3.88534 8.5011 3.87582 8.45738 3.86879 8.41411C3.86161 8.37153 3.85563 8.32847 3.85145 8.28501C3.84586 8.24453 3.84277 8.20389 3.84226 8.16239C3.83915 8.0714 3.84962 7.98033 3.86556 7.89095C3.88189 7.80542 3.90242 7.72295 3.92771 7.64419C3.94518 7.59484 3.96566 7.54682 3.99003 7.50054C4.01307 7.45766 4.03845 7.41726 4.06603 7.37967L6.78849 5.40374C6.78849 5.40374 6.78849 5.40374 6.78849 5.40374C6.78849 5.40374 6.78849 5.40374 6.78849 5.40374L8.00067 7.00001Z"
                            fill="#4B5563"
                          />
                        </svg>
                      </span>
                      <div className="text-sm text-body dark:text-white">
                        Drag and drop or
                        <span className="text-primary underline">
                          {" "}
                          Browse
                        </span>{" "}
                        for a file
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end gap-4 mt-6">
                    <button
                      className="rounded border border-stroke py-2 px-6 font-semibold text-white bg-gray-600 hover:bg-gray-700 dark:border-strokedark dark:bg-gray-700"
                      type="button"
                      onClick={() => alert("Delete photo")}
                    >
                      Delete
                    </button>
                    <button
                      className="rounded bg-primary py-2 px-6 font-semibold text-white hover:bg-opacity-90"
                      type="submit"
                    >
                      Update
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
