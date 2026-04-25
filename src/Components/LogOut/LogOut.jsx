import React, { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthContext";

const LogOut = () => {
  const { handleLogOut } = useContext(AuthContext);
  handleLogOut()
    .then(() => {
      console.log("signOut successful");
    })
    .catch((error) => {
      console.log(error);
    });

  return <div></div>;
};

export default LogOut;
