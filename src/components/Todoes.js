import React, { Component } from "react";
import TodoesItem from "./TodoesItem";
import PropTypes from "prop-types";

class Todoes extends Component {
  render() {
    const { todos } = this.props;
    return (
        todos.map(todo => <TodoesItem key={todo.id} todo={todo} changeHandler={this.props.changeHandler} delToDo = {this.props.delToDo}/>)
    );
  }
}

//PropTypes

Todoes.propTypes = {
  todos : PropTypes.array.isRequired
}

export default Todoes;
