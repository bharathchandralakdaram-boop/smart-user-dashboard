import { useState } from "react";

import {
  FaUserCircle,
  FaShieldAlt,
  FaBell,
  FaPalette,
  FaDatabase,
} from "react-icons/fa";

function Settings({ darkMode, setDarkMode }) {

  // Notification States
  const [emailNotifications, setEmailNotifications] =
    useState(true);

  const [smsNotifications, setSmsNotifications] =
    useState(false);

  const [systemAlerts, setSystemAlerts] =
    useState(true);

  const [animations, setAnimations] =
    useState(true);

  return (

    <div>

      {/* Header */}
      <div className="flex justify-between items-center mb-10">

        <div>

          <h1 className="text-5xl font-bold text-cyan-400">
            Settings
          </h1>

          <p className="text-gray-400 mt-2">
            Manage your preferences & profile
          </p>

        </div>

        {/* Save Button */}
        <button className="bg-blue-500 hover:bg-blue-600 px-8 py-4 rounded-2xl font-bold transition">

          Save Changes

        </button>

      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

        {/* Profile Section */}
        <div className="bg-[#111827] p-8 rounded-3xl border border-gray-800">

          <div className="flex items-center gap-4 mb-8">

            <FaUserCircle className="text-3xl text-cyan-400" />

            <h2 className="text-3xl font-bold">
              Profile
            </h2>

          </div>

          {/* Profile Card */}
          <div className="flex items-center gap-5 mb-8">

            <div className="w-20 h-20 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center text-3xl font-bold">

              AD

            </div>

            <div>

              <h2 className="text-2xl font-bold">
                Admin Dean
              </h2>

              <p className="text-gray-400">
                Dean of Academics
              </p>

              <button className="text-cyan-400 mt-2">
                Change Avatar
              </button>

            </div>

          </div>

          {/* Inputs */}
          <div className="space-y-5">

            <input
              type="text"
              defaultValue="Admin Dean"

              className="w-full bg-gray-900 border border-gray-700 p-4 rounded-xl outline-none"
            />

            <input
              type="email"
              defaultValue="admin@edu.in"

              className="w-full bg-gray-900 border border-gray-700 p-4 rounded-xl outline-none"
            />

            <input
              type="text"
              defaultValue="+91 9876543210"

              className="w-full bg-gray-900 border border-gray-700 p-4 rounded-xl outline-none"
            />

            <input
              type="text"
              defaultValue="Dean of Academics"

              className="w-full bg-gray-900 border border-gray-700 p-4 rounded-xl outline-none"
            />

            <input
              type="text"
              defaultValue="EduInsight College"

              className="w-full bg-gray-900 border border-gray-700 p-4 rounded-xl outline-none"
            />

          </div>

        </div>

        {/* Appearance */}
        <div className="bg-[#111827] p-8 rounded-3xl border border-gray-800">

          <div className="flex items-center gap-4 mb-8">

            <FaPalette className="text-3xl text-cyan-400" />

            <h2 className="text-3xl font-bold">
              Appearance
            </h2>

          </div>

          {/* Theme Toggle */}
          <div className="bg-gray-900 p-2 rounded-2xl flex mb-8">

            <button

              onClick={() =>
                setDarkMode(true)
              }

              className={`

                flex-1 py-4 rounded-xl font-bold transition

                ${
                  darkMode
                    ? "bg-blue-500"
                    : ""
                }

              `}
            >

              🌙 Dark

            </button>

            <button

              onClick={() =>
                setDarkMode(false)
              }

              className={`

                flex-1 py-4 rounded-xl font-bold transition

                ${
                  !darkMode
                    ? "bg-yellow-500 text-black"
                    : ""
                }

              `}
            >

              ☀️ Light

            </button>

          </div>

          {/* Settings Toggles */}
          <div className="space-y-8">

            {/* Animations */}
            <div className="flex justify-between items-center">

              <div>

                <h3 className="text-2xl font-semibold">
                  Animations
                </h3>

                <p className="text-gray-400">
                  Enable hover effects &
                  transitions
                </p>

              </div>

              <button

                onClick={() =>
                  setAnimations(!animations)
                }

                className={`

                  w-16 h-8 rounded-full transition

                  ${
                    animations
                      ? "bg-blue-500"
                      : "bg-gray-600"
                  }

                `}
              >

                <div
                  className={`

                    w-6 h-6 bg-white rounded-full mt-1 transition

                    ${
                      animations
                        ? "ml-9"
                        : "ml-1"
                    }

                  `}
                ></div>

              </button>

            </div>

            {/* Alerts */}
            <div className="flex justify-between items-center">

              <div>

                <h3 className="text-2xl font-semibold">
                  System Alerts
                </h3>

                <p className="text-gray-400">
                  Receive important updates
                </p>

              </div>

              <button

                onClick={() =>
                  setSystemAlerts(!systemAlerts)
                }

                className={`

                  w-16 h-8 rounded-full transition

                  ${
                    systemAlerts
                      ? "bg-green-500"
                      : "bg-gray-600"
                  }

                `}
              >

                <div
                  className={`

                    w-6 h-6 bg-white rounded-full mt-1 transition

                    ${
                      systemAlerts
                        ? "ml-9"
                        : "ml-1"
                    }

                  `}
                ></div>

              </button>

            </div>

          </div>

        </div>

        {/* Notifications */}
        <div className="bg-[#111827] p-8 rounded-3xl border border-gray-800">

          <div className="flex items-center gap-4 mb-8">

            <FaBell className="text-3xl text-cyan-400" />

            <h2 className="text-3xl font-bold">
              Notifications
            </h2>

          </div>

          <div className="space-y-8">

            {/* Email */}
            <div className="flex justify-between items-center">

              <div>

                <h3 className="text-2xl font-semibold">
                  Email Notifications
                </h3>

                <p className="text-gray-400">
                  Receive reports via email
                </p>

              </div>

              <button

                onClick={() =>
                  setEmailNotifications(
                    !emailNotifications
                  )
                }

                className={`

                  w-16 h-8 rounded-full transition

                  ${
                    emailNotifications
                      ? "bg-blue-500"
                      : "bg-gray-600"
                  }

                `}
              >

                <div
                  className={`

                    w-6 h-6 bg-white rounded-full mt-1 transition

                    ${
                      emailNotifications
                        ? "ml-9"
                        : "ml-1"
                    }

                  `}
                ></div>

              </button>

            </div>

            {/* SMS */}
            <div className="flex justify-between items-center">

              <div>

                <h3 className="text-2xl font-semibold">
                  SMS Notifications
                </h3>

                <p className="text-gray-400">
                  Receive alerts on mobile
                </p>

              </div>

              <button

                onClick={() =>
                  setSmsNotifications(
                    !smsNotifications
                  )
                }

                className={`

                  w-16 h-8 rounded-full transition

                  ${
                    smsNotifications
                      ? "bg-blue-500"
                      : "bg-gray-600"
                  }

                `}
              >

                <div
                  className={`

                    w-6 h-6 bg-white rounded-full mt-1 transition

                    ${
                      smsNotifications
                        ? "ml-9"
                        : "ml-1"
                    }

                  `}
                ></div>

              </button>

            </div>

          </div>

        </div>

        {/* Security */}
        <div className="bg-[#111827] p-8 rounded-3xl border border-gray-800">

          <div className="flex items-center gap-4 mb-8">

            <FaShieldAlt className="text-3xl text-cyan-400" />

            <h2 className="text-3xl font-bold">
              Security & Access
            </h2>

          </div>

          <div className="space-y-5">

            <input
              type="password"
              placeholder="Current Password"

              className="w-full bg-gray-900 border border-gray-700 p-4 rounded-xl outline-none"
            />

            <input
              type="password"
              placeholder="New Password"

              className="w-full bg-gray-900 border border-gray-700 p-4 rounded-xl outline-none"
            />

            <input
              type="password"
              placeholder="Confirm Password"

              className="w-full bg-gray-900 border border-gray-700 p-4 rounded-xl outline-none"
            />

            <button className="w-full bg-cyan-400 text-black py-4 rounded-xl font-bold hover:scale-105 transition">

              Update Password

            </button>

          </div>

        </div>

        {/* System Info */}
        <div className="bg-[#111827] p-8 rounded-3xl border border-gray-800 lg:col-span-2">

          <div className="flex items-center gap-4 mb-8">

            <FaDatabase className="text-3xl text-cyan-400" />

            <h2 className="text-3xl font-bold">
              System Information
            </h2>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            <div className="bg-gray-900 p-6 rounded-2xl">

              <h3 className="text-gray-400 text-lg">
                Application Version
              </h3>

              <p className="text-3xl font-bold mt-3">
                EduInsight v2.5
              </p>

            </div>

            <div className="bg-gray-900 p-6 rounded-2xl">

              <h3 className="text-gray-400 text-lg">
                Database
              </h3>

              <p className="text-3xl font-bold mt-3">
                PostgreSQL
              </p>

            </div>

            <div className="bg-gray-900 p-6 rounded-2xl">

              <h3 className="text-gray-400 text-lg">
                API Status
              </h3>

              <p className="text-3xl font-bold mt-3 text-green-400">
                Active
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Settings;