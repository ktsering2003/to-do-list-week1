import React from 'react';
import { Card, CardContent, Grid, ListItemButton, ListItemText, Checkbox } from '@mui/material';

function Todos({ todos, toggleComplete }) {
  return (
    <Grid container spacing={2}>
      {todos.length === 0 ? (
        <CardContent>
          <p>You have no todo's left</p>
        </CardContent>
      ) : (
        todos.map((todo) => (
          <Grid item key={todo.id}>
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
      )}
    </Grid>
  );
}

export default Todos;
