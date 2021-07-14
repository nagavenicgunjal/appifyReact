import React from "react";
import Checkbox from "./elements/Checkbox";
import Input from "./elements/Input";
import TextArea from "./elements/TextArea";
import Date from "./elements/Date";
import Select from "./elements/Select";
const Element = ({
  field: { type, id, label, placeholder, value, options, min, max },
}) => {
  switch (type) {
    case "textbox":
      return (
        <Input id={id} label={label} placeholder={placeholder} value={value} />
      );
    case "textarea":
      return (
        <TextArea
          id={id}
          label={label}
          placeholder={placeholder}
          value={value}
        />
      );
    case "date":
      return (
        <Date
          id={id}
          label={label}
          placeholder={placeholder}
          value={value}
          min={min}
          max={max}
        />
      );
    case "select":
      return (
        <Select
          id={id}
          label={label}
          placeholder={placeholder}
          value={value}
          options={options}
        />
      );
    case "checkbox":
      return <Checkbox id={id} label={label} value={value} />;

    default:
      return null;
  }
};

export default Element;
