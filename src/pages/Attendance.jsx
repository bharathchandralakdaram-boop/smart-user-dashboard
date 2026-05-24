import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const monthlyData = [

  {
    month: "Jul",
    CS: 91,
    EC: 87,
    ME: 79,
    CE: 88,
  },

  {
    month: "Aug",
    CS: 89,
    EC: 84,
    ME: 81,
    CE: 86,
  },

  {
    month: "Sep",
    CS: 93,
    EC: 89,
    ME: 77,
    CE: 90,
  },

  {
    month: "Oct",
    CS: 87,
    EC: 82,
    ME: 75,
    CE: 84,
  },

  {
    month: "Nov",
    CS: 90,
    EC: 86,
    ME: 80,
    CE: 88,
  },

  {
    month: "Dec",
    CS: 85,
    EC: 80,
    ME: 73,
    CE: 83,
  },

  {
    month: "Jan",
    CS: 92,
    EC: 89,
    ME: 82,
    CE: 91,
  },

  {
    month: "Feb",
    CS: 89,
    EC: 85,
    ME: 78,
    CE: 87,
  },

];

const weeklyData = [

  {
    day: "Mon",
    present: 1180,
    absent: 140,
  },

  {
    day: "Tue",
    present: 1200,
    absent: 130,
  },

  {
    day: "Wed",
    present: 1150,
    absent: 170,
  },

  {
    day: "Thu",
    present: 1210,
    absent: 120,
  },

  {
    day: "Fri",
    present: 1100,
    absent: 220,
  },

];

