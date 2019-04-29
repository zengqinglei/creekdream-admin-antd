import React, { Component, Dispatch } from "react";
import { Router } from "react-router-dom";
import { UnregisterCallback, History, Location } from "history";
import { AnyAction } from "redux";
import { connect } from "react-redux";
import { redirectRoute } from "../store/route/action";

interface Props {
  history: History;
  redirectRoute: (routePath: string) => void;
}

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>, ownerProps: any) => {
  return Object.assign(ownerProps, {
    redirectRoute: (routePath: string) => dispatch(redirectRoute(routePath))
  });
};

export const ConnectedRouter = connect(
  null,
  mapDispatchToProps
)(
  class extends Component<Props> {
    unsubscribeFromHistory!: UnregisterCallback;

    handleLocationChange = (location: Location) => {
      this.props.redirectRoute(location.pathname);
    };

    componentWillMount() {
      this.unsubscribeFromHistory = this.props.history.listen(
        this.handleLocationChange
      );
      this.handleLocationChange(this.props.history.location);
    }

    componentWillUnmount() {
      if (this.unsubscribeFromHistory) {
        this.unsubscribeFromHistory();
      }
    }

    render() {
      return <Router {...this.props} />;
    }
  }
);
