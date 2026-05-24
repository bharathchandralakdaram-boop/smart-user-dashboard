import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { department: "CSE", students: 400 },
  { department: "ECE", students: 300 },
  { department: "EEE", students: 200 },
  { department: "MECH", students: 250 },
  { department: "CIVIL", students: 150 },
];

function BarChartComponent() {
  return (
    <div className="bg-gray-900 p-5 rounded-2xl border border-gray-800">

      <h2 className="text-2xl font-bold mb-4 text-cyan-400">
        Department Strength
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="department" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="students" fill="#06b6d4" />
        </BarChart>
      </ResponsiveContainer>

    </div>
  );
}

export default BarChartComponent;