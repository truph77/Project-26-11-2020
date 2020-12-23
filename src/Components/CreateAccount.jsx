import React, { useState } from "react";
import CreateAccount from "../blocks/CreateAccount";
import { Input, Form, Button } from "antd";
import Axios from "axios";

const CreateAccountComponent = () => {
  const [user, setUser] = useState({
    fullName: "",
    email: "",
    password: "",
    phone: "",
    country: "",
    sponsor: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    Axios.post(`http://localhost:1234/user`, user)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

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
            rules={[
              { required: true, message: "Please input your Full name!" },
            ]}
          >
            <Input
              name="fullName"
              placeholder="Full name"
              onChange={handleChange}
            />
          </Form.Item>
          <Form.Item
            rules={[{ required: true, message: "Please input your Email!" }]}
          >
            <Input name="email" placeholder="Email" onChange={handleChange} />
          </Form.Item>
          <Form.Item
            rules={[{ required: true, message: "Please input your Password!" }]}
          >
            <Input
              name="password"
              placeholder="Password"
              onChange={handleChange}
            />
          </Form.Item>
          <Form.Item
            rules={[
              { required: true, message: "Please input your Phone number!" },
            ]}
          >
            <Input
              name="phone"
              placeholder="Phone number"
              onChange={handleChange}
            />
          </Form.Item>
          <Form.Item
            rules={[{ required: true, message: "Please input your Country!" }]}
          >
            <Input
              name="country"
              placeholder="Country"
              onChange={handleChange}
            />
          </Form.Item>
          <Form.Item
            name="sponsor"
            rules={[{ required: true, message: "Please input your Sponsor!" }]}
          >
            <Input
              name="sponsor"
              placeholder="Sponsor"
              onChange={handleChange}
            />
          </Form.Item>
        </Form>
        <Button
          className="btn-sign-up"
          type="primary"
          block
          onClick={handleSubmit}
        >
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
};

export default CreateAccountComponent;
