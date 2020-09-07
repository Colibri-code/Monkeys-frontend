import React, { memo, cloneElement } from "react";

// Local
import { AuthStore } from "./auth/store";
import { SidebarStore } from "./sidebar/store";

const providers = [<AuthStore.Provider />, <SidebarStore.Provider />];

const Store = ({ children: initial }) =>
  providers.reduce(
    (children, parent) => cloneElement(parent, { children }),
    initial
  );

export default memo(Store);
