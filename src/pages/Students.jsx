import { useState } from "react";

import StudentTable from "../components/StudentTable";
import StatCard from "../components/StatCard";

import {
  students,
  departments,
  topPerformers,
} from "../data/students";

function Students() {

  // Search State
  const [search, setSearch] = useState("");

  // Department Filter State
  const [department, setDepartment] = useState("All");

  // Filter Logic
  const filteredStudents = students.filter((student) => {

    const matchesSearch =
      student.name.toLowerCase().includes(search.toLowerCase());

    const matchesDepartment =
      department === "All" || student.dept === department;

    return matchesSearch && matchesDepartment;
  });

  return (
    <div>

      {/* Page Title */}
      <h1 className="text-4xl font-bold mb-8 text-cyan-400">
        Students Management
      </h1>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">

        <StatCard
          title="Total Students"
          value={students.length}
          color="text-cyan-400"
        />

        <StatCard
          title="Average CGPA"
          value="8.4"
          color="text-green-400"
        />

        <StatCard
          title="Active Students"
          value={
            students.filter(
              (student) => student.status === "Active"
            ).length
          }
          color="text-blue-400"
        />

        <StatCard
          title="Warning Students"
          value={
            students.filter(
              (student) => student.status === "Warning"
            ).length
          }
          color="text-red-400"
        />

      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">

        {/* Search */}
        <input
          type="text"
          placeholder="Search Students..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="bg-gray-900 p-3 rounded-lg w-full md:w-96 outline-none border border-gray-800"
        />

        {/* Department Filter */}
        <select
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          className="bg-gray-900 p-3 rounded-lg outline-none border border-gray-800"
        >

          {departments.map((dept, index) => (

            <option key={index} value={dept}>
              {dept}
            </option>

          ))}

        </select>

      </div>

      {/* Top Performers */}
      <div className="mb-10">

        <h2 className="text-3xl font-bold mb-6 text-yellow-400">
          Top Performers
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">

          {topPerformers.map((student) => (

            <div
              key={student.id}
              className="bg-gray-900 p-5 rounded-2xl border border-gray-800 hover:scale-105 transition duration-300"
            >

              <h3 className="text-xl font-bold text-cyan-400">
                {student.name}
              </h3>

              <p className="mt-2 text-gray-300">
                {student.dept}
              </p>

              <p className="mt-2">
                CGPA:

                <span className="text-green-400 font-bold ml-2">
                  {student.cgpa}
                </span>

              </p>

            </div>

          ))}

        </div>

      </div>

      {/* Student Table */}
      <StudentTable students={filteredStudents} />

    </div>
  );
}

export default Students;