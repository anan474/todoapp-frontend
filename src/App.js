import React, { useState, useEffect } from "react";
import { ThemeProvider } from "@rmwc/theme";

import {
  List,
  ListItem,
  ListItemGraphic,
  ListItemText,
  ListItemPrimaryText,
  ListItemSecondaryText,
  ListItemMeta,
  ListDivider,
} from "@rmwc/list";
import "@rmwc/list/styles";

import { Elevation } from "@rmwc/elevation";
import "@rmwc/elevation/styles";

import { IconButton } from "@rmwc/icon-button";
import "@rmwc/icon-button/styles";

import moment from "moment";

import Header from "./Components/Header";
import TodoInput from "./Components/TodoInput";

const API = "http://localhost:3001";

function TodoItem({ item, setDidUpdate }) {
  return (
    <ListItem
      onClick={() => {
        fetch(`${API}/todos/${item._id}`, {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          method: "PATCH",
          body: JSON.stringify({
            todo: item.todo,
            done: !item.done,
          }),
        })
          .then((res) => res.json())
          .then((res) => {
            setDidUpdate(true);
          });
      }}
    >
      <ListItemGraphic
        icon={item.done ? "check_box" : "check_box_outline_blank"}
      />
      <ListItemText>
        <ListItemPrimaryText>{item.todo}</ListItemPrimaryText>
        <ListItemSecondaryText>
          {moment(item.updatedAt).calendar()}
        </ListItemSecondaryText>
      </ListItemText>
      <ListItemMeta>
        <IconButton
          icon="close"
          label="Hapus item"
          onClick={() => {
            fetch(`${API}/todos/${item._id}`, {
              headers: {
                Accept: "application/json",
              },
              method: "DELETE",
            })
              .then((res) => res.json())
              .then((res) => {
                setDidUpdate(true);
              });
          }}
        />
      </ListItemMeta>
    </ListItem>
  );
}

function App() {
  const [todoList, setTodoList] = useState([]);

  const [didUpdate, setDidUpdate] = useState(false);

  useEffect(() => {
    fetch(`${API}/todos/semua`)
      .then((res) => res.json())
      .then((res) => {
        setTodoList(res);
        setDidUpdate(false);
      });
  }, []);

  useEffect(() => {
    if (didUpdate) {
      fetch(`${API}/todos/semua`)
        .then((res) => res.json())
        .then((res) => {
          setTodoList(res);
          setDidUpdate(false);
        });
    }
  }, [didUpdate]);

  const todoListOrdered = todoList.sort((a, b) => a.updatedAt < b.updatedAt);
  const todoListDone = todoListOrdered.filter((a) => a.done);
  const todoListNotDone = todoListOrdered.filter((a) => !a.done);

  return (
    <Elevation
      z={8}
      style={{
        width: "400px",
      }}
    >
      <Header />
      {todoListOrdered.length === 0 && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p style={{ color: "gray", fontSize: "14px" }}>Tidak ada item.</p>
        </div>
      )}
      <List
        twoLine
        style={{
          overflowY: "scroll",
          height: "60vh",
        }}
      >
        {todoListNotDone.map((todoItem, idx) => (
          <TodoItem item={todoItem} setDidUpdate={setDidUpdate} />
        ))}
        {todoListDone.length > 0 && <ListDivider />}
        {todoListDone.map((todoItem, idx) => (
          <TodoItem item={todoItem} setDidUpdate={setDidUpdate} />
        ))}
      </List>
      <TodoInput setDidUpdate={setDidUpdate} />
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
        <App />
      </div>
    </ThemeProvider>
  );
}

export default Container;
