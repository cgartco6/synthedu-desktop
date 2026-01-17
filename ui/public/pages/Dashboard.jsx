import React, { useEffect, useState } from "react";
import StatCard from "../components/StatCard";

export default function Dashboard() {
  const [metrics, setMetrics] = useState({
    CourseFactory: 0,
    Tutor: 0,
    VideoStudio: 0,
    Exams: 0,
    Certificates: 0
  });
  const [log, setLog] = useState("Waiting for AI agents...");

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8765");

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setMetrics(data.metrics);
      setLog(data.log);
    };

    ws.onerror = () => {
      setLog("Backend offline – demo mode running");
    };

    return () => ws.close();
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Executive Dashboard</h1>

      <div className="grid grid-cols-5 gap-4 mb-6">
        {Object.entries(metrics).map(([key, value]) => (
          <StatCard
            key={key}
            title={key}
            value={`${value} active`}
          />
        ))}
      </div>

      <div className="bg-gray-700 p-4 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-2">
          Live AI Agent Activity
        </h2>
        <div className="text-sm text-green-400 font-mono h-28 overflow-auto">
          {log}
        </div>
      </div>
    </div>
  );
}
