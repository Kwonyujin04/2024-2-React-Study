import React, { useState } from "react";

export default function Counter() {

    cosnt[count, serCount] = useState(0) //초기값으로 0을 준다. 구조분해할당. 
    const updateCount = (arg) => {
        setCount(count + arg);
    }

    return (
        <div>
            <button onClick={() => updateCount(-1)}>-</button>
            <span>{count}</span>
            <button onClick={() => updateCount(1)}>+</button>
        </div>
    );
}