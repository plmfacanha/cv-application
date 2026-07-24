import "../styles/EducationForm.css";

function EducationForm({ isActive, onShow, onHide }) {
  return (
    <section className="education-form">
      <h2>Education</h2>
      {isActive ? (
        <>
          <form>
            <label htmlFor="school">School Name</label>
            <input type="text" id="school" name="school" />
            <label htmlFor="title">Title of Study</label>
            <input type="text" id="title" name="title" />
            <label htmlFor="studyDate">Date of Study</label>
            <input type="text" id="studyDate" name="studyDate" />
          </form>
          <button onClick={onHide}>Hide</button>
        </>
      ) : (
        <button onClick={onShow}>Show</button>
      )}
    </section>
  );
}

export default EducationForm;
