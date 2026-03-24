"use client";

import { useState } from "react";
import Grid from "../components/Grid";
import SearchModal from "../components/SearchModal";
import ProgressBar from "../components/ProgressBar";
import useLocalStorage from "../hooks/useLocalStorage";

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export default function Page() {
  const [board, setBoard] = useLocalStorage(
    "az-board",
    letters.map((l) => ({ letter: l, game: null }))
  );

  const [currentLetter, setCurrentLetter] = useState(null);

  const openSearch = (letter) => {
    setCurrentLetter(letter);
  };

  const selectGame = (game) => {
    setBoard((prev) =>
      prev.map((c) =>
        c.letter === currentLetter ? { ...c, game } : c
      )
    );
    setCurrentLetter(null);
  };

  const progress = board.filter((c) => c.game).length;

  const generateShare = () => {
    const text = board
      .map((c) => `${c.letter}: ${c.game?.name || "_"}`)
      .join("\n");

    navigator.clipboard.writeText(text);
    alert("已复制分享文本！");
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">
        🎲 A–Z Board Game Challenge
      </h1>

      <ProgressBar progress={progress} />

      <Grid board={board} openSearch={openSearch} />

      <button
        onClick={generateShare}
        className="mt-6 bg-blue-500 text-white px-4 py-2 rounded"
      >
        复制分享
      </button>

      {currentLetter && (
        <SearchModal
          letter={currentLetter}
          onClose={() => setCurrentLetter(null)}
          onSelect={selectGame}
        />
      )}
    </div>
  );
}
