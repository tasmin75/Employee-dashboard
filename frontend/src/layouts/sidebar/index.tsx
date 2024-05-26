import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { IoIosArrowBack, IoIosArrowUp } from "react-icons/io";
import { useMediaQuery } from "react-responsive";
import { MdMenu } from "react-icons/md";
import { NavLink, useLocation } from "react-router-dom";
import sidebar_logo from "../../assets/icons/sidebar_logo.png";
import plogo from "../../assets/icons/plogo.png";

import DashboardIcon from "../../assets/icons/DashboardIcons";
import Employees from "../../assets/icons/Employees";

import BellIcon from "../../assets/icons/BellIcon";

interface SidebarProps {}

const Sidebar: React.FC<SidebarProps> = () => {
  const isTabletMid = useMediaQuery({ query: "(max-width: 768px)" });
  const [open, setOpen] = useState<boolean>(isTabletMid ? false : true);
  const [activeLink, setActiveLink] = useState<string>("");
  const sidebarRef = useRef<HTMLDivElement>(null);
  const { pathname } = useLocation();

  console.log("open", open);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/signin";
  };

  useEffect(() => {
    if (isTabletMid) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }, [isTabletMid]);

  useEffect(() => {
    isTabletMid && setOpen(false);
  }, [pathname]);

  const Nav_animation = isTabletMid
    ? {
        open: {
          x: 0,
          width: "16rem",
          transition: {
            damping: 40,
          },
        },
        closed: {
          x: -250,
          width: 0,
          transition: {
            damping: 40,
            delay: 0.15,
          },
        },
      }
    : {
        open: {
          width: "16rem",
          transition: {
            damping: 40,
          },
        },
        closed: {
          width: "4rem",
          transition: {
            damping: 40,
          },
        },
      };

  return (
    <div className="fixed sm:static pr-1 top-0 h-[100%] ">
      <div
        onClick={() => setOpen(false)}
        className={`md:hidden fixed inset-0 max-h-screen z-[998] bg-black/50 ${
          open ? "block" : "hidden"
        } `}
      ></div>
      <motion.div
        ref={sidebarRef}
        variants={Nav_animation}
        initial={{ x: isTabletMid ? -250 : 0 }}
        animate={open ? "open" : "closed"}
        className=" bg-white text-gray shadow-xl z-[999] max-w-[18rem] w-[18rem] overflow-hidden md:relative fixed sm:h-screen h-full"
      >
        <div className="p-10">
          <img src={sidebar_logo} className="w-30 h-10 mx-auto" alt="" />
        </div>

        <div className="flex flex-col h-full">
          <ul className="whitespace-pre px-2.5 text-[0.9rem] py-5 flex flex-col gap-4 font-medium overflow-x-hidden scrollbar-thin scrollbar-track-white scrollbar-thumb-slate-100 md:h-[68%] h-[70%]">
            <li>
              <NavLink
                to={"/"}
                className="link"
                onClick={() => setActiveLink("Dashboard")}
              >
                <DashboardIcon
                  color={activeLink === "Dashboard" ? "blue" : ""}
                />
                Dashboard
              </NavLink>
            </li>

            <li>
              <NavLink
                to={"/employees"}
                className="link"
                onClick={() => setActiveLink("employees")}
              >
                <Employees color={activeLink === "employees" ? "blue" : ""} />
                Employees
              </NavLink>
            </li>
          </ul>
          <button
            onClick={handleLogout}
            className="text-white bg-blue-500 py-2 px-4 rounded-md font-medium w-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
          >
            Logout
          </button>
          {open && (
            <div className="flex-1 text-sm z-50  max-h-48 my-auto w-full font-medium">
              <div className="flex p-2 items-center border-2 rounded-lg m-2">
                <div>
                  <img src={plogo} alt="img" />

                  <div className="flex justify-between  gap-5 items-center">
                    <div
                      onClick={() => {
                        setOpen(!open);
                      }}
                      className="flex gap-9 bg-blue-50 justify-between items-center sm:px-3 px-0 sm:py-2 py-0 rounded-md w-full"
                    >
                      <div className="text-teal-500 text-xs flex sm:pr-1 pr-9 gap-2 items-center">
                        <div className="bg-black text-white rounded-full w-6 h-6 flex items-center justify-center">
                          <span className="text-xs">T</span>
                        </div>
                        <p>Close</p>
                      </div>
                      <IoIosArrowUp />
                    </div>
                    <BellIcon className="w-10 ml-2" />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        {!open && (
          <motion.div
            onClick={() => {
              setOpen(!open);
            }}
            animate={
              open
                ? {
                    x: 0,
                    y: 0,
                    rotate: 0,
                  }
                : {
                    x: -10,
                    y: -200,
                    rotate: 180,
                  }
            }
            transition={{ duration: 0 }}
            className="absolute w-fit h-fit md:block z-50 hidden right-2 bottom-3 cursor-pointer"
          >
            <IoIosArrowBack size={25} />
          </motion.div>
        )}
      </motion.div>

      <div className="m-3 md:hidden" onClick={() => setOpen(!open)}>
        <MdMenu size={25} />
      </div>
    </div>
  );
};

export default Sidebar;
