"use client";
import Cell from "./Cell";

export default function Grid({ board, openSearch }) {
  return (
    <div className="grid grid-cols-6 gap-3">
      {board.map((cell) => (
        <Cell
          key={cell.letter}
          cell={cell}
          onClick={() => openSearch(cell.letter)}
        />
      ))}
    </div>
  );
}
