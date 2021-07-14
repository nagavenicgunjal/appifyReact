import React, { useContext } from "react";
import { FormContext } from "../../FormContext";

const TextArea = ({ id, label, placeholder, value }) => {
  const { handleChange } = useContext(FormContext);
  return (
    <div>
      <label htmlFor="textArea">{label}</label>
      <textarea
        placeholder={placeholder ? placeholder : ""}
        id="textArea"
        rows="4"
        cols="50"
        value={value}
        onChange={(event) => handleChange(id, event)}
      ></textarea>
    </div>
  );
};

export default TextArea;
