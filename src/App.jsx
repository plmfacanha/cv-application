// import { useState } from 'react'

import { useState } from "react";
import GeneralForm from "./components/GeneralForm";
import EducationForm from "./components/EducationForm";
import ExperienceForm from "./components/ExperienceForm";
import DisplayCV from "./components/DisplayCV";
import "./App.css";

/* 
* 2. Include an edit and save button for each section of the forms section.
? 2.1 The save button should save your form and display the value of your input fields in HTML elements on a side section of the page.
? 2.2 The edit button should add back (display) the input fields, with the previously displayed information as values. 
? 2.3 In those input fields, you should be able to edit and resubmit the content. You’re going to make heavy use of state and props, so make sure you understood those concepts.
? 5. Push the results and deploy them with any of the options mentioned below. At this point of the curriculum, it doesn’t matter which platform you choose as long as your project is live on the internet!
*/

function App() {
  const [visibleIndex, setVisibleIndex] = useState(0);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  function handleSave(e) {
    e.preventDefault();

    const currentForm = e.target;
    const formData = new FormData(currentForm);

    // true only if every field is empty
    // const isBlank = [...formData.values()].some((value) => value.trim() === "");

    if (isBlank) {
      alert("please fill out blank inputs!");
      return;
    }

    setForm((prev) => ({
      ...prev,
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
    }));
  }

  return (
    <div className="main">
      <h1>CV Generator</h1>
      <section>
        <div className="forms">
          <GeneralForm
            isVisible={visibleIndex === 1}
            handleShow={() => setVisibleIndex(1)}
            handleHide={() => setVisibleIndex(0)}
            handleSave={handleSave}
            form={form}
          />
          <EducationForm isVisible={visibleIndex === 2} />
          <ExperienceForm isVisible={visibleIndex === 3} />
        </div>
        <DisplayCV form={form} />
      </section>
    </div>
  );
}

export default App;
