import "../styles/EducationForm.css";

function EducationForm() {
  return (
    <section className="education-form">
      <h2>Education</h2>
      <form>
        <label htmlFor="school">School Name</label>
        <input type="text" id="school" name="school" />

        <label htmlFor="title">Title of Study</label>
        <input type="text" id="title" name="title" />

        <label htmlFor="studyDate">Date of Study</label>
        <input type="text" id="studyDate" name="studyDate" />

        <div className="submitBox">
          <button type="submit">Submit</button>
          <button type="submit">Edit</button>
        </div>
      </form>
    </section>
  );
}

export default EducationForm;
