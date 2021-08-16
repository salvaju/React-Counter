import { useState } from "react";

function CounterSizeGenerator() {
    
    const [size, setSize] = useState(0);

    function handleChangeSize(event) {
        setSize(parseInt(event.target.value));
    }

    return(
        <div>
            <span>Size:</span>
            <input type = "number" min = "0" value = {size} onChange = {handleChangeSize}></input>
        </div>
    );

}

export default CounterSizeGenerator;