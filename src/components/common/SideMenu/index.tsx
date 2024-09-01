import React, { useState } from "react";
import { menu } from "./menuList";
import { Icon } from "@iconify/react";
import { Link, useLocation } from "react-router-dom";

interface MenuProps {
  label: string;
  link: string;
  subMenu: SubMenuProps[];
  isOpen?: boolean;
}
interface SubMenuProps {
  label: string;
  link: string;
}

const SideMenu = () => {
  const location = useLocation();

  const [isShowMenu, setIsShowMenu] = useState(false);
  const [menuList, setMenuList] = useState(menu);

  const handleClick = (index: number) => {
    if (menu[index].isOpen) {
      menu[index].isOpen = false;
    } else {
      menu[index].isOpen = true;
    }
    setMenuList([...menu]);
  };

  const toggleMenu = () => {
    setIsShowMenu(!isShowMenu);
  };

  return (
    <React.Fragment>
      <div
        className={`flex-shrink-0 w-72 h-screen flex flex-col justify-stretch transform z-20 lg:shadow-none shadow-lg ${
          isShowMenu ? "translate-x-0" : "lg:translate-x-0 -translate-x-full"
        } lg:relative fixed transition-all duration-100 ease-in-out bg-white`}
      >
        <Icon
          icon="ep:d-arrow-right"
          className={`lg:hidden absolute top-6 transition-all duration-300 ease-linear transform ${
            isShowMenu ? "opacity-0" : "left-full translate-x-1 opacity-100"
          } text-lg`}
          onClick={toggleMenu}
        />
        {isShowMenu && (
          <Icon
            icon="solar:close-square-broken"
            className={`lg:hidden absolute top-6 right-4 transition-all duration-150 ease-linear text-lg`}
            onClick={toggleMenu}
          />
        )}
        <div className="text-lg font-medium p-5 border-b border-r border-gray-200 flex items-center gap-2">
          <Icon icon="vscode-icons:file-type-firestore" className="text-3xl" />
          EStore
        </div>
        <div className="overflow-y-scroll h-full py-5 rounded-2xl ">
          {menuList.map(
            ({ label, link, subMenu, isOpen }: MenuProps, index: number) => (
              <div key={label} className="px-3">
                {/* Main Menu */}
                {subMenu.length > 0 ? (
                  <div
                    onClick={() => handleClick(index)}
                    className={`px-5 py-2 cursor-pointer flex justify-between items-center gap-2 rounded-md styled-hover ${
                      location.pathname === link && "bg-lightGray"
                    } `}
                  >
                    <h2>{label}</h2>
                    <Icon
                      className={`transform transition-all duration-150 ease-linear ${
                        isOpen ? "-rotate-180" : "rotate-0"
                      }`}
                      icon="solar:alt-arrow-down-line-duotone"
                    />
                  </div>
                ) : (
                  <Link
                    to={link}
                    className={`px-5 py-2 block rounded-md styled-hover ${
                      location.pathname === link && "bg-lightGray"
                    }`}
                  >
                    <span className="w-full">{label}</span>
                  </Link>
                )}

                {/* Sub Menu */}
                <div
                  className={`flex flex-col transition-all duration-150 ease-linear overflow-y-hidden`}
                  style={{
                    height: isOpen ? `${40 * subMenu.length}px` : "0px",
                  }}
                >
                  {subMenu.length > 0 &&
                    subMenu.map(({ label, link }: SubMenuProps) => (
                      <Link
                        to={link}
                        key={label}
                        className={`py-2 px-8 cursor-pointer rounded-md styled-hover ${
                          location.pathname === link && "bg-lightGray"
                        }`}
                      >
                        {label}
                      </Link>
                    ))}
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default SideMenu;
