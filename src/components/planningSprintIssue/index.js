import React, { memo } from "react";
import "./style.scss";
import Color from "color";
import MonkeyAvatar from "../monkeyAvatar";
import { FaArrowAltCircleUp } from "react-icons/fa";

function PlanningSprintIssue(props) {
  const colorVariants = {
    low: "blue",
    medium: "orange",
    hight: "red",
  };

  return (
    <div className="issue-root">
      <div
        className="issue-row"
        style={{ borderLeft: `3px solid ${props.issue.epic_color}` }}
      >
        <div className="monkeys-p-2 d-flex align-items-center">
          <div className="monkeys-p-2">
            <input
              type="checkbox"
              name="issue-checkbox"
              id="issue-checkbox-id"
            />
          </div>
          <div className="monkeys-p-2">{props.issue.title}</div>
          <div className="monkeys-p-2">
            <div
              className="monkeys-p-2 epic-badge"
              style={{
                background: props.issue.epic_color,
                color:
                  Color(props.issue.epic_color).luminosity() >= 0.5
                    ? "black"
                    : "white",
              }}
            >
              {props.issue.epic_link}
            </div>
          </div>
        </div>
        <div className="monkeys-p-2 d-flex align-items-center">
          <div className="monkeys-p-2">
            <MonkeyAvatar
              user={props.issue.assignee}
              key={`issue-assignee-id-${props.issue.assignee.id}`}
            />
          </div>
          <div
            className="monkeys-p-2"
            style={{
              textDecorationLine:
                props.issue.status === "done" ? "line-through" : "none",
            }}
          >
            {props.issue.name}
          </div>
          <div className="monkeys-p-2">
            <FaArrowAltCircleUp
              title={
                props.issue.priority[0].toUpperCase() +
                props.issue.priority.slice(1, props.issue.priority.length)
              }
              color={colorVariants[props.issue.priority]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(PlanningSprintIssue);
