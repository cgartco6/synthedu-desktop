import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import CourseFactory from "./pages/CourseFactory";
import Tutor from "./pages/Tutor";
import VideoStudio from "./pages/VideoStudio";
import Exams from "./pages/Exams";
import Certificates from "./pages/Certificates";

export default function App() {
  const [page, setPage] = useState("Dashboard");

  const renderPage = () => {
    switch (page) {
      case "Dashboard": return <Dashboard />;
      case "CourseFactory": return <CourseFactory />;
      case "Tutor": return <Tutor />;
      case "VideoStudio": return <VideoStudio />;
      case "Exams": return <Exams />;
      case "Certificates": return <Certificates />;
      default: return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen">
      <Sidebar setPage={setPage} currentPage={page} />
      <div className="flex-1 p-6 overflow-auto bg-gray-800">{renderPage()}</div>
    </div>
  );
}
