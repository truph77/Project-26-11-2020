import styled from "styled-components";

const Homepage = styled.div`
  .wrapper {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.08);
    border-radius: 15px;
    width: 25rem;
    height: 20rem;
    padding: 4rem 0;
  }

  .outer-bag {
    ${"" /* background: red; */}
  }

  .logo {
    align-self: center;
  }

  .btn-wrapper {
    margin-top: 30%;
  }

  .btn-create-account,
  .btn-sign-in {
    width: 282px;
    height: 53px;
    border-radius: 5px;
    color: white;
    font-size: 16px;
  }

  .btn-create-account {
    background: #9cd454;
  }

  .btn-sign-in {
    background: #139bdb;
    margin-top: 7%;
  }

  .ant-btn {
    border: none;
  }
`;

export default Homepage;
