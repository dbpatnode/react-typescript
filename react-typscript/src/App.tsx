import React from "react";
import Heading from "./Heading";
import Box from "./Box";
import List from "./List";
import "./App.css";

function App() {
  return (
    <div>
      <Heading title='This is the title' />
      <Box>Suck it Trebeck</Box>
      <List items={["suck", "it", "Trebeck"]} />
    </div>
  );
}

export default App;
