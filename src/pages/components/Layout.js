import React from "react";
import Navbar from "./Navbar";
import { useRouter } from "next/router";
import { reload } from "../../features/reloadKey";
import { useDispatch, useSelector } from "react-redux";
import { disableButton } from "../../features/user/isActive";


const Layout = (props) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const reloadKey = useSelector((state) => state.reloadKey.key);
  React.useEffect(() => {
    const isActive = localStorage.getItem("isActive");
    dispatch(disableButton({ success: isActive }));
    
  }, [reloadKey]);



  return (
    <div>
      <Navbar/>
      {props.children}
    </div>
  );
};

export default Layout;
