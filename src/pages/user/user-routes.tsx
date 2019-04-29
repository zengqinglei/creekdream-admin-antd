import React from "react";
import { Route, match, withRouter, Switch } from "react-router-dom";
import Login from "./login/login";
import FullscreenLayout from "../../layout/fullscreen";

/** 用户路由 */
export const UserRoutes = withRouter((props: { match: match }) => {
  return (
    <FullscreenLayout>
      <Switch>
        <Route exact path={`${props.match.path}login`} component={Login} />
      </Switch>
    </FullscreenLayout>
  );
});
