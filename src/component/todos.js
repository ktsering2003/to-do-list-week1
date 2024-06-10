import React from "react";
import { Card, CardContent, Grid } from "@mui/material";
import "./todos.css";

const Todos = ({ todos }) => {
  const todoList = todos.length ? (
    todos.map((todo) => (
      <Grid key={todo.id}>
        <Card>
          <CardContent>
            <span style={{ padding: "50px" }}>{todo.content}</span>
          </CardContent>
        </Card>
      </Grid>
    ))
  ) : (
    <p>You have no todo's left</p>
  );

  return <div className="todoCollection" style={{ padding: "10px" }}>{todoList}</div>;
};

export default Todos;
