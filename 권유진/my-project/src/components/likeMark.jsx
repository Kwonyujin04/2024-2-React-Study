import React, { useState } from "react";

export default function Counter({ likeCount }) {

    const [count, setCount] = useState(likeCount)
    const updateCount = (arg) => {
        setCount(count + arg);
    }

    return (
        <div className="like-btn">
            <button onClick={() => updateCount(1)}>❤️</button>
            <span>{count}</span>
        </div>
    );
}