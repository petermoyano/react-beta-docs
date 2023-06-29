import { useState } from "react";

export default function Counter({ name }) {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h1>{name}</h1>
            <button onClick={() => setCount((prevCount) => prevCount - 1)}>
                -
            </button>
            {count}
            <button onClick={() => setCount((prevCount) => prevCount + 1)}>
                +
            </button>
        </div>
    );
}
