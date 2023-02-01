import "./App.css";
import Form from "./reference/useRef/Form";
import CatFriends from "./reference/useRef/CatFriends";
import VideoPlayer from "./reference/useRef/VideoPlayer";
import AgeForm from "./reference/useState/AgeForm";
import { CounterBad, CounterGood } from "./reference/useState/Counter";
function App() {
  return (
    <div className="App">
      {/* <Form /> */}
      {/* <CatFriends /> */}
      {/* <VideoPlayer /> */}
      {/* <AgeForm /> */}
      <CounterBad />
      <CounterGood />
    </div>
  );
}

export default App;
