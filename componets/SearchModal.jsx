"use client";
import { useState } from "react";
import { searchGames } from "../utils/api";
import { isValid } from "../utils/validate";

export default function SearchModal({
  letter,
  onClose,
  onSelect
}) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (q) => {
    setQuery(q);
    if (!q) return;

    setLoading(true);
    const data = await searchGames(q);
    const filtered = data.filter((g) =>
      isValid(letter, g.name)
    );

    setResults(filtered.slice(0, 10));
    setLoading(false);
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
      <div className="bg-white rounded-2xl p-5 w-96 max-h-[80vh] overflow-auto">
        <h2 className="text-xl font-bold mb-3">
          选择 {letter}
        </h2>

        <input
          className="w-full border p-2 rounded mb-3"
          placeholder="搜索桌游..."
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
        />

        {loading && <div>加载中...</div>}

        <div className="space-y-2">
          {results.map((game) => (
          <div
            key={game.gameId}
            onClick={() => onSelect(game)}
            className="flex items-center gap-3 p-2 border rounded hover:bg-gray-100 cursor-pointer"
          >
            <img
              src={game.thumbnail}
              alt={game.name}
              className="w-12 h-12 object-cover rounded"
            />
            <div className="text-sm">{game.name}</div>
          </div>
        ))}
      </div>

        <button
          onClick={onClose}
          className="mt-4 w-full bg-gray-200 p-2 rounded"
        >
          关闭
        </button>
      </div>
    </div>
  );
}
