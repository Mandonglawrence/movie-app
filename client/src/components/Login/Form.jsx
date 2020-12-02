import React, { useState, useContext } from "react";
import { useHistory, NavLink } from "react-router-dom";
import { Error, FormLogin, FormNav, FormContainer } from "./LoginElements";
import Button from "./Button";
import { UserData, useUser } from "./UserData";

export const validateInput = (str = "") => str.includes("@");

const Form = ({ handleSubmit }) => {
  const [userInfo, SetuserInfo] = useUser();
  const [FormData, setFormData] = useState({});
  const [res, setRes] = useState("");
  const { push } = useHistory();
  const handleOnChange = ({ target: { name, value } }) =>
    setFormData((prev) => ({ ...prev, [name]: value }));

  const onClick = async (e) => {
    const url = "https://staremovieapp.herokuapp.com/apiv1/login";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",

      body: JSON.stringify({
        email: FormData.email,
        password: FormData.password,
      }),
    });
    let data = await response.json().then((val) => {
      return val;
    });
    console.log("loginnnnn");
    setRes(data.name);
    localStorage.setItem("userData", JSON.stringify(data));

    const { user } = JSON.parse(localStorage.getItem("userData")) || "";
    SetuserInfo(user);
    console.log(data);

    push({
      pathname: "/",
      state: {
        key: res,
      },
    });
  };

  return (
    <>
      <FormNav>
        <nav className="RegisterContainer-nav">
          <NavLink className="RegisterContainer-logo" to="/">
            <img src="./favicon-32x32.png" className="logo-img" alt="logo" />{" "}
            <h1>STARE</h1>
          </NavLink>
          <div className="auth-nav">
            <NavLink className="user-nav" to="/register">
              Sign Up
            </NavLink>
          </div>
        </nav>
      </FormNav>
      <FormContainer className="form-container">
        <FormLogin name="login-form" onSubmit={handleSubmit}>
          <div className="logo">
            <img src="./favicon-32x32.png" alt="logo"></img>
            <h1>Stare</h1>
          </div>
          <div className="heading">Log in</div>

          <div>
            <input
              id="email"
              name="email"
              type={"email"}
              placeholder="Email"
              onChange={handleOnChange}
              className="form-input"
              required
            />
          </div>
          {FormData.email && !validateInput(FormData.email) ? (
            <Error>email not valid</Error>
          ) : null}
          <div>
            {" "}
            <input
              name="password"
              type={"password"}
              placeholder="Password"
              className="form-input"
              required
              onChange={handleOnChange}
            />
          </div>
          <div className="checkbox-field">
            <input
              type="checkbox"
              id="remember"
              name="remember"
              value="Remember me"
            />
            <label className="label" htmlFor="remember">
              Remember me
            </label>
          </div>

          <NavLink to="/reset" style={{ textDecoration: "none" }}>
            <span className="forgot-password">Forgot Password?</span>
          </NavLink>

          <Button buttonName="Log In" onClick={onClick} />
        </FormLogin>
      </FormContainer>
    </>
  );
};

export default Form;
