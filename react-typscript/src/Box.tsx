import React from "react";

const Box = ({ children }: { children: React.ReactNode }) => (
  <div style={{ padding: "1rem", fontWeight: "bold", fontStyle: "italic" }}>
    {children}
  </div>
);

export default Box;