function Attendance() {

  return (

    <div>

      {/* Header */}
      <div className="mb-10">

        <h1 className="text-5xl font-bold text-cyan-400">
          Attendance Analytics
        </h1>

        <p className="text-gray-400 mt-2 text-lg">
          Track and analyze student attendance
          patterns
        </p>

      </div>

      {/* Top Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">

        {/* Card */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-950 p-8 rounded-3xl border border-blue-800 shadow-xl">

          <h2 className="text-gray-400 text-xl">
            Overall Attendance
          </h2>

          <h1 className="text-6xl font-bold text-blue-400 mt-5">
            88%
          </h1>

        </div>

        {/* Card */}
        <div className="bg-gradient-to-r from-green-900 to-green-950 p-8 rounded-3xl border border-green-800 shadow-xl">

          <h2 className="text-gray-400 text-xl">
            Present Students
          </h2>

          <h1 className="text-6xl font-bold text-green-400 mt-5">
            720
          </h1>

        </div>

        {/* Card */}
        <div className="bg-gradient-to-r from-red-900 to-red-950 p-8 rounded-3xl border border-red-800 shadow-xl">

          <h2 className="text-gray-400 text-xl">
            Absent Students
          </h2>

          <h1 className="text-6xl font-bold text-red-400 mt-5">
            96
          </h1>

        </div>

        {/* Card */}
        <div className="bg-gradient-to-r from-yellow-900 to-yellow-950 p-8 rounded-3xl border border-yellow-800 shadow-xl">

          <h2 className="text-gray-400 text-xl">
            Departments
          </h2>

          <h1 className="text-6xl font-bold text-yellow-400 mt-5">
            4
          </h1>

        </div>

      </div>

      {/* Department Progress */}
      <div className="bg-[#111827] p-10 rounded-3xl border border-gray-800 mb-10">

        <h2 className="text-4xl font-bold text-cyan-400 mb-10">
          Department Attendance
        </h2>

        {/* CS */}
        <div className="mb-8">

          <div className="flex justify-between mb-3">

            <span className="text-2xl font-semibold">
              Computer Science
            </span>

            <span className="text-cyan-400 text-2xl font-bold">
              92%
            </span>

          </div>

          <div className="w-full h-5 bg-gray-800 rounded-full">

            <div className="w-[92%] h-5 bg-cyan-400 rounded-full"></div>

          </div>

        </div>

        {/* EC */}
        <div className="mb-8">

          <div className="flex justify-between mb-3">

            <span className="text-2xl font-semibold">
              Electronics
            </span>

            <span className="text-cyan-400 text-2xl font-bold">
              87%
            </span>

          </div>

          <div className="w-full h-5 bg-gray-800 rounded-full">

            <div className="w-[87%] h-5 bg-cyan-400 rounded-full"></div>

          </div>

        </div>

        {/* ME */}
        <div className="mb-8">

          <div className="flex justify-between mb-3">

            <span className="text-2xl font-semibold">
              Mechanical
            </span>

            <span className="text-cyan-400 text-2xl font-bold">
              78%
            </span>

          </div>

          <div className="w-full h-5 bg-gray-800 rounded-full">

            <div className="w-[78%] h-5 bg-cyan-400 rounded-full"></div>

          </div>

        </div>

        {/* CE */}
        <div>

          <div className="flex justify-between mb-3">

            <span className="text-2xl font-semibold">
              Civil
            </span>

            <span className="text-cyan-400 text-2xl font-bold">
              84%
            </span>

          </div>

          <div className="w-full h-5 bg-gray-800 rounded-full">

            <div className="w-[84%] h-5 bg-cyan-400 rounded-full"></div>

          </div>

        </div>

      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">

        {/* Monthly Chart */}
        <div className="bg-[#111827] p-8 rounded-3xl border border-gray-800">

          <h2 className="text-3xl font-bold text-cyan-400 mb-8">
            Monthly Attendance Trend
          </h2>

          <ResponsiveContainer width="100%" height={350}>

            <BarChart data={monthlyData}>

              <CartesianGrid
                strokeDasharray="3 3"
                stroke="#374151"
              />

              <XAxis dataKey="month" />

              <YAxis />

              <Tooltip />

              <Bar dataKey="CS" fill="#3B82F6" />

              <Bar dataKey="EC" fill="#14B8A6" />

              <Bar dataKey="ME" fill="#F59E0B" />

              <Bar dataKey="CE" fill="#8B5CF6" />

            </BarChart>

          </ResponsiveContainer>

        </div>

        {/* Weekly Chart */}
        <div className="bg-[#111827] p-8 rounded-3xl border border-gray-800">

          <h2 className="text-3xl font-bold text-cyan-400 mb-8">
            Weekly Attendance
          </h2>

          <ResponsiveContainer width="100%" height={350}>

            <BarChart data={weeklyData}>

              <CartesianGrid
                strokeDasharray="3 3"
                stroke="#374151"
              />

              <XAxis dataKey="day" />

              <YAxis />

              <Tooltip />

              <Bar dataKey="present" fill="#14B8A6" />

              <Bar dataKey="absent" fill="#E11D48" />

            </BarChart>

          </ResponsiveContainer>

        </div>

      </div>

      {/* At Risk Students */}
      <div className="bg-[#111827] p-8 rounded-3xl border border-gray-800">

        <div className="flex justify-between items-center mb-8">

          <h2 className="text-4xl font-bold text-red-400">
            At-Risk Students
          </h2>

          <span className="bg-red-900 text-red-300 px-5 py-2 rounded-full font-bold">

            Below 75%

          </span>

        </div>

        {/* Students */}
        <div className="space-y-5">

          {/* Student */}
          <div className="flex justify-between items-center bg-gray-900 p-6 rounded-2xl">

            <div>

              <h3 className="text-2xl font-bold">
                Vikram Nair
              </h3>

              <p className="text-gray-400">
                CS2022007
              </p>

            </div>

            <span className="text-red-400 text-3xl font-bold">
              70%
            </span>

          </div>

          {/* Student */}
          <div className="flex justify-between items-center bg-gray-900 p-6 rounded-2xl">

            <div>

              <h3 className="text-2xl font-bold">
                Pooja Sharma
              </h3>

              <p className="text-gray-400">
                ME2023012
              </p>

            </div>

            <span className="text-red-400 text-3xl font-bold">
              65%
            </span>

          </div>

          {/* Student */}
          <div className="flex justify-between items-center bg-gray-900 p-6 rounded-2xl">

            <div>

              <h3 className="text-2xl font-bold">
                Rahul Verma
              </h3>

              <p className="text-gray-400">
                ME2021003
              </p>

            </div>

            <span className="text-red-400 text-3xl font-bold">
              76%
            </span>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Attendance;