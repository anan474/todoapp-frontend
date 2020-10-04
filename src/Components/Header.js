import React from "react";
import { SimpleTopAppBar, TopAppBarFixedAdjust } from "@rmwc/top-app-bar";
import "@rmwc/top-app-bar/styles";

function Header() {
  return (
    <>
      <SimpleTopAppBar
        title="Todo App"
        style={{
          width: "400px",
        }}
      />
      <TopAppBarFixedAdjust />
    </>
  );
}

export default Header;
