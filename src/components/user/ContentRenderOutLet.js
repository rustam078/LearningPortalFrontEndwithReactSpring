import React from "react";
import { Outlet } from "react-router-dom";
import MiniDrawerRoutingLeftNavBar from "../MaterialUi/MiniDrawerRoutingLeftNavBar";
import AddContent from "../Addtask/AddContent";
import classes from "./UserProfile.module.css";

const ContentRenderOutLet = () => {
  return (
    <>
      <div className={classes.contentrender}>
        <MiniDrawerRoutingLeftNavBar />
        <div style={{ marginTop: "100px" }}>
          <Outlet />
        </div>
        <div
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        backgroundColor: "red",
        borderRadius:"50%",
      }}
    >
      <AddContent/>
    </div>
      </div>
    </>
  );
};

export default ContentRenderOutLet;
