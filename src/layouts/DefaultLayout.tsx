import React from "react";
import SideMenu from "../components/common/SideMenu";

interface Props {
  children: React.ReactNode;
}

const DefaultLayout = ({ children }: Props) => {
  return (
    <div className="flex items-start">
      <SideMenu />
      <div className="h-screen bg-lightGray w-full">{children}</div>
    </div>
  );
};

export default DefaultLayout;
