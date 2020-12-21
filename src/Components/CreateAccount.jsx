import React from "react";
import CreateAccount from "../blocks/CreateAccount";
import { Input, Form, Button } from "antd";

class CreateAccountComponent extends React.Component {
  render() {
    return (
      <CreateAccount>
        <div className="wrapper">
          <div className="logo">
            <img src="/images/logo.png" alt="logo" />
            <br />
            <span className="create-account-text">Create Account</span>
          </div>
          <Form
            name="normalCreateAccount"
            className="create-account"
            initialValues={{ remember: true }}
            // onFinish={onFinish}
          >
            <Form.Item
              name="fullName"
              rules={[
                { required: true, message: "Please input your Full name!" },
              ]}
            >
              <Input placeholder="Full name" />
            </Form.Item>
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
            <Form.Item
              name="phoneNumber"
              rules={[
                { required: true, message: "Please input your Phone number!" },
              ]}
            >
              <Input placeholder="Phone number" />
            </Form.Item>
            <Form.Item
              name="country"
              rules={[
                { required: true, message: "Please input your Country!" },
              ]}
            >
              <Input placeholder="Country" />
            </Form.Item>
            <Form.Item
              name="sponsor"
              rules={[
                { required: true, message: "Please input your Sponsor!" },
              ]}
            >
              <Input placeholder="Sponsor" />
            </Form.Item>
          </Form>
          <Button className="btn-sign-up" type="primary" block>
            Sign Up
          </Button>
          <br />
          <a href="https://github.com/truph77">Term and Conditions </a>
          <div className="tail-create-account">
            Already have an account?
            <a href="./sign-in">Sign In</a>
          </div>
        </div>
      </CreateAccount>
    );
  }
}

export default CreateAccountComponent;
