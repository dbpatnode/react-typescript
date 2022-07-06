import React, { useCallback } from "react";
import Heading from "./Heading";
import Box from "./Box";
import List from "./List";
import "./App.css";

function App() {
  const onListClick = useCallback((item: string) => {
    alert(item);
  }, []);

  return (
    <div>
      <Heading title='This is the title' />
      <Box>Suck it Trebeck</Box>
      <List items={["suck", "it", "Trebeck"]} onClick={onListClick} />
    </div>
  );
}

export default App;
