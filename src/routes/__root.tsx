import * as React from "react";
import { Outlet, createRootRoute } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: () => (
    <React.Fragment>
      <div>
        <Outlet />
      </div>
    </React.Fragment>
  ),
});
