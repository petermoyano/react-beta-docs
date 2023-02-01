import { useState } from "react";
// Notice how a gets updated by the updater function, but not age. So it's like
//you hhave access to the value of age in the queued updated functions only.
// so always try to work with a insted of age
export default function AgeForm() {
  const [name, setName] = useState("Taylor");
  const [age, setAge] = useState(42);

  function handleClick() {
    setAge((a) => {
      console.log("age is: ", a, age);
      return a + 1;
    });
    setAge((a) => {
      console.log("age is: ", a, age);
      return a + 1;
    });
    setAge((a) => {
      console.log("age is: ", a, age);
      return a + 1;
    });
  }

  return (
    <>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={handleClick}>Increment age by 3</button>
      <p>
        Hello, {name}. You are {age}.
      </p>
    </>
  );
}
