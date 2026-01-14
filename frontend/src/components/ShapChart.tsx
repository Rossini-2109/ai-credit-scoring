"use client";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

interface Props {
  data: { feature: string; value: number }[];
}

export default function ShapChart({ data }: Props) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <XAxis dataKey="feature" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="value" fill="#4ade80" />
      </BarChart>
    </ResponsiveContainer>
  );
}
