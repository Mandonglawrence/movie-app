import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import Button from "../Login/Button";
import { FormReset, FormNav, FormContainer, Error } from "./ResetElements";

const Form = ({ handleSubmit }) => {
  const validateInput = (str = "") => str.includes("@");

  const [FormData, setFormData] = useState({});

  const handleOnChange = ({ target: { name, value } }) =>
    setFormData((prev) => ({ ...prev, [name]: value }));

  const { push } = useHistory();
  const handleResetPassword = async () => {
    const url = "https://staremovieapp.herokuapp.com/apiv1/resetpassword";
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",

      body: JSON.stringify({
        email: FormData.email,
      }),
    });
    let userData = await response
      .json()
      .then((val) => {
        return val;
      })
      .then((user1) => {
        console.log(user1);
        //if(user1 == "reset password link sent successfully..."){ push("/change") }
      });
    console.log("hello");
  };

  return (
    <>
      <FormNav>
        <nav className="RegisterContainer-nav">
          <NavLink className="RegisterContainer-logo" to="/">
            <img src="./favicon-32x32.png" className="logo-img" alt="logo" />{" "}
            <h1> STARE </h1>
          </NavLink>
          <div className="auth-nav">
            <NavLink className="user-nav" to="/register">
              Sign Up
            </NavLink>

            <NavLink className="user-nav" to="/login">
              Log In
            </NavLink>
          </div>
        </nav>
      </FormNav>

      <FormContainer className="form-container">
        <FormReset name="login-form" onSubmit={handleSubmit}>
          <div className="logo">
            <img src="./favicon-32x32.png" alt="logo"></img>
            <h1>Stare</h1>
          </div>
          <div className="heading">Reset Password</div>
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

          <Button
            buttonName="Recover Password"
            className="reset"
            onClick={handleResetPassword}
            to="/login"
          />
        </FormReset>
      </FormContainer>
    </>
  );
};

export default Form;
