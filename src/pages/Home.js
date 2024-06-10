import React, { Component } from "react";
import { Container, Typography, Paper, Box, Grid } from "@mui/material";
import AddTodo from "../component/AddTodo"; // Correct path
import Todos from "../component/todos"; // Correct path (case-sensitive)
import './Home.css';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
    };
  }

  addTodo = (todo) => {
    todo.id = Math.random();
    let new_list = [...this.state.todos, todo];
    this.setState({
      todos: new_list,
    });
  };

  render() {
    return (
      <div className="home-wrapper">
        <Box className="hero-section">
          <Typography variant="h2" className="hero-title">
            Welcome to Your To-Do List
          </Typography>
          <Typography variant="h5" className="hero-subtitle">
            Organize your tasks efficiently
          </Typography>
        </Box>
        <Container className="home-container">
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper elevation={3} className="todo-paper">
                <Typography variant="h4" gutterBottom>
                  Add a New Task
                </Typography>
                <AddTodo addTodo={this.addTodo} />
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper elevation={3} className="todo-paper">
                <Typography variant="h4" gutterBottom>
                  Your Tasks
                </Typography>
                <Todos todos={this.state.todos} />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default Home;
