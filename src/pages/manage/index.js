import React, { useState, useEffect } from "react";

import "./style.scss";
import BreadCrumb from "../../components/breadcrumb";
import ProjectContainer from "../../containers/projectContainer";

// Store actions
import useTaskActions from "../../store/task/actions";
const Project = () => {
  const { loadTasks } = useTaskActions();
  const [mode, setMode] = useState("Issues");
  const actions = [
    "Issues",
    "Planning",
    "Boards",
    "Labels",
    "Service Desk",
    "Reports",
  ];

  // Effects
  useEffect(() => {
    loadTasks();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="manage-page monkeys-p-5">
      <div className="project-header">
        <BreadCrumb />
        <div className="monkeys-p-1">
          <span className="project-type">Public</span>
        </div>
        <div className="project-enviroment-buttons">
          <button className="env-button">All Enviroment</button>
          <button className="env-button env-active">Dev Enviroment</button>
        </div>
      </div>
      <div className="project-filter-container">
        {actions.map((action, i) => (
          <button
            key={i}
            onClick={() => setMode(action)}
            className={`project-filter-button ${
              action === mode ? "filter-active" : ""
            } `}
          >
            {action}
          </button>
        ))}
      </div>

      <ProjectContainer {...{ mode }} />
    </div>
  );
};

export default Project;
