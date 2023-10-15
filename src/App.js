import "./App.css";
import Counter from "./Component/Counter.js";
import User from "./Component/User";
import Color from "./Component/Color";
import TodoList from "./Component/TodoList";
import MultiStateComponent from "./Component/MultiStateComponent";

function App() {
  return (
    <>
      <h1 className="title">Redux Toolkit Examples by Arslan</h1>
      <div className="App">
        <div className="Column">
          <Counter />
          <User />
          <TodoList />
        </div>
        <div className="Column">
          <Color />
          <MultiStateComponent />
        </div>
      </div>
    </>
  );
}

export default App;
