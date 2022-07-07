import { useNumber } from "./hooks/useNumber";

// getting types from use number:
type UseNumberValue = ReturnType<typeof useNumber>[0];
type UseNumberSetValue = ReturnType<typeof useNumber>[1];

// using those types to set state:
const Incrementer: React.FunctionComponent<{
  value: UseNumberValue;
  setValue: UseNumberSetValue;
}> = ({ value, setValue }) => (
  <button onClick={() => setValue(value + 1)}>Add {value}</button>
);

export default Incrementer;
