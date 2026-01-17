import React from "react";

export default function Certificates() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Certification Engine</h1>

      <div className="grid grid-cols-2 gap-4">
        {["AI Specialist", "Trading Analyst", "Military Fitness Instructor"].map(
          (cert) => (
            <div
              key={cert}
              className="bg-gray-700 p-4 rounded-lg shadow"
            >
              <h2 className="text-xl font-semibold">{cert}</h2>
              <p className="text-gray-300 text-sm mb-2">
                Blockchain-ready, DRM-protected digital certificate.
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded text-sm">
                Issue Certificate
              </button>
            </div>
          )
        )}
      </div>
    </div>
  );
}
