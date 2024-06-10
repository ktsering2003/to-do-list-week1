import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

function AddTodo ({ addTodo }) {
  const [input, setInput] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (input.trim()) {
      addTodo({
        id: Math.random(),
        text: input,
        completed: false
      });
      setInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField 
        label="Add New Item" 
        variant="outlined" 
        onChange={e => setInput(e.target.value)} 
        value={input}
        data-testid="new-item-textfield"
      />
      <Button
        style={{ marginLeft: "10px" }}
        variant="contained"
        color="primary"
        type="submit"
        data-testid="new-item-button"
      >
        Add
      </Button>
    </form>
  );
}

export default AddTodo;
