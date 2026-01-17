import React from "react";

export default function VideoStudio() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">AI Video Studio</h1>

      <div className="bg-gray-700 p-6 rounded-lg shadow mb-4">
        <h2 className="text-xl font-semibold mb-2">
          Automated Lesson Production
        </h2>
        <p className="text-gray-300">
          Uses AI narration, slides, and avatars to generate professional
          training videos using MoviePy & FFmpeg.
        </p>
      </div>

      <button className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded">
        Render Demo Lesson
      </button>
    </div>
  );
}
