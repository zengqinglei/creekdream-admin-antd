import React from "react";
import { Layout } from "antd";
import { LayoutSider } from "./components/siderbar";
import { LayoutHeader } from "./components/header";
import { connect } from "react-redux";
import { AppInfo } from "../../core/models/app-info";
import "./default.css";

const { Sider } = Layout;

const mapStateToProps = ({ appState }: { appState: AppInfo }) => {
  return {
    collapsed: appState.collapsed
  };
};

/** 默认布局 */
export const DefaultLayout = connect(mapStateToProps)(
  (props: { children: any; collapsed: boolean }) => {
    return (
      <Layout>
        <LayoutHeader />
        <Layout>
          <Sider
            className="main-sidebar"
            trigger={null}
            collapsible
            collapsed={props.collapsed}
          >
            <LayoutSider {...props} />
          </Sider>
          <Layout className="main-body">{props.children}</Layout>
        </Layout>
      </Layout>
    );
  }
);
