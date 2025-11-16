import React from 'react';
import './Form2.css';

const Form2 = () => {
  return (
    <form className="form2">
      <h2>Form 2</h2>
      <input type="email" placeholder="Enter your email" />
      <button type="submit">Subscribe</button>
    </form>
  );
};

export default Form2;