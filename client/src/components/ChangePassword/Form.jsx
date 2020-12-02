import React, { useState } from "react";
import { NavLink, useParams, useHistory } from "react-router-dom";
import Button from "../Login/Button";
//import { useParams } from "@reach/router"
import { FormConfirm, FormNav, FormContainer } from "./ChangePasswordElements";

const Form = ({ handleSubmit }) => {
  const [FormData, setFormData] = useState({});
  const { id } = useParams();

  const handleOnChange = ({ target: { name, value } }) =>
    setFormData((prev) => ({ ...prev, [name]: value }));

  const { push } = useHistory();

  const handleResetPassword = async () => {
    console.log(FormData.newPassword);
    console.log(FormData.confirmNewPassword);
    const url = `https://staremovieapp.herokuapp.com/apiv1/resetpassword/reset/${id}`;
    const response = await fetch(url, {
      method: "PUT",
      redirect: "follow",

      body: JSON.stringify({
        newPassword: FormData.newPassword,
        confirmNewPassword: FormData.confirmNewPassword,
      }),
    });
    let userData = await response
      .json()
      .then((val) => {
        return val;
      })
      .then((user1) => {
        console.log(user1);
      });
    push("/login");
  };

  return (
    <>
      <FormNav>
        <nav className="RegisterContainer-nav">
          <NavLink className="RegisterContainer-logo" to="/">
            <img src="./../favicon-32x32.png" className="logo-img" alt="logo" />{" "}
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
        <FormConfirm name="login-form" onSubmit={handleSubmit}>
          <div className="logo">
            <img src="./../favicon-32x32.png" alt="logo"></img>
            <h1>Stare</h1>
          </div>
          <div className="heading">Change Password</div>

          <div>
            <input
              id="change-password"
              name="newPassword"
              type={"change-password"}
              placeholder="New Password"
              onChange={handleOnChange}
              className="form-input"
              required
            />
          </div>
          <div>
            <input
              id="change-password"
              name="confirmNewPassword"
              type={"change-password"}
              placeholder="Confirm New Password"
              onChange={handleOnChange}
              className="form-input"
              required
            />
          </div>

          <NavLink to="./login" style={{ textDecoration: "none" }}>
            <Button
              buttonName="Change Password"
              onClick={handleResetPassword}
            />
          </NavLink>
        </FormConfirm>
      </FormContainer>
    </>
  );
};

export default Form;
