import React from "react";
import './Counter.css'

const Counter = (props) => {
    console.log('Hii',props)
    return (
    <h1 className="counter">{props.children}</h1>
    )
}

export default Counter;