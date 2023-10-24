import { Fragment } from "react";
import "./App.css";
import Section from "./Section.jsx";
import MyComponent from "./MyCOmponent";

function App() {
  return (
    <div>
      <MyComponent name="배고픈 북극곰" age={330}>
        {" "}
        집으로 돌아가세요.{" "}
      </MyComponent>
      <MyComponent name="뜨거 거석" age={400}>
        {" "}
        집으로 돌아가세요.{" "}
      </MyComponent>
    </div>
  );
}

export default App;
