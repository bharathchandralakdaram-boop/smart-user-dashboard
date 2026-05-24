function StatCard({ title, value, color }) {

  return (

    <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800 hover:scale-105 transition duration-300">

      <h3 className="text-lg text-gray-400">
        {title}
      </h3>

      <h1 className={`text-4xl font-bold mt-4 ${color}`}>
        {value}
      </h1>

    </div>

  );
}

export default StatCard;