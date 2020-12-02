import styled from "styled-components";

export const StyledRegForm = styled.div`
  background-image: linear-gradient(
      to right bottom,
      rgba(0, 0, 0, 0.7),
      rgba(0, 0, 0, 0.7)
    ),
    url(../../signUp.jpg);
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 90vh;
  justify-content: center;
  width: 100vw;
  .heading {
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
  .form-control {
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

  .form-title {
    color: #999;
    text-align: center;
  }

  .btn {
    display: inline-block;
    height: 2.5em;
    width: 20em;
    border: 1px solid #aaaaaa;
    margin-top: 1em;
    outline: none;
    background-color: #00a8e6;
    border-color: #272728;
    border-radius: 3px;
    color: #fff;

    &:hover {
      transition: all 0.2s ease-in-out;
      background-color: #067eaa;
    }
  }
`;

export const StyledNav = styled.nav`
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
    font-size: 2.5em;
    font-weight: bold;
    text-decoration: none;
    color: #fff;
    .logo-img {
      height: 38px;
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
