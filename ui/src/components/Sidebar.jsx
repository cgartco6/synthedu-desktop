import React from "react";

const items = ["Dashboard", "CourseFactory", "Tutor", "VideoStudio", "Exams", "Certificates"];

export default function Sidebar({ setPage, currentPage }) {
  return (
    <div className="w-64 bg-gray-900 p-4 flex flex-col">
      <h1 className="text-2xl font-bold mb-6">SYNTHEDU</h1>
      {items.map(item => (
        <button
          key={item}
          onClick={() => setPage(item)}
          className={`mb-2 p-2 rounded text-left hover:bg-gray-700 ${
            currentPage === item ? "bg-blue-600" : ""
          }`}
        >
          {item}
        </button>
      ))}
    </div>
  );
}
