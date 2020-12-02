import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import { UserDataProvider } from "./components/Login/UserData";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <UserDataProvider>
        <App />
      </UserDataProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root"),
);
reportWebVitals();
