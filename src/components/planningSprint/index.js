import React, { memo } from "react";

// Style
import "./style.scss";

function PlanningSprint(props) {
  return (
    <div className="d-flex flex-column">
      <div className="row align-items-center justify-content-between">
        <div className="d-flex align-items-center">
          <div className="monkeys-p-2">
            <span className="font-weight-bold">{props.sprint.title}</span>
          </div>
          <span className="monkeys-issues-title">{props.sprint.issues}</span>
        </div>
      </div>
    </div>
  );
}

export default memo(PlanningSprint);
