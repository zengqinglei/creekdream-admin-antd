import React, { Component, FormEvent, Dispatch } from "react";
import { Form, Icon, Input, Button, Checkbox } from "antd";
import { FormComponentProps } from "antd/lib/form";
import "./login.css";
import { AnyAction } from "redux";
import { login } from "../../../core/store/user/action";
import { connect } from "react-redux";
import { UserInfo } from "../../../core/models/user-info";
import { History } from "history";

interface LoginFormProps extends FormComponentProps {
  login: (user: UserInfo) => void;
  history: History;
}

class LoginForm extends Component<LoginFormProps> {
  handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
        const user: UserInfo = {
          id: values.userName,
          username: values.userName
        };
        this.props.login(user);
        this.props.history.push("/");
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <>
        <div className="login-header">
          <div>
            <img className="logo" alt="统一中后台" src="/favicon.ico" />
            <span className="title">统一中后台</span>
          </div>
          <p className="description">
            统一中后台管理系统,用于快速构建后台管理系统基础项目
          </p>
        </div>
        <Form className="login-section" onSubmit={this.handleSubmit}>
          <Form.Item>
            {getFieldDecorator("userName", {
              rules: [{ required: true, message: "请填写登录用户名!" }]
            })(
              <Input
                prefix={
                  <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="用户名：any"
              />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("password", {
              rules: [{ required: true, message: "请填写登录密码!" }]
            })(
              <Input
                prefix={
                  <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                type="password"
                placeholder="密   码：any"
              />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("remember", {
              valuePropName: "checked",
              initialValue: true
            })(<Checkbox style={{ float: "left" }}>自动登录</Checkbox>)}
            <a style={{ float: "right" }} href="/user/forgot">
              忘记密码 ？
            </a>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
              登录
            </Button>
            或者 <a href="/user/register">立即注册！</a>
          </Form.Item>
        </Form>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => {
  return {
    login: (user: UserInfo) => dispatch(login(user))
  };
};

const Login = connect(
  null,
  mapDispatchToProps
)(Form.create({ name: "login" })(LoginForm));
export default Login;
