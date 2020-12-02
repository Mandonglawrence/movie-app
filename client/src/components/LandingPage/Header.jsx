import React, { useContext } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { UserData, useUser } from "./../Login/UserData";

function Header({ logoLink, setFilmData, paginate }) {
  const [userInfo, SetUserInfo] = useUser();

  async function handleChange(e) {
    const url = `https://staremovieapp.herokuapp.com/apiv1/films/${e.target.value}`;
    const response = await fetch(url, {
      method: "GET",
      redirect: "follow",
    });
    let userData = await response
      .json()
      .then((val) => {
        return val;
      })
      .then((user1) => {
        setFilmData(user1);
      });
    paginate(1);
  }

  const [name, setName] = React.useState(userInfo);
  const history = useHistory();

  React.useEffect(() => {
    setName(userInfo);
  }, [userInfo]);

  function loutOut(params) {
    localStorage.clear("userData");

    //window.location.reload();
    //setTimeout(() => {
    SetUserInfo({});
    //}, 2000);
  }

  return (
    <nav className="PageContainer-nav">
      <NavLink className="PageContainer-logo" to="/">
        <img className="logo-img" src={logoLink} alt="" /> STARE
      </NavLink>

      <input
        className="srch-box"
        type="search"
        placeholder="Search..."
        onChange={handleChange}
      />

      <div className="auth-nav">
        <NavLink
          onClick={loutOut}
          className="user-nav"
          to={
            userInfo === undefined
              ? "/register"
              : userInfo.name === undefined
              ? "/register"
              : "/films"
          }
        >
          {userInfo === undefined
            ? "Sign Up"
            : userInfo.name === undefined
            ? "Sign Up"
            : "Log Out"}
        </NavLink>

        {userInfo === undefined ? (
          ""
        ) : userInfo.name === undefined ? (
          ""
        ) : userInfo.is_admin === false ? (
          ""
        ) : (
          <NavLink to="/create" className="user-nav name-link">
            Add Movie
          </NavLink>
        )}

        <NavLink
          className="user-nav"
          to={
            userInfo === undefined
              ? "/login"
              : userInfo.name === undefined
              ? "/login"
              : "/films"
          }
        >
          {userInfo === undefined
            ? "Login"
            : userInfo.name === undefined
            ? "Login"
            : `Hi ${userInfo.name}`}
        </NavLink>
      </div>
    </nav>
  );
}

export default Header;
