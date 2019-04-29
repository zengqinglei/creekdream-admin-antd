import React from "react";
import { withRouter, Route, Switch, Redirect, match } from "react-router-dom";
import NotFoundException from "./exceptions/404";
import { DashboardIndex } from "./dashboard";
import { DefaultLayout } from "../layout/default/default";
import { AuthorizedRoute } from "../core/components/auth-route";
import { UserRoutes } from "./user/user-routes";

const DefaultRoutes = (props: { match: match }) => (
  <DefaultLayout>
    <Switch>
      <Route exact path={props.match.path}>
        <Redirect to={`${props.match.path}dashboard`} />
      </Route>
      <Route
        exact
        path={`${props.match.path}dashboard`}
        component={DashboardIndex}
      />
      <Route component={NotFoundException} />
    </Switch>
  </DefaultLayout>
);

/** 页面路由集合 */
export const PageRoutes = withRouter((props: any) => {
  return (
    <Switch>
      <Route path={`${props.match.path}authorize/`} component={UserRoutes} />
      <AuthorizedRoute
        path={`${props.match.path}`}
        component={DefaultRoutes}
        {...props}
      />
    </Switch>
  );
});
