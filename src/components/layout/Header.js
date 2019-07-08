import React from 'react'

function Header() {
    return (
        <header style={headerStyle}>
            <h1>ToDo list</h1>
        </header>
    )
}

const headerStyle = {
    textAlign : "center",
    color : "red"
}

export default Header
