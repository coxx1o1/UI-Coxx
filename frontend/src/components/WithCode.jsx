import React, { useEffect, useContext } from "react";
import { UIContext } from "../UIContext";

function WithCode({ code, css, children }) {
  const { setCurrentCode, setCurrentCss } = useContext(UIContext);
  useEffect(() => {
    setCurrentCode(code || "");
    setCurrentCss(css || "");
  }, [code, css, setCurrentCode, setCurrentCss]);
  return children;
}

export default WithCode;