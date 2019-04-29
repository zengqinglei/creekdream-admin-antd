import React, { Component, Dispatch } from "react";
import { Layout, Icon, Avatar, Menu, Dropdown, Modal } from "antd";
import screenfull from "screenfull";
import { connect } from "react-redux";
import { toggleCollapse } from "../../../core/store/app/action";
import { AnyAction } from "redux";
import { AppInfo } from "../../../core/models/app-info";
import { UserInfo } from "../../../core/models/user-info";
import { logout } from "../../../core/store/user/action";
import "./header.css";

interface Props {
  appinfo: AppInfo;
  userinfo: UserInfo;
  toggle: () => void;
  logout: () => void;
}

interface State {
  isSuppourtFullscreen: boolean;
  isFullscreen: boolean;
}

const { Header } = Layout;

const mapStateToProps = ({
  appState,
  userState
}: {
  appState: AppInfo;
  userState: UserInfo;
}) => {
  return {
    appinfo: appState,
    userinfo: userState
  };
};

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => {
  return {
    toggle: () => dispatch(toggleCollapse()),
    logout: () => dispatch(logout())
  };
};

export const LayoutHeader = connect(
  mapStateToProps,
  mapDispatchToProps
)(
  class extends Component<Props, State> {
    state: State = {
      isSuppourtFullscreen: screenfull && screenfull.enabled,
      isFullscreen: false
    };

    componentDidMount() {
      window.addEventListener("resize", this.windowResize.bind(this));
    }

    windowResize() {
      if (screenfull && screenfull.enabled) {
        this.setState({
          isFullscreen: screenfull.isFullscreen
        });
      }
    }

    logout() {
      Modal.confirm({
        title: "确认操作",
        content: "是否退出登录？",
        onOk: () => {
          this.props.logout();
        }
      });
    }

    clearLocalStorage() {
      Modal.confirm({
        title: "确认操作",
        content: "是否清除本地缓存？",
        onOk() {
          localStorage.clear();
        }
      });
    }

    toggleFullscreen() {
      if (screenfull && screenfull.enabled) {
        screenfull.toggle();
      }
    }

    render() {
      const { appinfo, userinfo, toggle } = this.props;
      const userMenu = (
        <Menu>
          <Menu.Item key="0" disabled>
            <strong>姓名：</strong>
            {userinfo.name}
          </Menu.Item>
          <Menu.Item key="1" disabled>
            <strong>角色：</strong>
            {userinfo.rolename}
          </Menu.Item>
          <Menu.Item key="2" disabled>
            <strong>组织：</strong>
            {userinfo.organizename}
          </Menu.Item>
          <Menu.Divider />
          <Menu.Item key="3" onClick={() => this.logout()}>
            注销
          </Menu.Item>
        </Menu>
      );
      const userLi = (
        <Dropdown overlay={userMenu}>
          <li>
            <Avatar
              size="small"
              style={{ backgroundColor: "#87d068" }}
              icon="user"
            />
            <span className="user-title">{userinfo.username}</span>
          </li>
        </Dropdown>
      );
      const settingMenu = (
        <Menu>
          <Menu.Item key="0" onClick={() => this.toggleFullscreen()}>
            <Icon
              type={this.state.isFullscreen ? "fullscreen-exit" : "fullscreen"}
            />
            {this.state.isFullscreen ? "退出全屏" : "全屏"}
          </Menu.Item>
          <Menu.Item key="1" onClick={() => this.clearLocalStorage()}>
            <Icon type="delete" /> 清理本地缓存
          </Menu.Item>
        </Menu>
      );
      return (
        <Header className="main-header">
          <div
            className="title"
            style={appinfo.collapsed ? { width: "79px" } : { width: "199px" }}
          >
            <img className="logo" alt={appinfo.name} src="/favicon.ico" />
            <span hidden={appinfo.collapsed}>{appinfo.name}</span>
          </div>
          <div className="bar">
            <ul>
              <li onClick={() => toggle()}>
                <Icon type={appinfo.collapsed ? "menu-unfold" : "menu-fold"} />
              </li>
            </ul>
            <ul style={{ flex: "1" }} />
            <ul>
              <Dropdown overlay={settingMenu}>
                <li>
                  <Icon type="setting" />
                </li>
              </Dropdown>
              {userinfo.id ? userLi : <></>}
            </ul>
          </div>
        </Header>
      );
    }
  }
);
