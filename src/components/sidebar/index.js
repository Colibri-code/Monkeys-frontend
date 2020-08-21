import React, { memo } from "react";
import { FiBarChart } from "react-icons/fi";
import { AiFillTool, AiOutlinePlusSquare } from "react-icons/ai";
import { RiBarChart2Line } from "react-icons/ri";

// Local
import "./style.scss";

function Sidebar(props) {
  return (
    <div className="monkeys-sidebar">
      <div className="p-4">
        <FiBarChart className="monkeys-menu text-secondary pointer" />
      </div>
      <div className="mt-5">
        <div className="p-4">
          <AiOutlinePlusSquare className="font-21 text-secondary pointer" />
        </div>
        <div className="p-4">
          <RiBarChart2Line className="font-21 text-secondary pointer" />
        </div>
        <div className="p-4">
          <AiFillTool className="font-21 text-secondary pointer" />
        </div>
      </div>
    </div>
  );
}

export default memo(Sidebar);
