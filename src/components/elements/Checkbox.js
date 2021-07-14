import React, { useContext } from "react";
import { FormContext } from "../../FormContext";
const Checkbox = ({ id, label, value }) => {
  const { handleChange } = useContext(FormContext);

  return (
    <div>
      <input
        type="checkbox"
        id="exampleCheck1"
        checked={value}
        onChange={(event) => handleChange(id, event)}
      />
      <label htmlFor="exampleCheck1">{label}</label>
    </div>
  );
};

export default Checkbox;
