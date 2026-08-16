// import { useState } from 'react'

import { useState } from "react";
import GeneralForm from "./components/GeneralForm";
import EducationForm from "./components/EducationForm";
import ExperienceForm from "./components/ExperienceForm";
import DisplayCV from "./components/DisplayCV";
import "./App.css";

/*
// ? 2. Include an edit and save button for each section of the forms section.
// ? 2.1 The save button should save your form and display the value of your input fields in HTML elements on a side section of the page.
// ? 2.2 The edit button should add back (display) the input fields, with the previously displayed information as values.
// ? 2.3 In those input fields, you should be able to edit and resubmit the content. You’re going to make heavy use of state and props, so make sure you understood those concepts.
? 5. Push the results and deploy them with any of the options mentioned below. At this point of the curriculum, it doesn’t matter which platform you choose as long as your project is live on the internet!
*/

function App() {
  const [visibleIndex, setVisibleIndex] = useState(5);
  const [isSubmit, setSubmit] = useState([false, false, false]);
  const [clearBtn, setClearBtn] = useState(true);
  const [generalForm, setGeneralForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [educationForm, setEducationForm] = useState({
    school: "",
    title: "",
    studyDate: "",
  });

  const [experienceForm, setExperienceForm] = useState({
    company: "",
    position: "",
    responsibilities: "",
    dateFrom: "",
    dateUntil: "",
  });

  function handleGeneralSave(e) {
    e.preventDefault();

    const currentForm = e.target;
    const formData = new FormData(currentForm);

    setGeneralForm((prev) => ({
      ...prev,
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
    }));

    setSubmit((prev) =>
      prev.map((item, index) => (index === visibleIndex ? !item : item)),
    );
  }

  function handleEducationSave(e) {
    e.preventDefault();

    const currentForm = e.target;
    const formData = new FormData(currentForm);

    setEducationForm((prev) => ({
      ...prev,
      school: formData.get("school"),
      title: formData.get("title"),
      studyDate: formData.get("studyDate"),
    }));

    setSubmit((prev) =>
      prev.map((item, index) => (index === visibleIndex ? !item : item)),
    );
  }

  function handleExperienceSave(e) {
    e.preventDefault();

    const currentForm = e.target;
    const formData = new FormData(currentForm);

    setExperienceForm((prev) => ({
      ...prev,
      company: formData.get("company"),
      position: formData.get("position"),
      responsibilities: formData.get("responsibilities"),
      dateFrom: formData.get("dateFrom"),
      dateUntil: formData.get("dateUntil"),
    }));

    setSubmit((prev) =>
      prev.map((item, index) => (index === visibleIndex ? !item : item)),
    );
  }

  function handleEdit(e) {
    e.preventDefault();

    setSubmit((prev) =>
      prev.map((item, index) => (index === visibleIndex ? !item : item)),
    );
  }

  return (
    <div className="main">
      <h1 className="text-center my-4 text-white">CV Generator</h1>
      <section>
        <div className="row">
          <div className="col-md-6">
            <GeneralForm
              form={generalForm}
              isVisible={visibleIndex === 0}
              isSubmit={isSubmit[0]}
              handleShow={() => setVisibleIndex(0)}
              handleHide={() => setVisibleIndex(5)}
              handleSave={handleGeneralSave}
              handleEdit={handleEdit}
            />
            <EducationForm
              form={educationForm}
              isVisible={visibleIndex === 1}
              isSubmit={isSubmit[1]}
              handleShow={() => setVisibleIndex(1)}
              handleHide={() => setVisibleIndex(5)}
              handleSave={handleEducationSave}
              handleEdit={handleEdit}
            />
            <ExperienceForm
              form={experienceForm}
              isVisible={visibleIndex === 2}
              isSubmit={isSubmit[2]}
              handleShow={() => setVisibleIndex(2)}
              handleHide={() => setVisibleIndex(5)}
              handleSave={handleExperienceSave}
              handleEdit={handleEdit}
            />
          </div>
          <div className="col-md-6">
            <DisplayCV
              generalForm={generalForm}
              educationForm={educationForm}
              experienceForm={experienceForm}
            />
          </div>
          <div className="col-12 mt-3">
            <button className="btn btn-danger w-100" disabled={clearBtn}>
              Clear
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
