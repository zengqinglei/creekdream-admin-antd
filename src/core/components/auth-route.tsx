import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { UserInfo } from "../models/user-info";

const mapStateToProps = ({ userState }: { userState: UserInfo }) => {
  return {
    logged: !!userState && !!userState.id
  };
};

export const AuthorizedRoute = connect(mapStateToProps)(
  (props: { component: any; logged: boolean }) => {
    const { component: Component, logged, ...rest } = props;
    return (
      <Route
        {...rest}
        render={routeProps => {
          if (logged) {
            return <Component {...routeProps} />;
          } else {
            return <Redirect to="/authorize/login" />;
          }
        }}
      />
    );
  }
);
