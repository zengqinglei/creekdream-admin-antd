import React, { Component } from "react";
import { Empty } from "antd";

export default class NotFoundException extends Component {
  render() {
    return (
      <Empty
        style={{ marginTop: "100px" }}
        description={<span>Not Found</span>}
      />
    );
  }
}
