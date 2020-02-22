import React, { Component } from "react";
import TodoItem from "./TodoItem";

export default class ToDoInput extends Component {
  render() {
    return (
      <section>
        <h2>todo list</h2>
        <TodoItem></TodoItem>
      </section>
    );
  }
}
