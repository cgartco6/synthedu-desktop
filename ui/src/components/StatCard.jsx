import React from "react";

export default function StatCard({ title, value }) {
  return (
    <div className="bg-gray-700 p-4 rounded-lg shadow hover:shadow-lg transition">
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="text-2xl">{value}</p>
    </div>
  );
}
