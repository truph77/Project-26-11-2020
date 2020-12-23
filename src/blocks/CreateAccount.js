import styled from "styled-components";

const CreateAccount = styled.div`
  .wrapper {
    font-size: 16px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.08);
    border-radius: 15px;
    width: 35rem;
    height: 40rem;
    padding: 4rem 0;
    color: #2c353c;
  }

  .logo {
    margin-bottom: 5%;
  }
  .create-account-text {
    font-size: 20px;
  }

  .create-account .ant-input {
    width: 70%;
    margin: 15px;
    border-top: 0px solid;
    border-right: 0px solid;
    border-left: 0px solid;
    color: #2c353c;
    padding: 5px;
  }

  .create-account .ant-input:focus {
    outline: none;
    border-bottom: 2px solid #139bdb;
  }

  ${"" /* 
  .ant-input:active {
    border-top: 0px solid !important;
  } */}

  .btn-sign-up {
    background: #139bdb;
    width: 73%;
    height: 53px;
    border-radius: 5px;
    border: none;
    margin-top: 5%;
    margin-bottom: 1%;
    color: white;
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  .tail {
    text-align: center;
    padding-top: 50%;
  }

  .tail-create-account {
    padding-top: 10%;
  }
`;

export default CreateAccount;
