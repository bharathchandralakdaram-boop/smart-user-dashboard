import { useState } from "react";

import {
  FaSearch,
  FaBell,
  FaMoon,
  FaSun,
  FaUserCircle,
} from "react-icons/fa";

function Navbar({ darkMode, setDarkMode }) {

  // Notification Toggle
  const [showNotifications, setShowNotifications] =
    useState(false);

  return (

    <div className="flex justify-between items-center bg-[#111827] px-8 py-5 border-b border-gray-800 sticky top-0 z-50">

      {/* Left Side */}
      <div>

        <h1 className="text-5xl font-bold">
          Smart College Dashboard
        </h1>

        <p className="text-gray-400 mt-2">
          Sun May 24 2026
        </p>

      </div>

      {/* Right Side */}
      <div className="flex items-center gap-8">

        {/* Search Box */}
        <div className="flex items-center bg-gray-800 px-4 py-3 rounded-2xl">

          <FaSearch className="text-gray-400 mr-3" />

          <input
            type="text"
            placeholder="Search..."

            className="bg-transparent outline-none w-48"
          />

        </div>

        {/* Theme Toggle */}
        <button
          onClick={() =>
            setDarkMode(!darkMode)
          }

          className="text-2xl hover:text-cyan-400 transition"
        >

          {
            darkMode
              ? <FaSun />
              : <FaMoon />
          }

        </button>

        {/* Notification Section */}
        <div className="relative">

          <button

            onClick={() =>
              setShowNotifications(
                !showNotifications
              )
            }

            className="relative"

          >

            <FaBell className="text-2xl cursor-pointer hover:text-cyan-400 transition" />

            {/* Count */}
            <span className="absolute -top-2 -right-2 bg-red-500 text-xs px-2 py-1 rounded-full">

              3

            </span>

          </button>

          {/* Notification Dropdown */}
          {
            showNotifications && (

              <div className="absolute right-0 mt-5 w-96 bg-[#0F172A] border border-gray-800 rounded-3xl shadow-2xl p-6 z-50">

                {/* Header */}
                <div className="mb-6">

                  <h2 className="text-3xl font-bold">
                    Notifications
                  </h2>

                  <p className="text-gray-400 mt-1">
                    3 unread notifications
                  </p>

                </div>

                {/* Notification 1 */}
                <div className="flex gap-4 mb-5 border-b border-gray-800 pb-5">

                  <div className="w-3 h-3 bg-yellow-400 rounded-full mt-2"></div>

                  <div>

                    <p className="font-semibold text-lg">
                      12 students below 75%
                      attendance
                    </p>

                    <p className="text-gray-500 mt-1">
                      2m ago
                    </p>

                  </div>

                </div>

                {/* Notification 2 */}
                <div className="flex gap-4 mb-5 border-b border-gray-800 pb-5">

                  <div className="w-3 h-3 bg-blue-400 rounded-full mt-2"></div>

                  <div>

                    <p className="font-semibold text-lg">
                      February report ready
                      for review
                    </p>

                    <p className="text-gray-500 mt-1">
                      1h ago
                    </p>

                  </div>

                </div>

                {/* Notification 3 */}
                <div className="flex gap-4">

                  <div className="w-3 h-3 bg-cyan-400 rounded-full mt-2"></div>

                  <div>

                    <p className="font-semibold text-lg">
                      3 new placement offers
                      received
                    </p>

                    <p className="text-gray-500 mt-1">
                      3h ago
                    </p>

                  </div>

                </div>

              </div>

            )
          }

        </div>

        {/* User Profile */}
        <div className="flex items-center gap-4">

          <FaUserCircle className="text-5xl text-cyan-400" />

          <div>

            <h2 className="font-bold text-xl">
              Admin
            </h2>

            <p className="text-gray-400">
              College Management
            </p>

          </div>

        </div>

      </div>

    </div>

  );
}

export default Navbar;