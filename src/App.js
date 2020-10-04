import React, { useState } from "react";
import { ThemeProvider } from "@rmwc/theme";

import {
  List,
  SimpleListItem,
  ListItem,
  ListItemGraphic,
  ListItemText,
  ListItemPrimaryText,
  ListItemSecondaryText,
  ListItemMeta,
} from "@rmwc/list";
import "@rmwc/list/styles";

import { Button } from "@rmwc/button";
import "@rmwc/button/styles";

import { Checkbox } from "@rmwc/checkbox";
import "@rmwc/checkbox/styles";

import { Elevation } from "@rmwc/elevation";
import "@rmwc/elevation/styles";

import Header from "./Components/Header";
import TodoInput from "./Components/TodoInput";

const API = "http://localhost:3001";

function TodoList() {
  const [input, setInput] = useState("");

  const [todoList, setTodoList] = useState([
    {
      todo: "baru",
      done: true,
    },
    {
      todo: "barussss",
      done: false,
    },
    {
      todo: "baru",
      done: false,
    },
    {
      todo: "baru",
      done: true,
    },
    {
      todo: "barussss",
      done: false,
    },
    {
      todo: "baru",
      done: false,
    },
    {
      todo: "baru",
      done: true,
    },
    {
      todo: "barussss",
      done: false,
    },
    {
      todo: "baru",
      done: false,
    },
    {
      todo: "baru",
      done: true,
    },
    {
      todo: "barussss",
      done: false,
    },
    {
      todo: "baru",
      done: false,
    },
  ]);

  return (
    <Elevation
      z={8}
      style={{
        width: "400px",
      }}
    >
      <Header />
      <List
        twoLine
        style={{
          overflowY: "scroll",
          height: "60vh",
        }}
      >
        {todoList.map((todoItem, idx) => (
          <>
            <ListItem
              key={idx}
              // onClick={() => setChecked({ ...checked, [key]: !checked[key] })}
            >
              {todoItem.todo}
              <ListItemMeta>
                <Checkbox checked={todoItem.done} readOnly />
              </ListItemMeta>
            </ListItem>
          </>
        ))}
      </List>
      <TodoInput />
    </Elevation>
  );
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
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <TodoList />
      </div>
    </ThemeProvider>
  );
}

export default Container;
