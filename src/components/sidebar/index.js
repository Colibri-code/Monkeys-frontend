import React, { memo } from "react";
import { FiBarChart } from "react-icons/fi";
import { AiFillTool, AiOutlinePlusSquare } from "react-icons/ai";
import { RiBarChart2Line } from "react-icons/ri";

// Components
import SidebarItem from "./sidebarItem";

// Local
import "./style.scss";
import useSidebarActions from "../.././store/sidebar/actions";
import { useCallback } from "react";
import MonkeyImage from "../../assets/logo/monkey.png";

function Sidebar() {
  const { state: sidebarState, toggleSidebar } = useSidebarActions();

  const handleClick = useCallback(
    () => {
      toggleSidebar();
    },
    // eslint-disable-next-line
    []
  );

  return (
    <div
      className={
        sidebarState.isSidebarExpanded
          ? "monkeys-sidebar-expanded"
          : "monkeys-sidebar"
      }
    >
      <SidebarItem>
        {sidebarState.isSidebarExpanded ? (
          <img
            src={MonkeyImage}
            onClick={handleClick}
            className="monkeys-menu-image absolute-center-expanded"
          />
        ) : (
          <FiBarChart
            onClick={handleClick}
            className={`font-21 monkeys-menu text-secondary ${
              sidebarState.isSidebarExpanded
                ? "absolute-center-expanded"
                : "absolute-center"
            }`}
          />
        )}
      </SidebarItem>
      <div className="mt-5">
        {sidebarState.isSidebarExpanded && (
          <SidebarItem>
            <div className="absolute-center-avatar">
              <div className="monkeys-sidebar-avatar-img" />
              <div className="monkeys-sidebar-welcome-container ml-1">
                <span>Welcome</span>
                <span className="text-secondary">Nombre de usuario</span>
              </div>
            </div>
          </SidebarItem>
        )}
        <SidebarItem pathname="/">
          <div
            className={
              sidebarState.isSidebarExpanded
                ? "absolute-center-expanded"
                : "absolute-center"
            }
          >
            <AiOutlinePlusSquare className="font-21 text-secondary" />
          </div>
        </SidebarItem>
        <SidebarItem pathname="/organizations">
          <RiBarChart2Line
            className={`font-21 text-secondary ${
              sidebarState.isSidebarExpanded
                ? "absolute-center-expanded"
                : "absolute-center"
            }`}
          />
        </SidebarItem>
        <SidebarItem pathname="/manage-project">
          <AiFillTool
            className={`font-21 text-secondary absolute-center ${
              sidebarState.isSidebarExpanded
                ? "absolute-center-expanded"
                : "absolute-center"
            }`}
          />
        </SidebarItem>
      </div>
    </div>
  );
}

export default memo(Sidebar);
