import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import { useState } from "react";

import {
  AnimatePresence,
  motion,
} from "framer-motion";

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

import Dashboard from "./pages/Dashboard";
import Students from "./pages/Students";
import Attendance from "./pages/Attendance";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";

import Login from "./pages/Login";


// Animated Routes Component
function AnimatedRoutes({
  darkMode,
  setDarkMode,
}) {

  const location = useLocation();

  return (

    <AnimatePresence mode="wait">

      <motion.div

        key={location.pathname}

        initial={{ opacity: 0, y: 20 }}

        animate={{ opacity: 1, y: 0 }}

        exit={{ opacity: 0, y: -20 }}

        transition={{ duration: 0.4 }}

      >

        <Routes location={location}>

          {/* Dashboard */}
          <Route
            path="/"
            element={<Dashboard />}
          />

          {/* Students */}
          <Route
            path="/students"
            element={<Students />}
          />

          {/* Attendance */}
          <Route
            path="/attendance"
            element={<Attendance />}
          />

          {/* Reports */}
          <Route
            path="/reports"
            element={<Reports />}
          />

          {/* Settings */}
          <Route
            path="/settings"

            element={
              <Settings
                darkMode={darkMode}
                setDarkMode={setDarkMode}
              />
            }
          />

        </Routes>

      </motion.div>

    </AnimatePresence>

  );
}


// Main App Component
function App() {

  // Theme State
  const [darkMode, setDarkMode] =
    useState(true);

  // Authentication State
  const [isAuthenticated, setIsAuthenticated] =
    useState(false);

  // Login Protection
  if (!isAuthenticated) {

    return (
      <Login
        setIsAuthenticated={setIsAuthenticated}
      />
    );

  }

  return (

    <BrowserRouter>

      <div
        className={`

          flex min-h-screen transition duration-300

          ${
            darkMode
              ? "bg-[#0B1120] text-white"
              : "bg-gray-100 text-black"
          }

        `}
      >

        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="flex-1">

          {/* Navbar */}
          <Navbar
            darkMode={darkMode}
            setDarkMode={setDarkMode}
          />

          {/* Pages */}
          <div className="p-6">

            <AnimatedRoutes
              darkMode={darkMode}
              setDarkMode={setDarkMode}
            />

          </div>

        </div>

      </div>

    </BrowserRouter>

  );
}

export default App;