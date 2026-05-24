function StudentModal({ student, onClose }) {

  if (!student) return null;

  return (

    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">

      <div className="bg-gray-900 p-8 rounded-2xl w-[400px] border border-gray-700 relative">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-red-400 text-xl"
        >
          ✕
        </button>

        {/* Student Name */}
        <h1 className="text-3xl font-bold text-cyan-400 mb-6">
          {student.name}
        </h1>

        {/* Details */}
        <div className="space-y-4 text-lg">

          <p>
            <span className="font-bold text-gray-400">
              Roll No:
            </span>

            {" "}
            {student.roll}
          </p>

          <p>
            <span className="font-bold text-gray-400">
              Department:
            </span>

            {" "}
            {student.dept}
          </p>

          <p>
            <span className="font-bold text-gray-400">
              Attendance:
            </span>

            {" "}
            {student.attendance}%
          </p>

          <p>
            <span className="font-bold text-gray-400">
              CGPA:
            </span>

            {" "}
            {student.cgpa}
          </p>

          <p>
            <span className="font-bold text-gray-400">
              Performance:
            </span>

            {" "}
            {student.performance}
          </p>

          <p>
            <span className="font-bold text-gray-400">
              Email:
            </span>

            {" "}
            {student.email}
          </p>

          <p>
            <span className="font-bold text-gray-400">
              Status:
            </span>

            {" "}
            {student.status}
          </p>

        </div>

      </div>

    </div>

  );
}

export default StudentModal;