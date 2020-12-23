import React, { useState } from "react";
import CreateAccount from "../blocks/CreateAccount";
import { Input, Form, Button } from "antd";
import axios from "axios";

const SignInComponent = () => {
  const [user, setUser] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const submitHandler = () => {
    axios
      .post(`http://localhost:1234/api/login`, user)
      .then((res) => {
        console.log(res.data);
      })
      .catch((res) => {
        console.log(res);
      });
    console.log(user);
  };

  return (
    <CreateAccount>
      <div className="wrapper">
        <div className="logo">
          <img src="/images/logo.png" alt="logo" />
          <br />
          <span className="create-account-text">Welcome to SMCT</span>
        </div>

        <Form
          // onSubmit={submitHandler}
          name="normalSignIn"
          className="create-account"
          initialValues={{ remember: true }}
          // onFinish={onFinish}
        >
          <Form.Item
            rules={[{ required: true, message: "Please input your Email!" }]}
          >
            <Input
              name="email"
              type="email"
              placeholder="Email"
              onChange={handleChange}
              value={user.email}
            />
          </Form.Item>
          <Form.Item
            rules={[{ required: true, message: "Please input your Password!" }]}
          >
            <Input
              name="password"
              type="password"
              placeholder="Password"
              onChange={handleChange}
              value={user.password}
            />
          </Form.Item>
        </Form>

        <Button
          className="btn-sign-up"
          type="primary"
          block
          onClick={() => submitHandler()}
          // icon={<UserAddOutlined />}
        >
          Sign In
        </Button>

        <br />
        <a href="https://github.com/truph77">forget your password</a>
        <div className="tail">
          Not our member yet?
          <a href="./create"> Create Account!</a>
        </div>
      </div>
    </CreateAccount>
  );
};

export default SignInComponent;
