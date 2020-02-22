import React, { Component } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import uuid from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import ToDoList from "./components/ToDoList";
import ToDoInput from "./components/ToDoInput";

export default class App extends Component {
  state = {
    items: [],
    id: uuid(),
    item: "",
    editItem: false
  };
  handleChange = e => {
    this.setState({
      item: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const newItem = {
      id: this.state.id,
      title: this.state.item
    };
    this.setState(
      {
        items: [...this.state.items, newItem],
        item: "",
        id: uuid(),
        editItem: false
      },
      () => console.log(this.state.items)
    );
  };

  clearList = () => {
    console.log("clear list");
  };

  handleDelete = id => {
    console.log(`handle edit ${id}`);
  };

  handleEdit = id => {
    console.log(`edit ${id}`);
  };
  render() {
    return (
      <>
        <div className='container'>
          <div className='row'>
            <div className='col-10 mx-auto col-md-8 mt-4'>
              <h3 className='text-capitalize text-center'>Todo Input</h3>
              <ToDoInput
                item={this.state.item}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                editItem={this.state.editItem}
              ></ToDoInput>
              <ToDoList
                items={this.state.items}
                clearList={this.clearList}
                handleDelete={this.handleDelete}
                handleEdit={this.handleEdit}
              ></ToDoList>
            </div>
          </div>
        </div>
      </>
    );
  }
}
