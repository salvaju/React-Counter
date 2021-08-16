import React from "react";
import Counter from "./Counter";

function CounterGroup() {
   const counterList = generateCounterList();

   function generateCounterList() {
    return new Array(5).fill(Date.now());
}

    return(
        <div>
            {
                counterList.map((item, index) => (
                    <Counter key={item + index}></Counter>
            ))}
        </div>
    );

}

export default CounterGroup;