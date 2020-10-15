import React from "react";
import "./App.css";

import { Donate } from "./components/Donate";
import { Form } from "./components/Form";
import { Table } from "./components/Table";

function App() {
  return (
    <div className='App'>
      <h1>React component test</h1>
      <Donate />
      <Form />
      <Table />
    </div>
  );
}

export default App;
