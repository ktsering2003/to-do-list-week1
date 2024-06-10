import React from "react";
import { Card, CardContent, Grid, ListItemButton, ListItemText, Checkbox } from '@mui/material';
import "../components/todos.css";

const Todos = ({ todos, toggleComplete }) => {
  const todoList = todos.length ? (
    todos.map((todo) => (
      <Grid key={todo.id}>
        <Card>
          <CardContent>
            <ListItemButton onClick={() => toggleComplete(todo.id)}>
              <Checkbox checked={todo.completed} />
              <ListItemText primary={todo.text} />
            </ListItemButton>
          </CardContent>
        </Card>
      </Grid>
    ))
  ) : (
    <p>You have no todo's left</p>
  );

  return (
    <div className="todoCollection" style={{ padding: "10px" }}>
      {todoList}
    </div>
  );
};

export default Todos;
