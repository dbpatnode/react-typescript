import { useCallback, useState, useEffect } from "react";
import Heading from "./Heading";
import Box from "./Box";
import List from "./List";
import Incrementer from "./Incrementer";
import { useNumber } from "./hooks/useNumber";
import "./App.css";
import Todo from "./Todo";

// to check type: command k then command i

interface Payload {
  text: string;
}

function App() {
  const onListClick = useCallback((item: string) => {
    alert(item);
  }, []);

  // how to write useState with typescript
  // the | allows us to take in the payload or null
  // payload is taking from a fetch
  const [payload, setPayload] = useState<Payload | null>(null);
  const [value, setValue] = useNumber(0);

  useEffect(() => {
    fetch("/data.json")
      .then((resp) => resp.json())
      .then((data) => {
        setPayload(data);
      });
  }, []);

  return (
    <div>
      <Heading title='This is the title' />
      <Box>Suck it Trebeck</Box>

      <Box>{JSON.stringify(payload)}</Box>
      <List items={["suck", "it", "Trebeck"]} onClick={onListClick} />
      <Heading title='Todos' />
      <Todo />
      <Heading title='Incrementer' />
      <Incrementer value={value} setValue={setValue} />
    </div>
  );
}

export default App;
