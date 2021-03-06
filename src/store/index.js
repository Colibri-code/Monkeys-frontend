import React, { memo, cloneElement } from "react";

// Local
import { AuthStore } from "./auth/store";
import { SidebarStore } from "./sidebar/store";
import { OrganizationStore } from "./organization/store";
import { HistorialStore } from "./historial/store";
import { UserSettingsStore } from "./userSettings/store";
import { SettingsStore } from "./settings/store";
import { TaskStore } from "./task/store";
import { SprintStore } from "./sprint/store";

const providers = [
  <AuthStore.Provider />,
  <SidebarStore.Provider />,
  <OrganizationStore.Provider />,
  <HistorialStore.Provider />,
  <UserSettingsStore.Provider />,
  <SettingsStore.Provider />,
  <TaskStore.Provider />,
  <SprintStore.Provider />,
];

const Store = ({ children: initial }) =>
  providers.reduce(
    (children, parent) => cloneElement(parent, { children }),
    initial
  );

export default memo(Store);
