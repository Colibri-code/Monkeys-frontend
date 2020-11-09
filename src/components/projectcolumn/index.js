import React, { useState } from "react";
import { FaCaretDown } from "react-icons/fa";

import "./style.scss";
import TaskCard from "../taskcard";

// Actions
import useTaskActions from "../../store/task/actions";

const ColumnHeader = ({ title, color, number }) => {
  const [show, setShow] = useState(false);
  return (
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
  );
};

const ProjectColumn = ({ title, target, color, number, id }) => {
  const {
    state: { tasks: list },
    setVal,
  } = useTaskActions();
  const [show, setShow] = useState(false);

  return (
    <div
      id={id}
      className="project-column"
      onDragOver={(e) => {
        e.preventDefault();
      }}
      onDrop={(e) => {
        let id = Number(JSON.parse(e.dataTransfer.getData("id")));
        setVal(
          "tasks",
          list.map((item) =>
            item.id === id ? { ...item, state: target } : item
          )
        );
      }}
    >
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
        {list
          .filter((task) => task.state === target)
          .map((filteredTask, i) => (
            <div
              onDragStart={(e) => {
                e.dataTransfer.setData("id", JSON.stringify(filteredTask.id));
              }}
              draggable
              key={i}
            >
              <TaskCard
                task={filteredTask}
                key={`task-id-${filteredTask.id}`}
                color={color}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProjectColumn;
