import React, { useContext } from "react";
import { UIContext } from "../../UIContext";
import Form1 from "./Form1";
import Form2 from "./Form2";

const FormMain = () => {
  const { selectedComponent } = useContext(UIContext);

  const renderForm = () => {
    switch (selectedComponent) {
      case "Form1":
        return <Form1 />;
      case "Form2":
        return <Form2 />;
      default:
        return null;
    }
  };

  return <div className="form-container">{renderForm()}</div>;
};

export default FormMain;