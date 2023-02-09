import "./App.css";
import Form from "./reference/useRef/Form";
import CatFriends from "./reference/useRef/CatFriends";
import VideoPlayer from "./reference/useRef/VideoPlayer";
import AgeForm from "./reference/useState/AgeForm";
import { CounterBad, CounterGood } from "./reference/useState/Counter";
import PreservingState from "./Learn/PreservingState";
import ResettingStateSamePosition from "./reference/useState/ResettingStateSamePosition";
import UpdatingObjectsInState from "./Learn/UpdatingObjectsInState";
import UpdatingObjsInsideArrays from "./Learn/UpdatingObjsInsideArrays";
import ShoppingCart from "./Learn/Updating Arrays in state/ShoppingCart";
import TaskApp from "./Learn/Updating Arrays in state/FixMutations/TaskApp";
import EditProfile from "./Learn/Reacting to input with state/Profile Editor/EditProfile";

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
      {/* <UpdatingObjectsInState /> */}
      {/* <UpdatingObjsInsideArrays /> */}
      {/* <ShoppingCart /> */}
      {/* <TaskApp /> */}
      <EditProfile />
    </div>
  );
}

export default App;
