import React from "react";
import { Icon } from "@iconify/react";

const ListCard = ({ user, handleClick }: any) => {
  return (
    <div
      onClick={() => handleClick(user)}
      className="bg-white border p-5 rounded-xl shadow-sm cursor-pointer hover:shadow-md transition-all duration-300 ease-linear min-w-max"
    >
      <div className="flex justify-between items-center gap-3">
        <div className="flex items-center gap-3 min-w-72">
          <div className="h-10 w-10 rounded-full bg-gray-300 flex justify-center items-center">
            <Icon
              icon="lets-icons:user-scan-fill"
              className="text-2xl text-white"
            />
          </div>
          <h3 className="font-medium">{user.name}</h3>
        </div>

        <p className="text-gray-400 text-sm min-w-72">{user.email}</p>

        <div className="flex items-center gap-1 min-w-52">
          <Icon icon="weui:time-outlined" className="text-gray-500 text-xl" />
          <p className="text-lg font-medium">
            10:00 <span className="text-xs font-normal text-gray-500">AM</span>
          </p>
        </div>

        <p className="text-gray-400 text-sm min-w-52">31-08-2024</p>

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

        {/* <Button text="View Details" margin="1.5rem 0 0" onClick={() => {}} /> */}
      </div>
    </div>
  );
};

export default ListCard;
