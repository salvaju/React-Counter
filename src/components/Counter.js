import React, { useState } from "react";
import "../styles/Counter.css"

function Counter(){
    const [number, setNumber] = useState(0);

    return (
        <div>
            <button onClick = {increase}>+</button>
            <span className = "number">{number}</span>
            <button onClick = {decrease}>-</button>
        </div>
    );

    function increase() {
        setNumber(number + 1);
    }

    function decrease() {
        setNumber(number - 1);
    }
}


export default Counter;