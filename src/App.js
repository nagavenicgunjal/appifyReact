import formJSON from "./formElement.json";
import { useState, useEffect } from "react";
import Element from "./components/Element";
import { FormContext } from "./FormContext";
import Localbase from "localbase";

function App() {
  let db = new Localbase("db");

  const [elements, setElements] = useState(null);

  useEffect(() => {
    setElements(formJSON);
  }, []);

  const { title, form } = elements ?? {};
  const handleSubmit = (event) => {
    event.preventDefault();
    //If all fields raw data required
    db.collection("formData").add(elements.form);

    //If only fields value required
    // db.collection("formData").add({
    //   ...elements.form.fields.map((item) => (item.id, item.value)),
    // });
  };

  const handleChange = (_id, event) => {
    const newElements = { ...elements };
    newElements.form.fields.forEach((field) => {
      const { type, id } = field;
      if (id === _id) {
        switch (type) {
          case "checkbox":
            field.value = event.target.checked;
            break;

          default:
            field.value = event.target.value;
            break;
        }
      }
      setElements(newElements);
    });
  };
  return (
    <FormContext.Provider value={{ handleChange }}>
      <div>
        <h3>{title}</h3>
        <form>
          {form
            ? form.fields.map((field, i) => <Element key={i} field={field} />)
            : null}
          <br />
          <button type="submit" onClick={(e) => handleSubmit(e)}>
            Submit
          </button>
        </form>
      </div>
    </FormContext.Provider>
  );
}

export default App;
