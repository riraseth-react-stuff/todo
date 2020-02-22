import React, { Component } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import uuid from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import ToDoList from "./components/ToDoList";
import ToDoInput from "./components/ToDoInput";

export default class App extends Component {
  state = {
    items: [
      {
        id: 1,
        title: "wake up"
      },
      {
        id: 2,
        title: "make breakfast"
      }
    ],
    id: uuid(),
    item: "",
    editItem: false
  };
  handleChange = e => {
    console.log("handle change");
  };

  handleSubmit = e => {
    console.log("handle submit");
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
