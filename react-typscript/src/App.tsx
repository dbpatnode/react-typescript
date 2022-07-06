import { useCallback, useState, useEffect, useReducer, useRef } from "react";
import Heading from "./Heading";
import Box from "./Box";
import List from "./List";
import "./App.css";
import { type } from "os";

interface Payload {
  text: string;
}
interface Todo {
  id: number;
  done: boolean;
  text: string;
}
type ActionType =
  | { type: "ADD"; text: string }
  | { type: "REMOVE"; id: number };

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

  // useReducer
  const [todos, dispatch] = useReducer((state: Todo[], action: ActionType) => {
    switch (action.type) {
      case "ADD":
        return [
          ...state,
          {
            id: state.length,
            text: action.text,
            done: false,
          },
        ];
      case "REMOVE":
        return state.filter(({ id }) => id !== action.id);
    }
  }, []);

  // useRef
  const newTodoRef = useRef<HTMLInputElement>(null);

  const onAddTodo = useCallback(() => {
    if (newTodoRef.current) {
      dispatch({
        type: "ADD",
        text: newTodoRef.current.value,
      });

      newTodoRef.current.value = "";
    }
  }, []);
  return (
    <div>
      <Heading title='This is the title' />
      <Box>Suck it Trebeck</Box>

      <Box>{JSON.stringify(payload)}</Box>
      <List items={["suck", "it", "Trebeck"]} onClick={onListClick} />
      <Heading title='Todos' />
      {todos.map((todo) => (
        <div key={todo.id}>
          {todo.text}
          <button onClick={() => dispatch({ type: "REMOVE", id: todo.id })}>
            Remove
          </button>
        </div>
      ))}
      <input type='text' ref={newTodoRef} />
      <button onClick={onAddTodo}>Add Todo</button>
    </div>
  );
}

export default App;
