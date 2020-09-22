// Third libs
import React, { memo, useState, useCallback } from "react";
import PropTypes from "prop-types";
import { AiOutlineInfoCircle } from "react-icons/ai";

// Local
import "./style.scss";

function Breadcrumb({ group, value, items, text, name, onChange }) {
  const [isVisible, setIsVisible] = useState(false);
  const handleClick = useCallback(
    (e) => {
      switch (e.currentTarget.dataset.el_name) {
        case "btnTitle":
          setIsVisible((prev) => !prev);
          break;
        case "btnSelect":
          onChange({
            target: {
              name,
              value: JSON.parse(e.currentTarget.dataset.el_value),
            },
          });
          break;
        default:
          break;
      }
    },
    // eslint-disable-next-line
    [name]
  );

  const applications = [
    { name: "All applications", id: -1 },
    { name: "application one", id: 1 },
    { name: "application two", id: 2 },
    { name: "application three", id: 3 },
  ];

  const environments  = [
    { name: "All environments", id: -1 },
    { name: "Dev", id: 1 },
    { name: "Stage", id: 2 },
    { name: "Production", id: 3 },
    { name: "Develop2", id: 4 },
    { name: "RA", id: 5 },
  ]

  return (
    <div className="d-flex flex-column user-select-none">
      <div className="d-flex align-items-center" data-el_name="btnBreacrumb">
        <div className="user-select-none">
          Organization
        </div>
        <span>/</span>
        <div className="user-select-none">
          Application
        </div>
        <span>/</span>
        <div className="user-select-none">
          Environment
        </div>
      </div>
      {isVisible && (
        <div className="d-flex position-absolute shadow monkeys-bg-white monkeys-fade-in-out monkeys-mt-4">
          {/* Organizations */}
          <div className="d-flex flex-column">
            <div className="d-flex align-items-center monkeys-p-2 font-weight-bolder monkeys-bb-1-white-gray-solid">
              {group}
              <AiOutlineInfoCircle className="monkeys-f-3 monkeys-ml-1" />
            </div>

            {items.map((item, i) => (
              <div
                key={i}
                className="pointer monkeys-p-2"
                onClick={handleClick}
                data-el_name="btnSelect"
                data-el_value={JSON.stringify(item)}
              >
                {item[text]}
              </div>
            ))}
          </div>
          {/* Applications */}
          <div className="d-flex flex-column">
            <div className="d-flex align-items-center monkeys-p-2 font-weight-bolder monkeys-bb-1-white-gray-solid">
              {group}
              <AiOutlineInfoCircle className="monkeys-f-3 monkeys-ml-1" />
            </div>

            {items.map((item, i) => (
              <div
                key={i}
                className="pointer monkeys-p-2"
                onClick={handleClick}
                data-el_name="btnSelect"
                data-el_value={JSON.stringify(item)}
              >
                {item[text]}
              </div>
            ))}
          </div>
          {/* Environments */}
          <div className="d-flex flex-column">
            <div className="d-flex align-items-center monkeys-p-2 font-weight-bolder monkeys-bb-1-white-gray-solid">
              {group}
              <AiOutlineInfoCircle className="monkeys-f-3 monkeys-ml-1" />
            </div>

            {items.map((item, i) => (
              <div
                key={i}
                className="pointer monkeys-p-2"
                onClick={handleClick}
                data-el_name="btnSelect"
                data-el_value={JSON.stringify(item)}
              >
                {item[text]}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

Breadcrumb.propTypes = {
  group: PropTypes.string,
  items: PropTypes.array,
  value: PropTypes.object,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  name: PropTypes.string,
  onChange: PropTypes.func,
};

export default memo(Breadcrumb);
