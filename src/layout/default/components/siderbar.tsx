import React, { Component, Dispatch } from "react";
import { Menu, Icon } from "antd";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { MenuInfo } from "../../../core/models/menu-info";
import { AnyAction } from "redux";
import { setMenus } from "../../../core/store/route/action";
import { visitMenus } from "../../../core/store/route/reducer";
import { setPermissions } from "../../../core/store/permission/action";
import { getMenus } from "../../../services/menu/menu.service";
import { getResources } from "../../../services/resource/resource.service";
import { UserInfo } from "../../../core/models/user-info";
import { RouteInfo } from "../../../core/models/route-info";
import "./siderbar.css";
import { AppInfo } from "../../../core/models/app-info";

interface Props {
  user: UserInfo;
  collapsed: boolean;
  routePath: string;
  updateMenus: (item: MenuInfo[]) => void;
  updateResources: (item: string[]) => void;
}

interface State {
  menus: MenuInfo[];
  openMenuKeys: string[];
  selectedMenuKeys: string[];
}

const SubMenu = Menu.SubMenu;

const mapStateToProps = ({
  userState,
  appState,
  routeState
}: {
  userState: UserInfo;
  appState: AppInfo;
  routeState: RouteInfo;
}) => {
  return {
    user: userState,
    collapsed: appState.collapsed,
    routePath: routeState.routePath
  };
};

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>, ownerProps: any) => {
  return Object.assign(ownerProps, {
    updateMenus: (item: MenuInfo[]) => dispatch(setMenus(item)),
    updateResources: (item: string[]) => dispatch(setPermissions(item))
  });
};

export const LayoutSider = connect(
  mapStateToProps,
  mapDispatchToProps
)(
  class extends Component<Props, State> {
    state: State = {
      menus: [],
      openMenuKeys: [],
      selectedMenuKeys: []
    };

    componentDidMount() {
      this.loadLocalPermissions();
    }

    loadLocalPermissions() {
      getMenus(this.props.user.id).then(res => {
        this.props.updateMenus(res.data);
        this.setState({ menus: res.data });
      });
      getResources(this.props.user.id).then(res => {
        this.props.updateResources(res.data);
      });
    }

    componentWillReceiveProps(nextProps: Props) {
      this.updateMenuKeys(nextProps.routePath, nextProps.collapsed);
    }

    onOpenChange = (openKeys: string[]) => {
      let openMenuKeys: string[] = this.state.openMenuKeys;
      const latestOpenKey = openKeys.find((key: string) => {
        return openMenuKeys.indexOf(key) === -1;
      });
      if (latestOpenKey) {
        let findItem!: MenuInfo;
        visitMenus(this.state.menus, menu => {
          if (menu.id === latestOpenKey) {
            findItem = menu;
          }
        });

        if (findItem) {
          openMenuKeys = [];
          while (findItem) {
            openMenuKeys.push(findItem.id);
            findItem = findItem._parent;
          }
        }
        this.setState({ openMenuKeys });
      } else {
        this.setState({ openMenuKeys: openKeys });
      }
    };

    // 菜单渲染
    renderMenu = (menus: MenuInfo[]) => {
      return menus.map(menu => {
        let item = <span>{menu.title}</span>;
        if (menu.icon) {
          item = (
            <span>
              <Icon type={menu.icon} />
              {item}
            </span>
          );
        }
        if (menu.url) {
          item = <Link to={menu.url}>{item}</Link>;
        }
        if (menu.children) {
          return (
            <SubMenu key={menu.id} title={item}>
              {this.renderMenu(menu.children)}
            </SubMenu>
          );
        }
        return (
          <Menu.Item key={menu.id} title={menu.title} disabled={menu.disabled}>
            {item}
          </Menu.Item>
        );
      });
    };

    updateMenuKeys = (routePath: string, collapsed: boolean) => {
      let findItem!: MenuInfo;
      let openMenuKeys: string[] = this.state.openMenuKeys;
      let selectedMenuKeys: string[] = this.state.selectedMenuKeys;
      const visitCallback = (menu: MenuInfo) => {
        if (menu.url && menu.url === routePath) {
          findItem = menu;
        }
      };
      while (routePath) {
        visitMenus(this.state.menus, visitCallback);
        if (findItem) {
          break;
        }
        routePath = routePath
          .split("/")
          .slice(0, -1)
          .join("/");
      }

      if (findItem) {
        openMenuKeys = [];
        selectedMenuKeys = [];
        while (findItem) {
          if (findItem.children) {
            openMenuKeys.push(findItem.id);
          } else {
            selectedMenuKeys.push(findItem.id);
          }
          findItem = findItem._parent;
        }
      }

      if (collapsed) {
        openMenuKeys = [];
      }
      this.setState({ openMenuKeys, selectedMenuKeys });
    };

    render() {
      return (
        <Menu
          mode="inline"
          className="menu"
          openKeys={this.state.openMenuKeys}
          selectedKeys={this.state.selectedMenuKeys}
          onOpenChange={this.onOpenChange}
        >
          {this.renderMenu(this.state.menus)}
        </Menu>
      );
    }
  }
);
