import React, { Component } from "react";
import { PageHeader } from "antd";
import { RouteInfo } from "../../core/models/route-info";
import { connect } from "react-redux";
import { Breadcrumb as BreadcrumbModel } from "../../core/models/breadcrumb";
import PageContent from "../../layout/default/components/page-content";

interface Props {
  breadcrumbs: BreadcrumbModel[];
}

const mapStateToProps = ({ routeState }: { routeState: RouteInfo }) => {
  return {
    breadcrumbs: routeState.breadcrumbs
  };
};

export const DashboardIndex = connect(
  mapStateToProps,
  null
)(
  class extends Component<Props> {
    render() {
      return (
        <>
          <PageHeader
            title="仪表盘"
            breadcrumb={{ routes: this.props.breadcrumbs }}
          />
          <PageContent>正在努力开发中...</PageContent>
        </>
      );
    }
  }
);
