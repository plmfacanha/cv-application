import "../styles/ExperienceForm.css";

function ExperienceForm({ isActive, onShow, onHide }) {
  return (
    <section className="experience-form">
      <h2>Practical Experience</h2>
      {isActive ? (
        <>
          <form>
            <label htmlFor="company">Company Name</label>
            <input type="text" id="company" name="company" />
            <label htmlFor="position">Position Title</label>
            <input type="text" id="position" name="position" />
            <label htmlFor="responsibilities">Main Responsibilities</label>
            <textarea id="responsibilities" name="responsibilities"></textarea>
            <label htmlFor="dateFrom">Date From</label>
            <input type="text" id="dateFrom" name="dateFrom" />
            <label htmlFor="dateUntil">Date Until</label>
            <input type="text" id="dateUntil" name="dateUntil" />
          </form>
          <button onClick={onHide}>Hide</button>
        </>
      ) : (
        <button onClick={onShow}>Show</button>
      )}
    </section>
  );
}

export default ExperienceForm;
