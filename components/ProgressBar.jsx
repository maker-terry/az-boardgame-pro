export default function ProgressBar({ progress }) {
  return (
    <div className="mb-4">
      完成进度：{progress} / 26
      <div className="w-full bg-gray-300 h-3 rounded mt-2">
        <div className="bg-blue-500 h-3 rounded" style={{ width: `${(progress / 26) * 100}%` }} />
      </div>
    </div>
  );
}