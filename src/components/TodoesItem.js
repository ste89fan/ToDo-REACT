import React, { Component } from 'react';
import PropTypes from "prop-types";

class TodoesItem extends Component {

    getStyle = () => {
        return {
            backgroundColor : "yellow",
            textDecoration : this.props.todo.completed ? "line-through" : "none",
            textAlign : "center"
        }
    }

    delStyle= () => {
        return {
        background : "black",
        color : "red",
        padding : "5px 15px",
        float : "right",
        borderRadius : "50%"
        }
    }

    render() {
        const { id,title } = this.props.todo
        return (
            <div style={this.getStyle()}>
                <h2>
                    <input type="checkbox" onChange={this.props.changeHandler.bind(this,id)}/>
                    {title}
                    <button onClick = {this.props.delToDo.bind(this,id)} style={this.delStyle()}>x</button>
                </h2>
            </div>
        )
    }
}

//PropTypes

TodoesItem.propTypes = {
    todo : PropTypes.object.isRequired
  }

export default TodoesItem
