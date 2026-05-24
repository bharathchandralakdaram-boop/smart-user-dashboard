import {
  PieChart,
  Pie,
  Tooltip,
  Cell,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Present", value: 92 },
  { name: "Absent", value: 8 },
];

const COLORS = ["#06b6d4", "#1E293B"];

function PieChartComponent() {
  return (
    <div className="bg-gray-900 p-5 rounded-2xl border border-gray-800">

      <h2 className="text-2xl font-bold mb-4 text-cyan-400">
        Attendance Overview
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            outerRadius={100}
            label
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={COLORS[index]} />
            ))}
          </Pie>

          <Tooltip />
        </PieChart>
      </ResponsiveContainer>

    </div>
  );
}

export default PieChartComponent;