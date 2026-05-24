import jsPDF from "jspdf";

import autoTable from "jspdf-autotable";

import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

import { students } from "../data/students";


// Revenue Trend Data
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


// CGPA Distribution
const cgpaData = [

  { range: "< 6.0", students: 30 },

  { range: "6.0-7.0", students: 85 },

  { range: "7.0-8.0", students: 210 },

  { range: "8.0-9.0", students: 340 },

  { range: "9.0-10", students: 140 },

];


function Reports() {

  // PDF Generator
  const generatePDF = () => {

    const doc = new jsPDF();

    doc.setFontSize(22);

    doc.text(
      "EduInsight Students Report",
      14,
      20
    );

    autoTable(doc, {

      startY: 30,

      head: [[
        "ID",
        "Name",
        "Department",
        "Attendance",
        "CGPA",
        "Status",
      ]],

      body: students.map((student) => [

        student.id,

        student.name,

        student.dept,

        `${student.attendance}%`,

        student.cgpa,

        student.status,

      ]),

    });

    doc.save("students-report.pdf");

  };

  return (

    <div>

      {/* Header */}
      <div className="flex justify-between items-center mb-10">

        <div>

          <h1 className="text-5xl font-bold text-cyan-400">
            Reports & Analytics
          </h1>

          <p className="text-gray-400 mt-2 text-lg">
            Academic Year 2024-25
          </p>

        </div>

        {/* Button */}
        <button

          onClick={generatePDF}

          className="bg-blue-500 hover:bg-blue-600 px-8 py-4 rounded-2xl font-bold transition"

        >

          Generate Full Report

        </button>

      </div>

      {/* Top Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">

        {/* Card */}
        <div className="bg-[#111827] p-8 rounded-3xl border border-gray-800">

          <h2 className="text-gray-400 text-xl">
            Reports Generated
          </h2>

          <h1 className="text-6xl font-bold text-blue-400 mt-5">
            24
          </h1>

          <p className="text-gray-500 mt-3">
            This academic year
          </p>

        </div>

        {/* Card */}
        <div className="bg-[#111827] p-8 rounded-3xl border border-gray-800">

          <h2 className="text-gray-400 text-xl">
            Avg Semester Score
          </h2>

          <h1 className="text-6xl font-bold text-cyan-400 mt-5">
            78.4%
          </h1>

          <p className="text-gray-500 mt-3">
            All departments
          </p>

        </div>

        {/* Card */}
        <div className="bg-[#111827] p-8 rounded-3xl border border-gray-800">

          <h2 className="text-gray-400 text-xl">
            Pass Rate
          </h2>

          <h1 className="text-6xl font-bold text-green-400 mt-5">
            96.8%
          </h1>

          <p className="text-gray-500 mt-3">
            Sem 1 final exams
          </p>

        </div>

        {/* Card */}
        <div className="bg-[#111827] p-8 rounded-3xl border border-gray-800">

          <h2 className="text-gray-400 text-xl">
            Scholarships
          </h2>

          <h1 className="text-6xl font-bold text-yellow-400 mt-5">
            14
          </h1>

          <p className="text-gray-500 mt-3">
            Active this year
          </p>

        </div>

      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">

        {/* Revenue Chart */}
        <div className="bg-[#111827] p-8 rounded-3xl border border-gray-800">

          <h2 className="text-3xl font-bold mb-8">
            Monthly Revenue Trend
          </h2>

          <ResponsiveContainer width="100%" height={350}>

            <LineChart data={revenueData}>

              <CartesianGrid
                strokeDasharray="3 3"
                stroke="#374151"
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

        {/* CGPA Distribution */}
        <div className="bg-[#111827] p-8 rounded-3xl border border-gray-800">

          <h2 className="text-3xl font-bold mb-8">
            CGPA Distribution
          </h2>

          <ResponsiveContainer width="100%" height={350}>

            <BarChart data={cgpaData}>

              <CartesianGrid
                strokeDasharray="3 3"
                stroke="#374151"
              />

              <XAxis dataKey="range" />

              <YAxis />

              <Tooltip />

              <Bar
                dataKey="students"
                fill="#14B8A6"
              />

            </BarChart>

          </ResponsiveContainer>

        </div>

      </div>

      {/* Reports Archive */}
      <div className="bg-[#111827] p-8 rounded-3xl border border-gray-800 mb-10">

        <div className="flex justify-between items-center mb-8">

          <h2 className="text-4xl font-bold">
            Monthly Reports Archive
          </h2>

          <span className="text-gray-400 text-xl">
            8 reports
          </span>

        </div>

        <div className="space-y-6">

          {/* Report Item */}
          <div className="flex justify-between items-center bg-gray-900 p-6 rounded-2xl">

            <div>

              <h3 className="text-2xl font-bold">
                July 2024 Academic Report
              </h3>

              <p className="text-gray-400 mt-2">
                2024-07-31 • 2.4 MB
              </p>

            </div>

            <button className="bg-blue-500 px-6 py-3 rounded-xl font-bold">

              Download

            </button>

          </div>

          {/* Report Item */}
          <div className="flex justify-between items-center bg-gray-900 p-6 rounded-2xl">

            <div>

              <h3 className="text-2xl font-bold">
                August Attendance Summary
              </h3>

              <p className="text-gray-400 mt-2">
                2024-08-31 • 1.8 MB
              </p>

            </div>

            <button className="bg-cyan-500 px-6 py-3 rounded-xl font-bold">

              Download

            </button>

          </div>

          {/* Report Item */}
          <div className="flex justify-between items-center bg-gray-900 p-6 rounded-2xl">

            <div>

              <h3 className="text-2xl font-bold">
                September Placement Update
              </h3>

              <p className="text-gray-400 mt-2">
                2024-09-30 • 3.1 MB
              </p>

            </div>

            <button className="bg-green-500 px-6 py-3 rounded-xl font-bold">

              Download

            </button>

          </div>

        </div>

      </div>

      {/* Department Analysis */}
      <div className="bg-[#111827] p-8 rounded-3xl border border-gray-800">

        <h2 className="text-4xl font-bold mb-10">
          Department Performance Analysis
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* CS */}
          <div className="bg-gray-900 p-6 rounded-2xl">

            <h3 className="text-2xl font-bold mb-6">
              Computer Science
            </h3>

            <div className="mb-4">

              <div className="flex justify-between mb-2">

                <span>Pass Rate</span>

                <span>97.5%</span>

              </div>

              <div className="w-full h-4 bg-gray-800 rounded-full">

                <div className="w-[97%] h-4 bg-blue-500 rounded-full"></div>

              </div>

            </div>

            <div>

              <div className="flex justify-between mb-2">

                <span>Avg Score</span>

                <span>83.2%</span>

              </div>

              <div className="w-full h-4 bg-gray-800 rounded-full">

                <div className="w-[83%] h-4 bg-blue-400 rounded-full"></div>

              </div>

            </div>

          </div>

          {/* Electronics */}
          <div className="bg-gray-900 p-6 rounded-2xl">

            <h3 className="text-2xl font-bold mb-6">
              Electronics
            </h3>

            <div className="mb-4">

              <div className="flex justify-between mb-2">

                <span>Pass Rate</span>

                <span>95.8%</span>

              </div>

              <div className="w-full h-4 bg-gray-800 rounded-full">

                <div className="w-[95%] h-4 bg-cyan-500 rounded-full"></div>

              </div>

            </div>

            <div>

              <div className="flex justify-between mb-2">

                <span>Avg Score</span>

                <span>80.1%</span>

              </div>

              <div className="w-full h-4 bg-gray-800 rounded-full">

                <div className="w-[80%] h-4 bg-cyan-400 rounded-full"></div>

              </div>

            </div>

          </div>

          {/* Mechanical */}
          <div className="bg-gray-900 p-6 rounded-2xl">

            <h3 className="text-2xl font-bold mb-6">
              Mechanical
            </h3>

            <div className="mb-4">

              <div className="flex justify-between mb-2">

                <span>Pass Rate</span>

                <span>94.1%</span>

              </div>

              <div className="w-full h-4 bg-gray-800 rounded-full">

                <div className="w-[94%] h-4 bg-yellow-500 rounded-full"></div>

              </div>

            </div>

            <div>

              <div className="flex justify-between mb-2">

                <span>Avg Score</span>

                <span>76.4%</span>

              </div>

              <div className="w-full h-4 bg-gray-800 rounded-full">

                <div className="w-[76%] h-4 bg-yellow-400 rounded-full"></div>

              </div>

            </div>

          </div>

          {/* Civil */}
          <div className="bg-gray-900 p-6 rounded-2xl">

            <h3 className="text-2xl font-bold mb-6">
              Civil
            </h3>

            <div className="mb-4">

              <div className="flex justify-between mb-2">

                <span>Pass Rate</span>

                <span>98.6%</span>

              </div>

              <div className="w-full h-4 bg-gray-800 rounded-full">

                <div className="w-[98%] h-4 bg-purple-500 rounded-full"></div>

              </div>

            </div>

            <div>

              <div className="flex justify-between mb-2">

                <span>Avg Score</span>

                <span>84.7%</span>

              </div>

              <div className="w-full h-4 bg-gray-800 rounded-full">

                <div className="w-[84%] h-4 bg-purple-400 rounded-full"></div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Reports;