import "./App.css";
import Form from "./reference/useRef/Form";
import CatFriends from "./reference/useRef/CatFriends";
import VideoPlayer from "./reference/useRef/VideoPlayer";
import AgeForm from "./reference/useState/AgeForm";
import { CounterBad, CounterGood } from "./reference/useState/Counter";
import PreservingState from "./Learn/PreservingState";
import ResettingStateSamePosition from "./reference/useState/ResettingStateSamePosition";
import UpdatingObjectsInState from "./Learn/UpdatingObjectsInState";
function App() {
  return (
    <div className="App">
      {/* <Form /> */}
      {/* <CatFriends /> */}
      {/* <VideoPlayer /> */}
      {/* <AgeForm /> */}
      {/* <CounterBad />
      <CounterGood /> */}
      {/* <PreservingState /> */}
      {/* <ResettingStateSamePosition /> */}
      <UpdatingObjectsInState />
    </div>
  );
}

export default App;
