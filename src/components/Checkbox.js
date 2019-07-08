import React, { Component } from 'react'

class Checkbox extends Component {

    state = {
        checked : ""
    }

    render() {
        return (
            <div>
                 <input type="checkbox"/>
            </div>
        )
    }
}

export default Checkbox
