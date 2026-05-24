import { useState } from "react";

import StudentModal from "./StudentModal";

function StudentTable({ students }) {

  // Selected Student State
  const [selectedStudent, setSelectedStudent] = useState(null);

  return (

    <div className="bg-gray-900 p-6 rounded-2xl overflow-x-auto border border-gray-800">

      {/* Heading */}
      <h2 className="text-2xl font-bold mb-6 text-cyan-400">
        Student Records
      </h2>

      {/* Table */}
      <table className="w-full text-left">

        {/* Table Header */}
        <thead>

          <tr className="border-b border-gray-700">

            <th className="p-3">ID</th>
            <th className="p-3">Name</th>
            <th className="p-3">Roll No</th>
            <th className="p-3">Department</th>
            <th className="p-3">Attendance</th>
            <th className="p-3">CGPA</th>
            <th className="p-3">Performance</th>
            <th className="p-3">Status</th>

          </tr>

        </thead>

        {/* Table Body */}
        <tbody>

          {students.map((student) => (

            <tr
              key={student.id}

              onClick={() => setSelectedStudent(student)}

              className="border-b border-gray-800 hover:bg-gray-800 hover:scale-[1.01] transition duration-300 cursor-pointer"
            >

              {/* ID */}
              <td className="p-3">
                {student.id}
              </td>

              {/* Name */}
              <td className="p-3 font-semibold text-cyan-400">
                {student.name}
              </td>

              {/* Roll */}
              <td className="p-3">
                {student.roll}
              </td>

              {/* Department */}
              <td className="p-3">
                {student.dept}
              </td>

              {/* Attendance */}
              <td className="p-3">
                {student.attendance}%
              </td>

              {/* CGPA */}
              <td className="p-3">
                {student.cgpa}
              </td>

              {/* Performance */}
              <td className="p-3">

                <span
                  className={`px-3 py-1 rounded-full text-sm

                  ${
                    student.performance === "Excellent"
                      ? "bg-green-500"

                      : student.performance === "Good"
                      ? "bg-blue-500"

                      : student.performance === "Average"
                      ? "bg-yellow-500 text-black"

                      : "bg-red-500"
                  }`}
                >

                  {student.performance}

                </span>

              </td>

              {/* Status */}
              <td className="p-3">

                <span
                  className={`px-3 py-1 rounded-full text-sm

                  ${
                    student.status === "Active"
                      ? "bg-green-500"

                      : "bg-red-500"
                  }`}
                >

                  {student.status}

                </span>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

      {/* No Results */}
      {students.length === 0 && (

        <p className="text-center text-red-400 mt-6">
          No students found.
        </p>

      )}

      {/* Student Modal */}
      <StudentModal
        student={selectedStudent}
        onClose={() => setSelectedStudent(null)}
      />

    </div>

  );
}

export default StudentTable;