// /* eslint-disable */
import "../styles/GeneralInfoForm.css";
import { useState } from "react";

function GeneralInfoForm({ isActive, onShow, onHide }) {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    phone: false,
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleBlur = (e) => {
    setTouched((prev) => ({ ...prev, [e.target.name]: true }));
  };

  // Convert object values to an array and check if all have text
  const allFieldsFilled = Object.values(formData).every(
    (value) => value.trim() !== "",
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!allFieldsFilled) {
      console.log("Please fill all the inputs!");
      return;
    }

    console.log("Form submitted successfully!");
  };

  return (
    <section className="general-info-form">
      <h2>General Information</h2>
      {isActive ? (
        <>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              className={touched.phone ? "touched" : ""}
              pattern="[0-9]{10}"
              title="Phone number must be exactly 10 digits"
              required
            />
            <button type="submit" disabled={!allFieldsFilled}>
              Save
            </button>
          </form>
          <button onClick={onHide}>Hide</button>
        </>
      ) : (
        <button onClick={onShow}>Show</button>
      )}
    </section>
  );
}

export default GeneralInfoForm;
