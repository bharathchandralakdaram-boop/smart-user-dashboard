import { motion } from "framer-motion";

function SummaryCard({ title, value }) {

  return (

    <motion.div

      initial={{ opacity: 0, y: 40 }}

      animate={{ opacity: 1, y: 0 }}

      transition={{ duration: 0.5 }}

      whileHover={{ scale: 1.05 }}

      className="bg-gray-900 p-6 rounded-2xl border border-gray-800"

    >

      <h3 className="text-gray-400 text-lg">
        {title}
      </h3>

      <h1 className="text-5xl font-bold text-cyan-400 mt-4">
        {value}
      </h1>

    </motion.div>

  );
}

export default SummaryCard;