import "../styles/GeneralForm.css";

export default function GeneralForm({
  form,
  isVisible,
  handleShow,
  handleHide,
  handleSave,
}) {
  return (
    <>
      {isVisible ? (
        <form onSubmit={handleSave}>
          <label htmlFor="name">Name: </label>
          <input type="text" name="name" defaultValue={form.name} required />

          <label htmlFor="email">Email: </label>
          <input type="email" name="email" defaultValue={form.email} required />

          <label htmlFor="phone">Phone: </label>
          <input type="tel" name="phone" defaultValue={form.phone} required />

          <button type="submit">Save</button>
          <button className="hideBtn" onClick={handleHide}>
            Hide
          </button>
        </form>
      ) : (
        <div>
          <p>This is the General Information Form</p>
          <button onClick={handleShow}>Show</button>
        </div>
      )}
    </>
  );
}
