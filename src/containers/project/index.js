import React, { useState } from "react";

import "./style.scss";
import ProjectColumn from "../../components/projectcolumn";
import Navbar from "../../components/navbar";
import Sidebar from "../../components/sidebar";

const Project = () => {
  const [mode, setMode] = useState("Issues");
  const actions = [
    "Issues",
    "Planning",
    "Boards",
    "Labels",
    "Service Desk",
    "Reports",
  ];

  const tasks = [
    { name: "Tag", date: "MM/DD/YY" },
    { name: "Tag", date: "MM/DD/YY" },
    { name: "Tag", date: "MM/DD/YY" },
  ];

  const columns = [
    { title: "To do", color: "#FF4900", number: 76 },
    { title: "Working", color: "#8798ad", number: 69 },
    { title: "done", color: "#0070ff", number: 28 },
  ];

  return (
    <div className="container">
      <div className="main-content">
        <Navbar />
        <Sidebar />
        <div className="app">
          <div className="project-page">
            <div className="project-header">
              <div className="project-name">
                <p>
                  Organization Name <span>/</span>
                  <strong>App Name</strong>
                </p>
              </div>
              <div className="project-header-buttons">
                <button>All Enviroment</button>
                <button className="active-button">Dev Enviroment</button>
              </div>
            </div>
            <div className="project-actions">
              {actions.map((action, i) => (
                <button
                  onClick={() => setMode(action)}
                  className={mode === action ? "mode-active" : ""}
                  key={i}
                >
                  {action}
                </button>
              ))}
            </div>
            <div className="project-mode-active">
              <div className="project-mode-name">
                <h3>Issues</h3>
              </div>
              <div className="project-mode-buttons">
                <button>Complete Sprint</button>
                <button>Edit Boards</button>
                <button className="share">Share</button>
              </div>
            </div>
            <div className="project-tasks">
              {columns.map(({ title, number, color }, i) => (
                <ProjectColumn
                  title={title}
                  number={number}
                  color={color}
                  key={i}
                  tasks={tasks}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
