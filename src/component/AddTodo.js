import React, { Component } from "react";
import { TextField, Button } from "@mui/material";

class AddTodo extends Component {
  constructor() {
    super();
    this.state = {
      content: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      content: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.content.trim()) {
      this.props.addTodo({
        id: Math.random(),
        text: this.state.content,
        completed: false,
      });
      this.setState({
        content: "",
      });
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <TextField
          label="Add New Item"
          variant="outlined"
          onChange={this.handleChange}
          value={this.state.content}
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
}

export default AddTodo;
