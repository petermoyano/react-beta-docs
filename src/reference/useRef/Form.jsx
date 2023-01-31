import { useRef } from "react";

// This is an expample of using the useRef hook to access a DOM node. In this case an input.
// As always the inputRef is set outside the rendering cycle of the Form component (use a useEffect or event handler to do so).
// now I can access the dom Node with all of its methods, including focus()
export default function Form() {
  const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.focus();
  }

  return (
    <>
      <input ref={inputRef} />
      <button onClick={handleClick}>Focus the input</button>
    </>
  );
}
