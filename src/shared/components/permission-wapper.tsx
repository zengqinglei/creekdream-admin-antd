import React from "react";
import { connect } from "react-redux";
import { ResourceCodes } from "../consts/permission-rescod";
import { PermissionInfo } from "../../core/models/permission-info";

const mapStateToProps = ({
  permissionState
}: {
  permissionState: PermissionInfo;
}) => {
  return {
    resources: permissionState.resources
  };
};

/** 权限包裹控件 */
export const PermissionWapper = connect(mapStateToProps)(
  (props: {
    resources: string[];
    resourceCode: ResourceCodes;
    children: any;
  }) => {
    if (props.resources.indexOf(props.resourceCode) > -1) {
      return props.children;
    } else {
      return <></>;
    }
  }
);
