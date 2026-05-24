import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  CartesianGrid,
} from "recharts";

import {
  Users,
  GraduationCap,
  DollarSign,
  BookOpen,
} from "lucide-react";

import { students } from "../data/students";


// ====================
// CARD DATA
// ====================

const stats = [

  {
    title: "TOTAL STUDENTS",
    value: "1,340",
    color: "from-blue-900/40 to-blue-500/10",
    icon: <Users size={28} />,
    growth: "+4.7%",
  },

  {
    title: "AVG ATTENDANCE",
    value: "86.4%",
    color: "from-cyan-900/40 to-cyan-500/10",
    icon: <BookOpen size={28} />,
    growth: "+2.3%",
  },

  {
    title: "PLACEMENTS",
    value: "118",
    color: "from-yellow-900/40 to-yellow-500/10",
    icon: <GraduationCap size={28} />,
    growth: "+20.4%",
  },

  {
    title: "REVENUE",
    value: "₹23.8L",
    color: "from-green-900/40 to-green-500/10",
    icon: <DollarSign size={28} />,
    growth: "+11.7%",
  },

];


// ====================
// CHART DATA
// ====================

const attendanceData = [

  { month: "Jul", CS: 91, EC: 87, ME: 79, CE: 88 },

  { month: "Aug", CS: 88, EC: 84, ME: 81, CE: 86 },

  { month: "Sep", CS: 93, EC: 89, ME: 77, CE: 90 },

  { month: "Oct", CS: 87, EC: 82, ME: 75, CE: 84 },

  { month: "Nov", CS: 90, EC: 86, ME: 80, CE: 88 },

  { month: "Dec", CS: 85, EC: 80, ME: 73, CE: 83 },

  { month: "Jan", CS: 92, EC: 88, ME: 82, CE: 91 },

  { month: "Feb", CS: 89, EC: 85, ME: 78, CE: 87 },

];


const revenueData = [

  { month: "Jul", revenue: 18, target: 20 },

  { month: "Aug", revenue: 22, target: 20 },

  { month: "Sep", revenue: 19, target: 21 },

  { month: "Oct", revenue: 24, target: 23 },

  { month: "Nov", revenue: 21, target: 22 },

  { month: "Dec", revenue: 16, target: 20 },

  { month: "Jan", revenue: 25, target: 24 },

  { month: "Feb", revenue: 23, target: 23 },

];


const pieData = [

  { name: "CS", value: 480 },

  { name: "Electronics", value: 360 },

  { name: "Mechanical", value: 290 },

  { name: "Civil", value: 210 },

];


const COLORS = [
  "#3B82F6",
  "#14B8A6",
  "#F59E0B",
  "#8B5CF6",
];


// ====================
// COMPONENT
// ====================

