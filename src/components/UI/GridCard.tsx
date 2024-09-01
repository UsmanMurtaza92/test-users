import React from "react";
import { Icon } from "@iconify/react";
import Button from "./Button";

const GridCard = ({ user, handleClick }: any) => {
  return (
    <div className="bg-white border p-5 rounded-xl shadow-sm">
      <div className="flex justify-end items-center gap-2">
        <Icon
          icon="mynaui:edit-one"
          className="text-2xl text-gray-400 cursor-pointer hover:text-primary transition-all duration-300 ease-linear"
        />
        <Icon
          icon="hugeicons:remove-square"
          className="text-2xl text-gray-400 cursor-pointer hover:text-primary transition-all duration-300 ease-linear"
        />
      </div>
      <div className="flex flex-col justify-center items-center mt-2">
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

        <Button
          text="View Details"
          margin="1.5rem 0 0"
          onClick={() => handleClick(user)}
        />
      </div>
    </div>
  );
};

export default GridCard;
