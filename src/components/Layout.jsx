import React, { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase.config";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/slices/userSlice";

const Layout = ({ children }) => {
  let dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatchEvent(addUser(user));
      } else {
      }
    });
  }, []);

  return <div>{children}</div>;
};

export default Layout;
