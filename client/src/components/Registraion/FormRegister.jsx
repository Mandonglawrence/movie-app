import React from "react";
import Input from "./Input";
import Button from "./Button";
import { StyledRegForm, StyledNav } from "./register.style";
import { NavLink } from "react-router-dom";
import useForm from "./useForm";

const FormRegister = () => {
  const { handleSubmit, handleChange, values, errors } = useForm({
    username: "",
    email: "",
    password: "",
  });

  return (
    <>
      <StyledNav>
        <nav className="RegisterContainer-nav">
          <NavLink className="RegisterContainer-logo" to="/">
            <img src="./favicon-32x32.png" className="logo-img" alt="logo" />{" "}
            STARE
          </NavLink>
          <div className="auth-nav">
            <NavLink className="user-nav" to="/login">
              Log In
            </NavLink>
          </div>
        </nav>
      </StyledNav>

      <StyledRegForm>
        <div className="heading">
          <img src="./favicon-32x32.png" alt="logo"></img>
          <h1>Stare</h1>
        </div>
        <div className="form">
          <form onSubmit={handleSubmit}>
            <div className="form-title">Sign Up</div>
            <Input
              label="username"
              type={"text"}
              values={values}
              errors={errors}
              handleChange={handleChange}
            />
            <Input
              label="email"
              type={"email"}
              values={values}
              errors={errors}
              handleChange={handleChange}
            />
            <Input
              label="password"
              type={"password"}
              values={values}
              errors={errors}
              handleChange={handleChange}
            />
            <Button buttonName="Sign Up" />
          </form>
        </div>
      </StyledRegForm>
    </>
  );
};

export default FormRegister;
