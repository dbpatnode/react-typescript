import { useCallback, useState, useEffect } from "react";
import Heading from "./Heading";
import Box from "./Box";
import List from "./List";
import "./App.css";

interface Payload {
  text: string;
}

function App() {
  const onListClick = useCallback((item: string) => {
    alert(item);
  }, []);

  // how to write useState with typescript
  // the | allows us to take in the payload or null
  const [payload, setPayload] = useState<Payload | null>(null);

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
    </div>
  );
}

export default App;
