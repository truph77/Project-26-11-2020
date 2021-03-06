import React from "react";
import Homepage from "../blocks/Homepage";
import { Button } from "antd";
import { Link, useHistory } from "react-router-dom";
import { PlusOutlined, UserAddOutlined } from "@ant-design/icons";

const HomepageComponent = () => {
  const history = useHistory();
  const showCreateAccount = () => {
    history.push({
      pathname: "/create",
    });
  };

  const showSignIn = () => {
    history.push({
      pathname: "/sign-in",
    });
  };
  return (
    <Homepage>
      <div className="wrapper">
        <div className="outer-bag">
          <div className="logo">
            <img src="/images/logo.png" alt="logo" />
          </div>
          <div className="btn-wrapper">
            <Button
              className="btn-create-account"
              type="primary"
              icon={<PlusOutlined />}
              onClick={showCreateAccount}
            >
              Create Account
            </Button>
            <br />
            <Button
              className="btn-sign-in"
              type="primary"
              icon={<UserAddOutlined />}
              onClick={showSignIn}
            >
              Sign In
            </Button>
          </div>
        </div>
      </div>
    </Homepage>
  );
};

export default HomepageComponent;
