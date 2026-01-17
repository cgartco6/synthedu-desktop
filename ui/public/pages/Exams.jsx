import React from "react";

export default function Exams() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">AI Exams & Proctoring</h1>

      <div className="bg-gray-700 p-6 rounded-lg shadow mb-4">
        <ul className="list-disc ml-6 text-gray-300">
          <li>Adaptive difficulty engine</li>
          <li>Randomized question pools</li>
          <li>AI-based exam integrity monitoring</li>
          <li>Offline secure exam mode</li>
        </ul>
      </div>

      <button className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded">
        Generate Exam
      </button>
    </div>
  );
}
