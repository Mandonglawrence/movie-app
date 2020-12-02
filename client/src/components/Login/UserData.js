import React, { useState, createContext } from "react";

const UserData = createContext();
function UserDataProvider(props) {
  const [userInfo, SetUserInfo] = useState({});
  const value = [userInfo, SetUserInfo];
  return <UserData.Provider value={value} {...props} />;
}

const useUser = () => {
  const context = React.useContext(UserData);

  if (context === undefined) {
    throw new Error("error");
  }

  return context;
};

export { UserDataProvider, UserData, useUser };
