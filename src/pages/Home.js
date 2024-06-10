import React, { Component } from "react";
import AddTodo from '../components/AddTodo';
import Todos from '../components/Todos';
import './Home.css';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
    };
  }

  addTodo = (todo) => {
    let new_list = [...this.state.todos, todo];
    this.setState({
      todos: new_list,
    });
  };

  toggleComplete = (id) => {
    const updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    this.setState({ todos: updatedTodos });
  };

  render() {
    return (
      <div className="Home">
        <h1>Todo List</h1>
        <AddTodo addTodo={this.addTodo} />
        <Todos todos={this.state.todos} toggleComplete={this.toggleComplete} />
      </div>
    );
  }
}

export default Home;
