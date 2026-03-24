'use client';
import { motion } from "framer-motion";

export default function Cell({ cell, onClick }) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`p-3 rounded-2xl border cursor-pointer ${cell.game ? "bg-green-100" : "bg-white"}`}>
      <div className="font-bold text-lg">{cell.letter}</div>
      <div className="text-sm mt-2 truncate">
        {cell.game?.name || "选择游戏"}
      </div>
    </motion.div>
  );
}