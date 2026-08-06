// import { useState } from 'react'
import GeneralInfoForm from "./components/GeneralInfoForm";
import EducationForm from "./components/EducationForm";
import ExperienceForm from "./components/ExperienceForm";
import DisplayCV from "./components/DisplayCV";
import { useState } from "react";

/* 
// 1. Think about how to structure your application into components. Your application should include:
  // 1.1 A section to add general information like name, email and phone number.
  // 1.2 A section to add your educational experience (school name, title of study and date of study)
  // 1.3 A section to add practical experience (company name, position title, main responsibilities of your jobs, date from and until when you worked for that company)
  // 3. Create a components directory under your src directory and add your components.
  //  4. Include a styles directory under your src directory for your CSS files. You’ll need to import these in the component files to use them.

? 2. Include an edit and submit button for each section or for the whole CV. 
? 2.1 The submit button should submit your form and display the value of your input fields in HTML elements. 
? 2.2 The edit button should add back (display) the input fields, with the previously displayed information as values. 
? 2.3 In those input fields, you should be able to edit and resubmit the content. You’re going to make heavy use of state and props, so make sure you understood those concepts.
? 5. Push the results and deploy them with any of the options mentioned below. At this point of the curriculum, it doesn’t matter which platform you choose as long as your project is live on the internet!
*/

function App() {
  const [activeIndex, setActiveIndex] = useState(5);
  const [visibleIndex, setVisibleIndex] = useState(0);
  const [formName, setFormName] = useState("");

  return (
    <>
      <div className="info">
        <div>
          <h1>CV Application</h1>
          <GeneralInfoForm
            isActive={activeIndex === 1}
            onShow={() => setActiveIndex(1)}
            onHide={() => setActiveIndex(0)}
            onDisplay={() => setVisibleIndex(1)}
            formName={() => setFormName("general")}
          />
          <EducationForm
            isActive={activeIndex === 2}
            onShow={() => setActiveIndex(2)}
            onHide={() => setActiveIndex(0)}
            formName={() => setFormName("education")}
          />
          <ExperienceForm
            isActive={activeIndex === 3}
            onShow={() => setActiveIndex(3)}
            onHide={() => setActiveIndex(0)}
            formName={() => setFormName("experience")}
          />
          <button>Submit your CV!</button>
        </div>
        <DisplayCV isVisible={visibleIndex === 1} formName={formName} />
      </div>
    </>
  );
}

export default App;
