import React from "react";
import { Icon } from "@iconify/react";

const DetailCard = ({ user, closeModal }: any) => {
  return (
    <div className="fixed md:top-0 top-1/2 md:right-0 right-1/2 transform md:translate-x-0 md:translate-y-0 translate-x-1/2 -translate-y-1/2 bg-white md:h-screen overflow-y-scroll md:w-7/12 w-11/12 shadow-2xl rounded-t-xl rounded-l-xl md:p-20 p-10 md:border-none border">
      <div className="flex justify-between items-center gap-2">
        <Icon
          icon="solar:close-square-broken"
          className="text-2xl text-gray-400 cursor-pointer hover:text-primary transition-all duration-300 ease-linear"
          onClick={closeModal}
        />
        <div className="flex items-center gap-2">
          <Icon
            icon="mynaui:edit-one"
            className="text-2xl text-gray-400 cursor-pointer hover:text-primary transition-all duration-300 ease-linear"
          />
          <Icon
            icon="hugeicons:remove-square"
            className="text-2xl text-gray-400 cursor-pointer hover:text-primary transition-all duration-300 ease-linear"
          />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center mt-5">
        <div className="h-20 w-20 rounded-full bg-gray-300 flex justify-center items-center mb-5 shadow-border">
          <Icon
            icon="lets-icons:user-scan-fill"
            className="text-4xl text-white"
          />
        </div>
        <h3 className="font-medium">{user.name}</h3>
        <p className="text-gray-400 text-sm">{user.email}</p>

        <div className="flex justify-between gap-2 w-full mt-6 max-w-72 mx-auto">
          <div className="flex items-center gap-1 mb-2">
            <Icon icon="weui:time-outlined" className="text-gray-500 text-xl" />
            <p className="2xl:text-lg text-md font-medium">
              10:00{" "}
              <span className="text-xs font-normal text-gray-500">AM</span>
            </p>
          </div>
          <p className="text-gray-400 2xl:text-sm text-xs">31-08-2024</p>
        </div>

        <div className="max-w-72 mx-auto my-3 w-full">
          <p className="text-center text-sm text-gray-400">Company Details</p>

          <p className="mt-1 mb-2 text-lg text-center">{user.company.name}</p>

          <p className="text-sm text-center">{user.company.catchPhrase}</p>
          <p className="text-sm text-gray-500 text-center">{user.company.bs}</p>
        </div>

        <div className="max-w-72 mx-auto mt-3 w-full">
          <p className="text-center text-sm text-gray-400">Address Details</p>

          <p className="mt-1 text-center">
            {user.address.street}, {user.address.city}
          </p>
          <p className="text-sm text-gray-500 text-center">
            {user.address.suite}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DetailCard;
