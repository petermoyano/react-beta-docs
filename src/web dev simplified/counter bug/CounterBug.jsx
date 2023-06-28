import Counter from "./Counter";
import { useState } from "react";

export default function CounterBug() {
    const [isPeter, setIsPeter] = useState(true);
    return (
        <div>
            {isPeter ? (
                <Counter name="Peter" key="Peter" />
            ) : (
                <Counter name="John" key="John" />
            )}
            <br />
            <button onClick={() => setIsPeter((prevValue) => !prevValue)}>
                Swap
            </button>
        </div>
    );
}
