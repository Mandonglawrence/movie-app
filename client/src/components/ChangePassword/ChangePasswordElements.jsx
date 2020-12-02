import styled from "styled-components";

export const FormContainer = styled.div`
  background-image: linear-gradient(
      to right bottom,
      rgba(0, 0, 0, 0.7),
      rgba(0, 0, 0, 0.7)
    ),
    url(../../signUp.jpg);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 90vh;
`;
export const FormConfirm = styled.div`
  .logo {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #fff;
    text-transform: uppercase;
    padding-bottom: 2em;

    h1 {
      margin-left: 0.5em;
    }
  }

  .form-input {
    display: inline-block;
    height: 2em;
    width: 20em;
    border: 1px solid #aaaaaa;
    margin-top: 1em;
    outline: none;
    background-color: #272728;
    border-color: #272728;
    border-radius: 3px;
    color: #eefeee;
  }

  .heading {
    color: #999;
    text-align: center;
    font-size: 20px;
  }

  .btn {
    display: inline-block;
    height: 2.5em;
    width: 20em;
    border: 1px solid #f55757;
    margin-top: 1em;
    outline: none;
    background-color: #fa3f3c;
    border-color: #e23f3c;
    border-radius: 3px;
    color: #fff;
    align-items: center;

    &:hover {
      transition: all 0.2s ease-in-out;
      background: #ee6d6b;
    }
  }
`;

export const FormNav = styled.nav`
  .RegisterContainer-nav {
    height: 10vh;
    background-color: #222121;
    display: flex;
    align-items: center;
    padding: 0 80px;
    width: auto;
    justify-content: space-between;
  }
  .RegisterContainer-logo {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    text-decoration: none;
    font-size: 2.5em;
    .logo-img {
      padding-right: 6px;
    }
  }
  .main-logo::after {
    color: #fff;
  }
  .auth-nav {
    display: flex;
    justify-content: space-between;
  }
  .user-nav {
    margin: 0 10px;
    font-weight: bold;
    text-decoration: none;
    color: #fff;
  }
`;
