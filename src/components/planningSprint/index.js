import React, { memo, useCallback } from "react";

// Components
import MonkeyAvatar from "../monkeyAvatar";

// Style
import "./style.scss";

function PlanningSprint(props) {
  const handleClick = useCallback((e) => {
    switch (e.currentTarget.dataset.el_name) {
      case "btnShowIssueMembers":
        break;
      default:
        break;
    }
  }, []);
  return (
    <div className="d-flex flex-column monkeys-p-3">
      <div className="d-flex align-items-center">
        <div className="monkeys-p-2">
          <span className="font-weight-bold">{props.sprint.name}</span>
        </div>
        <span className="monkeys-text-gray">
          {props.sprint.issues.length} issues
        </span>
      </div>
      <div className="d-flex align-items-center monkeys-text-gray">
        <span className="monkeys-p-2">{props.sprint.start_date}</span>
        <span className="monkeys-p-2">~</span>
        <span className="monkeys-p-2">{props.sprint.end_date}</span>
      </div>

      <div className="d-flex align-items-center">
        {props.sprint.issues.slice(0, 5).map((issue) => (
          <MonkeyAvatar
            user={issue.assignee}
            key={`assignee-id-${issue.assignee.id}`}
          />
        ))}

        {props.sprint.issues.length - 4 > 0 && (
          <MonkeyAvatar
            color="#dfe1e6"
            className="font-size-12"
            data-el_name="btnShowIssueMembers"
            onClick={handleClick}
          >
            + {props.sprint.issues.length - 4}
          </MonkeyAvatar>
        )}
      </div>
    </div>
  );
}

export default memo(PlanningSprint);
