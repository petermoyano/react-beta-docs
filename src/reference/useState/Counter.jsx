import { useState } from "react";
// The only diff between these 2 components is that  CounterGood uses un updater function,
// so that means that every time increment() is executed, the function is queued, as opposed to
// CounterBad where you update the state directly so you end up doing 42 + 1. three times
export function CounterGood() {
  const [age, setAge] = useState(42);

  function increment() {
    setAge((a) => a + 1);
  }

  return (
    <>
      <h1>Your age: {age}</h1>
      <button
        onClick={() => {
          increment();
          increment();
          increment();
        }}
      >
        +3
      </button>
      <button
        onClick={() => {
          increment();
        }}
      >
        +1
      </button>
    </>
  );
}

export function CounterBad() {
  const [age, setAge] = useState(42);

  function increment() {
    setAge(age + 1);
  }

  return (
    <>
      <h1>Your age: {age}</h1>
      <button
        onClick={() => {
          increment();
          increment();
          increment();
        }}
      >
        +3
      </button>
      <button
        onClick={() => {
          increment();
        }}
      >
        +1
      </button>
    </>
  );
}
