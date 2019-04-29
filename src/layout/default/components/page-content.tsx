import React, { Component } from "react";
import { Layout } from "antd";
import './page-content.css';

const { Content } = Layout;

export default class PageContent extends Component {
  render() {
    return <Content className="page-content">{this.props.children}</Content>;
  }
}
