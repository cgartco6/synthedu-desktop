import React from "react";

export default function Tutor() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">AI Tutor Avatars</h1>

      <div className="grid grid-cols-3 gap-4">
        {["Strategic AI Tutor", "Fitness Instructor AI", "Trading Mentor AI"].map(
          (tutor) => (
            <div
              key={tutor}
              className="bg-gray-700 p-4 rounded-lg shadow hover:shadow-xl transition"
            >
              <h2 className="text-xl font-semibold mb-2">{tutor}</h2>
              <p className="text-gray-300 text-sm mb-2">
                Adaptive, voice-capable AI tutor with personalized learning paths.
              </p>
              <button className="bg-green-600 hover:bg-green-700 px-3 py-1 rounded text-sm">
                Start Session
              </button>
            </div>
          )
        )}
      </div>
    </div>
  );
}
