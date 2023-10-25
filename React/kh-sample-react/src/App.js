import { Fragment } from "react";
import "./App.css";
import Section from "./Section.jsx";
import MyComponent from "./MyCOmponent";
import Clock from "./Clock";
import EventPractice from "./onChange";
import EvevtHandler from "./eventHandler";
import FruitSelect from "./Select";
import RadioButton from "./RadioBox";
import Table from "./Table";
import TableMap from "./TableMap";
import CreateRef from "./UseRef";
import Login from "./Test";

function App() {
  return (
    // <div>
    //   <MyComponent name="배고픈 북극곰" age={330}>
    //     {" "}
    //     집으로 돌아가세요.{" "}
    //   </MyComponent>
    //   <MyComponent name="뜨거 거석" age={400}>
    //     {" "}
    //     집으로 돌아가세요.{" "}
    //   </MyComponent>
    // </div>

    // <Clock />
    // <EventPractice />
    // <EvevtHandler />
    // <FruitSelect />
    // <RadioButton />
    // <Table />
    // <TableMap />
    // <CreateRef />
    <Login />
  );
}

export default App;
