// import React from 'react'
import logo from "/shared/logo.svg";
import hamburger from "/shared/icon-hamburger.svg";
import close from "/shared/icon-close.svg";
import { NavLink } from "react-router-dom";
import { useState } from "react";
function HeaderTab() {
  const activeStyle = "border-r-4 sm:border-r-0 sm:border-b-4 sm:py-6";
  const normalStyle =
    " border-r-4 sm:border-r-0 sm:border-b-4 border-transparent hover:border-gray-400 sm:py-6";
  let navStyle =
    "fixed sm:flex-grow md:flex-grow-0 z-30 top-0 right-0 bottom-0 sm:static sm:w-auto backdrop-blur-lg sm:h-fit border border-gray-600 border-r-transparent transition-all";

  const [icon, setIcon] = useState(false);

  function toggleNav() {
    setIcon((prev) => !prev);
  }

  if (!icon) {
    navStyle += " w-0";
  } else {
    navStyle += " w-2/3";
  }

  return (
    <>
      <header className="fixed z-50 pl-6 md:pl-14 flex items-center md:items-end  w-full font-custom h-[8.5rem]">
        <div className="flex justify-between gap-5 md:gap-8 items-center w-full">
          <div className="relative flex items-center md:w-full">
            <NavLink to="">
              <img src={logo} alt="" className="bg-white rounded-full" />
            </NavLink>
            <div className="absolute h-[1px] bg-[rgb(71,73,82)] left-20 -right-16 z-40 hidden md:block"></div>
          </div>

          <div className="pr-8 z-40 sm:hidden ">
            <button onClick={toggleNav}>
              <img src={!icon ? hamburger : close} alt="" />
            </button>
          </div>

          <nav className={navStyle}>
            <div className="sm:block pl-10 sm:px-8 md:px-20">
              <ul className="text-white text-2xl lg:text-3xl flex flex-col sm:flex-row justify-center md:justify-end gap-12 sm:gap-4 lg:gap-10 lg:pl-20 pl-0 mt-32 sm:mt-0">
                <NavLink
                  to={""}
                  className={({ isActive }) =>
                    isActive ? activeStyle : normalStyle
                  }
                  end
                >
                  <span className="mr-3 font-semibold">00</span>Home
                </NavLink>
                <NavLink
                  to={"destination"}
                  className={({ isActive }) =>
                    isActive ? activeStyle : normalStyle
                  }
                >
                  <span className="mr-3 font-semibold">01</span>Destination{" "}
                </NavLink>
                <NavLink
                  to={"crew"}
                  className={({ isActive }) =>
                    isActive ? activeStyle : normalStyle
                  }
                >
                  <span className="mr-3 font-semibold">02</span>Crew
                </NavLink>
                <NavLink
                  to={"technology"}
                  className={({ isActive }) =>
                    isActive ? activeStyle : normalStyle
                  }
                >
                  <span className="mr-3 font-semibold">03</span>Technology
                </NavLink>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}

export default HeaderTab;
