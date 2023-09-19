import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import MiniDrawer from "./MiniDrawer";

const RootHeader = () => {
  return (
    <>
      {/* <Header/> */}
      <div style={{ display: "flex", flexDirection: "row" }}>
        <MiniDrawer />
        <div style={{ marginTop: "100px" }}>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default RootHeader;
