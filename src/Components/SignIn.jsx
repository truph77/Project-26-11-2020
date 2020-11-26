import React from "react";
import CreateAccount from "../blocks/CreateAccount";
import { Input, Form, Button } from "antd";

class SignInComponent extends React.Component {
  render() {
    return (
      <CreateAccount>
        <div className="wrapper">
          <div className="logo">
            <img src="/images/logo.png" alt="logo" />
            <br />
            <span className="create-account-text">Welcome to SMCT</span>
          </div>
          <Form
            name="normalSignIn"
            className="create-account"
            initialValues={{ remember: true }}
            // onFinish={onFinish}
          >
            <Form.Item
              name="email"
              rules={[{ required: true, message: "Please input your Email!" }]}
            >
              <Input placeholder="Email" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please input your Password!" },
              ]}
            >
              <Input placeholder="Password" />
            </Form.Item>
          </Form>
          <Button
            className="btn-sign-up"
            type="primary"
            block
            // icon={<UserAddOutlined />}
          >
            Sign In
          </Button>
          <br />
          <a href="#">forget your password</a>
          <div className="tail">
            Not our member yet?
            <a href="#"> Create Account!</a>
          </div>
        </div>
      </CreateAccount>
    );
  }
}

export default SignInComponent;
