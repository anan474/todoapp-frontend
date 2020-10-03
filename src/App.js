import React from "react";
import { ThemeProvider } from "@rmwc/theme";

import { List, SimpleListItem, ListItem, ListItemGraphic } from "@rmwc/list";
import "@rmwc/list/styles";

/*

  <ListItem>
    <ListItemGraphic icon="star_border" />
    <ListItemText>
      <ListItemPrimaryText>Cookies</ListItemPrimaryText>
      <ListItemSecondaryText>$4.99 a dozen</ListItemSecondaryText>
    </ListItemText>
    <ListItemMeta icon="info" />
  </ListItem>

*/
const API = "http://localhost:3001";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [
        {
          todo: "baru",
          done: true,
        },
        {
          todo: "baru",
          done: false,
        },
        {
          todo: "baru",
          done: false,
        },
      ],
      input: "",
    };
  }

  render() {
    return (
      <>
        <h2>Todo List</h2>

        <List twoLine>
          {this.state.todoList.map((todoItem, idx) => (
            <SimpleListItem
              graphic={todoItem.done ? "done" : "close"}
              text={todoItem.todo}
              secondaryText={todoItem.createdAt}
            />
          ))}
        </List>

        <input
          type="text"
          value={this.state.input}
          onChange={(evt) => {
            this.setState({ input: evt.target.value });
          }}
        />
        <button>Tambah</button>
      </>
    );
  }
}

function Container() {
  return (
    <ThemeProvider
      options={{
        primary: "#5d1049",
        secondary: "#fa3336",
        error: "#b00020",
        background: "#fff",
        surface: "#fff",
        onPrimary: "rgba(255, 255, 255, 1)",
        onSecondary: "rgba(255, 255, 255, 1)",
        onSurface: "rgba(0, 0, 0, 0.87)",
        onError: "#fff",
        textPrimaryOnBackground: "rgba(0, 0, 0, 0.87)",
        textSecondaryOnBackground: "rgba(0, 0, 0, 0.54)",
        textHintOnBackground: "rgba(0, 0, 0, 0.38)",
        textDisabledOnBackground: "rgba(0, 0, 0, 0.38)",
        textIconOnBackground: "rgba(0, 0, 0, 0.38)",
        textPrimaryOnLight: "rgba(0, 0, 0, 0.87)",
        textSecondaryOnLight: "rgba(0, 0, 0, 0.54)",
        textHintOnLight: "rgba(0, 0, 0, 0.38)",
        textDisabledOnLight: "rgba(0, 0, 0, 0.38)",
        textIconOnLight: "rgba(0, 0, 0, 0.38)",
        textPrimaryOnDark: "white",
        textSecondaryOnDark: "rgba(255, 255, 255, 0.7)",
        textHintOnDark: "rgba(255, 255, 255, 0.5)",
        textDisabledOnDark: "rgba(255, 255, 255, 0.5)",
        textIconOnDark: "rgba(255, 255, 255, 0.5)",
      }}
    >
      <App />
    </ThemeProvider>
  );
}

export default Container;
