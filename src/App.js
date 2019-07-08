import React, { Component } from "react";
import "./App.css";
import Header from "./components/layout/Header";
import Todoes from "./components/Todoes";
import AddToDo from "./components/AddToDo";


class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Learn JS",
        completed: false
      },
      {
        id: 2,
        title: "Learn React",
        completed: false
      },
      {
        id: 3,
        title: "Learn advanced React",
        completed: false
      }
    ]
  };


  changeHandler = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };

  addToDo = title => {
    const newToDo = {
      id: () => {
        this.id++
      },
      title: title,
      completed: false
    };
    this.setState({
      todos: [...this.state.todos, newToDo]
    });
  };

  delToDo = id => {
    this.setState({
      todos : [...this.state.todos.filter(todo => todo.id !== id)]
    })
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddToDo addToDo={this.addToDo} />
          <Todoes todos={this.state.todos} changeHandler={this.changeHandler} delToDo = {this.delToDo}/>
        </div>
      </div>
    );
  }
}

export default App;
