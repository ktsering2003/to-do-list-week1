import React, { useState } from 'react';
import Todos from '../components/Todos';
import AddTodo from '../components/AddTodo';
import './Home.css';

function Home() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const toggleComplete = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  return (
    <div className="home">
      <h1>Todo List</h1>
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} toggleComplete={toggleComplete} />
    </div>
  );
}

export default Home;
