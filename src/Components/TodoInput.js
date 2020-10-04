import React, { Component } from "react";

import { TextField } from "@rmwc/textfield";
import "@rmwc/textfield/styles";

import { Dialog, DialogContent } from "@rmwc/dialog";
import "@rmwc/dialog/styles";

import { CircularProgress } from "@rmwc/circular-progress";
import "@rmwc/circular-progress/styles";

const API = "http://localhost:3001";

class TodoInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      loadingDialog: false,
    };

    this.tambahTodo = this.tambahTodo.bind(this);
  }

  tambahTodo() {
    fetch(`${API}/todos`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ todo: this.state.input }),
    })
      .then((res) => res.json())
      .then((res) => {
        this.props.setDidUpdate(true);
        setTimeout(() => {
          this.setState({ loadingDialog: false });
        }, 1000);
      });
  }

  render() {
    return (
      <>
        <Dialog preventOutsideDismiss open={this.state.loadingDialog}>
          <DialogContent
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CircularProgress />
          </DialogContent>
        </Dialog>

        <TextField
          outlined
          trailingIcon={{
            icon: "add",
            tabIndex: 0,
            onClick: () => {
              if (this.state.input) {
                this.setState({ loadingDialog: true });
                this.tambahTodo();
              }
            },
          }}
          style={{ width: "380px", margin: "10px" }}
          value={this.state.input}
          onChange={(evt) => {
            this.setState({ input: evt.target.value });
          }}
        />
      </>
    );
  }
}
export default TodoInput;