function Dashboard() {

  return (

    <div className="space-y-8">

      {/* HEADER */}
      <div>

        <h1 className="text-5xl font-bold text-white">
          Dashboard
        </h1>

        <p className="text-gray-400 mt-2">
          Academic Year 2024-25
        </p>

      </div>

      {/* TOP CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        {stats.map((item, index) => (

          <div

            key={index}

            className={`

              bg-gradient-to-br ${item.color}

              border border-gray-800

              rounded-3xl

              p-8

              shadow-xl

            `}
          >

            <div className="flex justify-between items-start">

              <div className="bg-white/10 p-4 rounded-2xl">

                {item.icon}

              </div>

              <span className="text-green-400 font-bold">

                ↑ {item.growth}

              </span>

            </div>

            <h3 className="text-gray-400 mt-6 text-sm tracking-widest">

              {item.title}

            </h3>

            <h1 className="text-5xl font-bold mt-4">

              {item.value}

            </h1>

          </div>

        ))}

      </div>

      {/* CHART SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* ATTENDANCE */}
        <div className="lg:col-span-2 bg-[#111827] rounded-3xl p-8 border border-gray-800">

          <h2 className="text-3xl font-bold mb-8">

            Department-wise Attendance

          </h2>

          <ResponsiveContainer width="100%" height={350}>

            <BarChart data={attendanceData}>

              <CartesianGrid
                strokeDasharray="3 3"
                stroke="#1F2937"
              />

              <XAxis dataKey="month" />

              <YAxis />

              <Tooltip />

              <Bar dataKey="CS" fill="#3B82F6" radius={[4,4,0,0]} />

              <Bar dataKey="EC" fill="#14B8A6" radius={[4,4,0,0]} />

              <Bar dataKey="ME" fill="#F59E0B" radius={[4,4,0,0]} />

              <Bar dataKey="CE" fill="#8B5CF6" radius={[4,4,0,0]} />

            </BarChart>

          </ResponsiveContainer>

        </div>

        {/* PIE CHART */}
        <div className="bg-[#111827] rounded-3xl p-8 border border-gray-800">

          <h2 className="text-3xl font-bold mb-8">

            Enrollment Distribution

          </h2>

          <ResponsiveContainer width="100%" height={350}>

            <PieChart>

              <Pie

                data={pieData}

                innerRadius={70}

                outerRadius={110}

                dataKey="value"

              >

                {pieData.map((entry, index) => (

                  <Cell
                    key={index}
                    fill={COLORS[index]}
                  />

                ))}

              </Pie>

              <Tooltip />

            </PieChart>

          </ResponsiveContainer>

        </div>

      </div>

      {/* SECOND SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

        {/* REVENUE */}
        <div className="bg-[#111827] rounded-3xl p-8 border border-gray-800">

          <h2 className="text-3xl font-bold mb-8">

            Revenue vs Target

          </h2>

          <ResponsiveContainer width="100%" height={320}>

            <LineChart data={revenueData}>

              <CartesianGrid
                strokeDasharray="3 3"
                stroke="#1F2937"
              />

              <XAxis dataKey="month" />

              <YAxis />

              <Tooltip />

              <Line
                type="monotone"
                dataKey="revenue"
                stroke="#3B82F6"
                strokeWidth={4}
              />

              <Line
                type="monotone"
                dataKey="target"
                stroke="#9CA3AF"
                strokeDasharray="5 5"
              />

            </LineChart>

          </ResponsiveContainer>

        </div>

        {/* PERFORMANCE */}
        <div className="bg-[#111827] rounded-3xl p-8 border border-gray-800">

          <h2 className="text-3xl font-bold mb-8">

            Performance Breakdown

          </h2>

          <div className="space-y-8">

            <div>

              <div className="flex justify-between mb-2">

                <span>Excellent</span>

                <span>25%</span>

              </div>

              <div className="w-full bg-gray-800 h-4 rounded-full">

                <div className="w-[25%] bg-green-400 h-4 rounded-full"></div>

              </div>

            </div>

            <div>

              <div className="flex justify-between mb-2">

                <span>Good</span>

                <span>45%</span>

              </div>

              <div className="w-full bg-gray-800 h-4 rounded-full">

                <div className="w-[45%] bg-blue-400 h-4 rounded-full"></div>

              </div>

            </div>

            <div>

              <div className="flex justify-between mb-2">

                <span>Average</span>

                <span>20%</span>

              </div>

              <div className="w-full bg-gray-800 h-4 rounded-full">

                <div className="w-[20%] bg-yellow-400 h-4 rounded-full"></div>

              </div>

            </div>

            <div>

              <div className="flex justify-between mb-2">

                <span>Below Avg</span>

                <span>10%</span>

              </div>

              <div className="w-full bg-gray-800 h-4 rounded-full">

                <div className="w-[10%] bg-red-400 h-4 rounded-full"></div>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* RECENT STUDENTS */}
      <div className="bg-[#111827] rounded-3xl p-8 border border-gray-800">

        <div className="flex justify-between items-center mb-8">

          <h2 className="text-3xl font-bold">

            Recent Students

          </h2>

          <button className="text-blue-400">
            View All →
          </button>

        </div>

        <div className="space-y-6">

          {students.slice(0, 5).map((student) => (

            <div

              key={student.id}

              className="flex justify-between items-center bg-gray-900 p-5 rounded-2xl"

            >

              <div className="flex items-center gap-4">

                <div className="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center font-bold text-lg">

                  {student.name.charAt(0)}

                </div>

                <div>

                  <h3 className="text-xl font-semibold">

                    {student.name}

                  </h3>

                  <p className="text-gray-400">

                    {student.roll} • {student.dept}

                  </p>

                </div>

              </div>

              <div className="text-right">

                <h2 className="text-2xl font-bold">

                  {student.cgpa}

                </h2>

                <p className="text-green-400">

                  {student.attendance}%
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>

  );

}

export default Dashboard;