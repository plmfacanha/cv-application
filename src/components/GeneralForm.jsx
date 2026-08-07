import "../styles/GeneralForm.css";

export default function GeneralForm({ isVisible, handleShow, handleHide }) {
  return (
    <>
      {isVisible ? (
        <form action="">
          <label htmlFor="name">Name: </label>
          <input type="text" name="name" />

          <label htmlFor="email">Email: </label>
          <input type="email" name="email" />

          <label htmlFor="phone">Phone: </label>
          <input type="tel" name="phone" />

          <button>Save</button>
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
