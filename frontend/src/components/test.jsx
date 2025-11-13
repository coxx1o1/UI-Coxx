import React, { useRef } from "react";

function Test() {
  const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.focus();
  }

  return (
    <div onClick={handleClick}>
      <input type="text" ref={inputRef} />
    </div>
  );
}

export default Test;

// i will have div that on click will focus input that is inside it
