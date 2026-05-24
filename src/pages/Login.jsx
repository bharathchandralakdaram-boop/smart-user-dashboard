import { useState } from "react";

import {
  FaUserGraduate,
  FaLock,
} from "react-icons/fa";

function Login({ setIsAuthenticated }) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Login Function
  const handleLogin = (e) => {

    e.preventDefault();

    // Demo Login
    if (
      email === "admin@gmail.com" &&
      password === "admin123"
    ) {

      setIsAuthenticated(true);

    }

    else {

      alert("Invalid Credentials");

    }

  };

  return (

    <div className="flex justify-center items-center min-h-screen bg-[#0B1120]">

      <div className="bg-gray-900 p-10 rounded-3xl w-[400px] border border-gray-800 shadow-2xl">

        {/* Title */}
        <div className="text-center mb-8">

          <h1 className="text-5xl font-bold text-cyan-400">
            EduInsight
          </h1>

          <p className="text-gray-400 mt-3">
            Smart College Analytics Dashboard
          </p>

        </div>

        {/* Form */}
        <form
          onSubmit={handleLogin}
          className="space-y-6"
        >

          {/* Email */}
          <div>

            <label className="block mb-2 text-gray-300">
              Email
            </label>

            <div className="flex items-center bg-gray-800 px-4 py-3 rounded-xl">

              <FaUserGraduate className="text-cyan-400 mr-3" />

              <input
                type="email"
                placeholder="Enter Email"

                value={email}

                onChange={(e) =>
                  setEmail(e.target.value)
                }

                className="bg-transparent outline-none w-full"
              />

            </div>

          </div>

          {/* Password */}
          <div>

            <label className="block mb-2 text-gray-300">
              Password
            </label>

            <div className="flex items-center bg-gray-800 px-4 py-3 rounded-xl">

              <FaLock className="text-cyan-400 mr-3" />

              <input
                type="password"
                placeholder="Enter Password"

                value={password}

                onChange={(e) =>
                  setPassword(e.target.value)
                }

                className="bg-transparent outline-none w-full"
              />

            </div>

          </div>

          {/* Button */}
          <button
            type="submit"

            className="w-full bg-cyan-400 text-black py-3 rounded-xl font-bold hover:scale-105 transition duration-300"
          >

            Login

          </button>

        </form>

        {/* Demo Credentials */}
        <div className="mt-8 bg-gray-800 p-4 rounded-xl">

          <p className="text-sm text-gray-400">
            Demo Credentials
          </p>

          <p className="text-cyan-400 mt-2">
            admin@gmail.com
          </p>

          <p className="text-cyan-400">
            admin123
          </p>

        </div>

      </div>

    </div>

  );
}

export default Login;