import React from "react";

export default function CourseFactory() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Course Factory</h1>

      <div className="bg-gray-700 p-6 rounded-lg shadow mb-4">
        <h2 className="text-xl font-semibold mb-2">
          AI Course Generation Engine
        </h2>
        <p className="text-gray-300">
          Automatically generates full professional-grade courses:
        </p>
        <ul className="list-disc ml-6 mt-2 text-gray-300">
          <li>AI & Machine Learning</li>
          <li>Algorithmic Trading</li>
          <li>Military Conditioning</li>
          <li>Injury Recovery & Rehabilitation</li>
          <li>Corporate & Government Training</li>
        </ul>
      </div>

      <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded">
        Generate New Course
      </button>
    </div>
  );
}
