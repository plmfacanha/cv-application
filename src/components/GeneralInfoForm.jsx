// /* eslint-disable */
import "../styles/GeneralInfoForm.css";

function GeneralInfoForm({ isActive, onShow }) {
  return (
    <section className="general-info-form">
      <h2>General Information</h2>
      {isActive ? (
        <div>
          <form>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" />
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" />
            <label htmlFor="phone">Phone Number</label>
            <input type="tel" id="phone" name="phone" />
          </form>
          <button onClick={onShow}>Hide</button>
        </div>
      ) : (
        <button onClick={onShow}>Show</button>
      )}
    </section>
  );
}

export default GeneralInfoForm;
