interface Props {
  risk: string;
}

export default function RiskBadge({ risk }: Props) {
  let color = "bg-green-500";
  if (risk === "Medium") color = "bg-yellow-400";
  if (risk === "High") color = "bg-red-500";

  return <span className={`${color} text-white px-3 py-1 rounded-full`}>{risk}</span>;
}
