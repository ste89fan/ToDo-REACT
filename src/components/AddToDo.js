import React, { Component } from "react";

class AddToDo extends Component {

    state = {
        title : ""
    }

    changeInput = e => {
        this.setState({
            title : e.target.value
        })
    }

    formSubmit = e => {
        e.preventDefault();
        this.props.addToDo(this.state.title);
        this.setState({title:""})
    }

  render() {
    return (
      <form onSubmit={this.formSubmit} style={formStyle}>
        <input type="text" name="title" value={this.state.title} placeholder="Add what to do..." onChange={this.changeInput} />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

const formStyle = {
    textAlign : "center"
}

export default AddToDo;
