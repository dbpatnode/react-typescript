import React from "react";

const List: React.FunctionComponent<{
  items: string[];
}> = ({ items }) => (
  <ul>
    {items.map((item, index) => (
      <li key={index}> {item} </li>
    ))}
  </ul>
);
export default List;
