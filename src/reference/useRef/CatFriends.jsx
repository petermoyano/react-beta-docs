import { useRef } from "react";

// In this example, the useRef hook is used to make a ref to the list DOM node (Node list you recieve an array like thing).
//That is rendered later into an HTML unordered list (ul) element.
//The you use an index to "select" the correct img (using querySelectorAll) and execute a method on the img element called scrollIntoView().
export default function CatFriends() {
  const listRef = useRef(null);

  function scrollToIndex(index) {
    const listNode = listRef.current;
    // This line assumes a particular DOM structure:
    const imgNode = listNode.querySelectorAll("li > img")[index];
    console.log(imgNode);
    imgNode.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }

  return (
    <div>
      <nav>
        <button onClick={() => scrollToIndex(0)}>Tom</button>
        <button onClick={() => scrollToIndex(1)}>Maru</button>
        <button onClick={() => scrollToIndex(2)}>Jellylorum</button>
      </nav>
      <div style={{ height: "300px", overflow: "auto" }}>
        <ul ref={listRef}>
          <li>
            <img src="https://placekitten.com/g/200/200" alt="Tom" />
          </li>
          <li>
            <img src="https://placekitten.com/g/300/200" alt="Maru" />
          </li>
          <li>
            <img src="https://placekitten.com/g/250/200" alt="Jellylorum" />
          </li>
        </ul>
      </div>
    </div>
  );
}
