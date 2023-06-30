import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);

import React from "react";

const AuthContextProvider = (props) => {
  const [chatName, setChatName] = useState("");
  const [alluser, setAllUser] = useState([]);

  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("shoeuser");
    return storedUser ? JSON.parse(storedUser) : {};
  });

  useEffect(() => {
    localStorage.setItem("shoeuser", JSON.stringify(user));
  }, [user]);

  //all users

  const getAllUser = (item) => {
    setAllUser(item);
    
  };

  const getUser = (item) => {
    setUser(item);
  };

  const setName = (name) => {
    setChatName(name);
  };

  

  const value = { user, getUser, chatName, setName, getAllUser ,alluser};
  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;
