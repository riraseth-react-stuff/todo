import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import uuid from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import ToDoList from "./components/ToDoList";
import ToDoInput from "./components/ToDoInput";

function App() {
  return (
    <>
      <div className="container">
        <div className="row">
          <ToDoInput></ToDoInput>
          <ToDoList></ToDoList>
        </div>
      </div>
    </>
  );
}

export default App;
