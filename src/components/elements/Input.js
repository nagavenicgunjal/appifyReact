import React, { useContext, useEffect } from "react";
import { FormContext } from "../../FormContext";

const Input = ({ id, label, placeholder, value }) => {
  const [match, setMatch] = React.useState([]);
  const { handleChange } = useContext(FormContext);

  useEffect(() => {
    if (value.length > 2) {
      fetch(`https://api.datamuse.com/words?sp=${value}*&max=10`)
        .then((response) => response.json())
        .then((data) => setMatch(data.map((data) => data.word)));
    } else if (match.length > 0) {
      setMatch([]);
    } // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);
  return (
    <div>
      <label htmlFor="textInput">{label}</label>
      <input
        type="text"
        id="textInput"
        placeholder={placeholder ? placeholder : ""}
        value={value}
        onChange={(event) => handleChange(id, event)}
      />
      {match.length ? (
        <div>
          <span>Matching words</span>
          <ol>
            {match.map((word, i) => (
              <li key={i}>{word}</li>
            ))}
          </ol>
        </div>
      ) : null}
    </div>
  );
};

export default Input;
