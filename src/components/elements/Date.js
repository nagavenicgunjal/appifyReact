import React, { useContext } from "react";
import { FormContext } from "../../FormContext";

const Date = ({ id, label, placeholder, value, min, max }) => {
  const { handleChange } = useContext(FormContext);
  return (
    <div>
      <label htmlFor="textArea">{label}</label>
      <input
        type="date"
        name="datePicker"
        id="date"
        value={value}
        placeholder={placeholder ? placeholder : ""}
        min={min}
        max={max}
        onChange={(event) => handleChange(id, event)}
      ></input>
    </div>
  );
};

export default Date;
