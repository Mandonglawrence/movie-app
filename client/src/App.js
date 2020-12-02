import Route from "./route";
import "./App.css";

import React, { useEffect } from "react";
import { useUser } from "./components/Login/UserData";

function App() {
  const [getUser, setUser] = useUser();

  useEffect(() => {
    const { user } = JSON.parse(localStorage.getItem("userData")) || "";
    setUser(user);
  }, []);

  return <Route />;
}

export default App;
