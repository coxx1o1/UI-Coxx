import React, { useState } from "react";

function State() {
  const [count, setCount] = useState(0);
  return (
    <div style={{ padding: "1rem" }}>
      <h2>Welcome</h2>
      <p>This component was missing; I added a simple counter.</p>
      <button onClick={() => setCount((c) => c + 1)}>
        Count: {count}
      </button>
    </div>
  );
}

export default State;