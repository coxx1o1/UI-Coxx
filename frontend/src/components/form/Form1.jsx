import React from 'react';
import './Form1.css';

const Form1 = () => {
  return (
    <form className="form1">
      <h2>Form 1</h2>
      <input type="text" placeholder="Enter your name" />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form1;