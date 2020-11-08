import React, { memo, useCallback, useState, useEffect } from "react";
import { IoIosSearch } from "react-icons/io";
import faker from "faker";

// Styles
import "./style.scss";

// Components
import MonkeyInput from "../../components/monkeyInput";
import MonkeyAvatar from "../../components/monkeyAvatar";
import MonkeyMenu from "../monkeyMenu";
import MonkeyMenuItem from "../monkeyMenuItem";
import MonkeyButtonBase from "../monkeyButtonBase";
import PlanningSprint from "../planningSprint";

// Local
import usePlanningActions from "../../store/sprint/actions";

function Planning(props) {
  const { state: planningState, loadSprints } = usePlanningActions();
  const [isLatestUserOpen, setIsLatestUserOpen] = useState(false);
  const [planningSearch, setPlanningSearch] = useState("");
  const users = Array.from({ length: 99 }, (v, i) => {
    const newUser = {
      id: i + 1,
      first_name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      image: i % 2 === 1 ? faker.image.avatar() : null,
      color: faker.internet.color(),
    };

    return newUser;
  });

  const handleChange = useCallback((e) => {
    switch (e.target.name) {
      case "planningSearch":
        setPlanningSearch(e.target.value);
        break;

      default:
        break;
    }
  }, []);

  const handleClick = useCallback((e) => {
    switch (e.currentTarget.dataset.el_name) {
      case "btnShowMenu":
        setIsLatestUserOpen((prev) => !prev);
        break;
      default:
        break;
    }
  }, []);

  useEffect(() => {
    loadSprints();
    // eslint-disable-next-line
  }, []);

  console.log(planningState, "planningState");
  console.log(users, "users");

  return (
    <div className="d-flex flex-column">
      {/* TOP PART */}
      <div className="row">
        <div className="d-flex monkeys-p-3">
          <div className="d-flex input-box">
            <MonkeyInput
              placeholder="Search by name, user..."
              className="overriding-input"
              onChange={handleChange}
              name="planningSearch"
              value={planningSearch}
            />
            <button className="icon-search-button" id="monkeys-search-planning">
              <IoIosSearch className="icon-search-change" />
            </button>
          </div>
        </div>
        <div className="d-flex monkeys-p-3 align-items-center">
          {users.slice(0, 5).map((u, i) => (
            <MonkeyAvatar className="staked-avatar" user={u} key={i} />
          ))}
          <div
            style={{ width: 32, height: 32 }}
            className="staked-avatar position-relative"
          >
            <MonkeyAvatar
              color="#dfe1e6"
              className="position-absolute font-size-12"
              data-el_name="btnShowMenu"
              onClick={handleClick}
            >
              + {users.length - 4}
            </MonkeyAvatar>
            {isLatestUserOpen && (
              <MonkeyMenu className="overriding-monkey-menu">
                {users.slice(5, users.length).map((u, i) => (
                  <MonkeyMenuItem key={i} className="monkeys-p-1">
                    <div className="monkeys-p-1">
                      <input
                        className="checkbox-md"
                        type="checkbox"
                        name={`user_${u.id}_n`}
                        id={`user_${u.id}_id`}
                      />
                    </div>
                    <span>
                      {u.first_name} {u.last_name}
                    </span>
                  </MonkeyMenuItem>
                ))}
              </MonkeyMenu>
            )}
          </div>
        </div>
        <div className="monkeys-p-3 d-flex">
          <MonkeyButtonBase className="d-flex monkeys-p-2 align-items-center justify-content-center overriding-monkeys-button-base">
            <span>My Issues</span>
          </MonkeyButtonBase>
        </div>
        <div className="monkeys-p-3 d-flex">
          <MonkeyButtonBase className="d-flex monkeys-p-2 align-items-center justify-content-center overriding-monkeys-button-base">
            <span>Newest</span>
          </MonkeyButtonBase>
        </div>
      </div>
      <div className="planning-sprint-container">
        {planningState.sprints
          .filter(
            (s) =>
              s.name.toLowerCase().includes(planningSearch.toLowerCase()) ||
              s.issues.some((issue) =>
                `${issue.assignee.first_name}${issue.assignee.first_name}`
                  .toLowerCase()
                  .includes(planningSearch.toLowerCase())
              )
          )
          .map((sf) => (
            <PlanningSprint key={`planning-id-${sf.id}`} sprint={sf} />
          ))}
      </div>
    </div>
  );
}

export default memo(Planning);
