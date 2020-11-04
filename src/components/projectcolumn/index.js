import React, { useState } from "react";
import { FaCaretDown } from "react-icons/fa";

import "./style.scss";
import TaskCard from "../taskcard";

// Actions
import useTaskActions from "../../store/task/actions";

const ProjectColumn = ({ title, color, number, tasks = [] }) => {
  const { state: taskState } = useTaskActions();
  const [show, setShow] = useState(false);

  return (
    <div className="project-column">
      <div className="project-column-header">
        <h5 className="title">
          {title}
          <span className="badge-counter" style={{ color }}>
            {number}
          </span>
        </h5>
        <div className="accordion-icon-container">
          <FaCaretDown
            className="accordion-icon"
            onClick={() => setShow(!show)}
          />
        </div>
      </div>
      <div className={`project-tasks-container ${show ? "show-tasks" : ""}`}>
        {taskState.tasks.map((task, i) => (
          <TaskCard {...{ color, task }} key={i} />
        ))}
      </div>
    </div>
  );
};

export default ProjectColumn;
