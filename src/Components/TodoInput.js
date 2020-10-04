import React, { useState } from "react";
import { TextField } from "@rmwc/textfield";
import "@rmwc/textfield/styles";

function TodoInput() {
  return (
    <TextField
      outlined
      trailingIcon={{
        icon: "add",
        tabIndex: 0,
        onClick: () => console.log("Clear"),
      }}
      style={{ width: "380px", margin: "10px" }}
    />
  );
}

export default TodoInput;
