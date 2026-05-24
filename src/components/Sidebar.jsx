import {
  FaChartPie,
  FaUserGraduate,
  FaClipboardCheck,
  FaFileAlt,
  FaCog,
  FaBars,
  FaTimes,
} from "react-icons/fa";

import { NavLink } from "react-router-dom";

import { useState } from "react";

function Sidebar() {

  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [

    {
      name: "Dashboard",
      icon: <FaChartPie />,
      path: "/",
    },

    {
      name: "Students",
      icon: <FaUserGraduate />,
      path: "/students",
    },

    {
      name: "Attendance",
      icon: <FaClipboardCheck />,
      path: "/attendance",
    },

    {
      name: "Reports",
      icon: <FaFileAlt />,
      path: "/reports",
    },

    {
      name: "Settings",
      icon: <FaCog />,
      path: "/settings",
    },

  ];

  return (

    <>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="lg:hidden fixed top-5 left-5 z-50 bg-cyan-400 p-3 rounded-full text-black"
      >

        <FaBars />

      </button>

      {/* Sidebar */}
      <div

        className={`

          fixed lg:static top-0 left-0 z-50

          w-72 min-h-screen

          bg-gray-900 border-r border-gray-800 p-6

          transform transition-transform duration-300

          ${isOpen ? "translate-x-0" : "-translate-x-full"}

          lg:translate-x-0

        `}
      >

        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="lg:hidden absolute top-5 right-5 text-red-400 text-2xl"
        >

          <FaTimes />

        </button>

        {/* Logo */}
        <div className="mb-12">

          <h1 className="text-4xl font-bold text-cyan-400">
            EduInsight
          </h1>

          <p className="text-gray-400 mt-2">
            College Analytics System
          </p>

        </div>

        {/* Menu */}
        <div className="space-y-4">

          {menuItems.map((item, index) => (

            <NavLink
              key={index}
              to={item.path}

              onClick={() => setIsOpen(false)}

              className={({ isActive }) =>
                `flex items-center gap-4 p-4 rounded-2xl text-lg transition duration-300

                ${
                  isActive
                    ? "bg-cyan-400 text-black font-bold"
                    : "hover:bg-gray-800 text-white"
                }`
              }
            >

              <span className="text-2xl">
                {item.icon}
              </span>

              <span>
                {item.name}
              </span>

            </NavLink>

          ))}

        </div>

        {/* Bottom Card */}
        <div className="mt-20 bg-gray-800 p-5 rounded-2xl">

          <h2 className="text-xl font-bold text-cyan-400">
            College Status
          </h2>

          <p className="text-gray-400 mt-3">
            All systems are running smoothly.
          </p>

        </div>

      </div>

    </>

  );
}

export default Sidebar;