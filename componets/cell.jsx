"use client";
import { motion } from "framer-motion";

export default function Cell({ cell, onClick }) {
  return (
    <motion.div
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.96 }}
      onClick={onClick}
      className="relative h-28 rounded-2xl overflow-hidden cursor-pointer shadow-md"
    >
      {/* 背景图 */}
      {cell.game?.image ? (
        <img
          src={cell.game.image}
          alt={cell.game.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300" />
      )}

      {/* 遮罩 */}
      <div className="absolute inset-0 bg-black/40" />

      {/* 内容 */}
      <div className="relative z-10 p-2 flex flex-col justify-between h-full text-white">
        <div className="text-sm font-bold opacity-80">
          {cell.letter}
        </div>

        <div className="text-xs line-clamp-2">
          {cell.game?.name || "选择游戏"}
        </div>
      </div>
    </motion.div>
  );
}
