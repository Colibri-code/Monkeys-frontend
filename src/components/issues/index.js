import React, { memo } from "react";

// Styles
import "./style.scss";

// Components
import ProjectColumn from "../../components/projectcolumn";

function Issues(props) {
  const columns = [
    { title: "To do", color: "#FF4900", number: 76 },
    { title: "Working", color: "#8798ad", number: 69 },
    { title: "done", color: "#0070ff", number: 28 },
  ];

  return (
    <>
      <div className="project-action-container">
        <div className="project-mode-name">
          <h3>Issues</h3>
        </div>
        <div className="project-action-buttons">
          <button>Complete Sprint</button>
          <button>Edit Boards</button>
          <button className="ction-button-special">Share</button>
        </div>
      </div>
      <div className="project-tasks">
        {columns.map(({ title, number, color }, i) => (
          <ProjectColumn {...{ title, number, color }} key={i} />
        ))}
      </div>
    </>
  );
}

export default memo(Issues);
