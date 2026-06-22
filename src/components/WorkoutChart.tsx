"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { day: "Mon", value: 2 },
  { day: "Tue", value: 4 },
  { day: "Wed", value: 3 },
  { day: "Thu", value: 5 },
  { day: "Fri", value: 6 },
];

export default function WorkoutChart() {
  return (
    <div className="rounded-xl border border-zinc-800 p-6">
      <h2 className="text-xl font-bold mb-4">
        Weekly Progress
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Line
  type="monotone"
  dataKey="value"
  stroke="#8884d8"
  strokeWidth={3}
/>
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}