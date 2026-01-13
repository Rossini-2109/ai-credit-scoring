interface Props {
  value: number;
}

export default function ProgressBar({ value }: Props) {
  return (
    <div className="w-full bg-gray-200 h-6 rounded-full">
      <div
        className="h-6 rounded-full bg-green-500 text-white text-center"
        style={{ width: `${value}%` }}
      >
        {value}
      </div>
    </div>
  );
}
