import "../styles/GeneralForm.css";

export default function GeneralForm() {
  return (
    <>
      <form action="">
        <label htmlFor="name">Name: </label>
        <input type="text" name="name" />

        <label htmlFor="email">Email: </label>
        <input type="email" name="email" />

        <label htmlFor="phone">Phone: </label>
        <input type="tel" name="phone" />
      </form>
    </>
  );
}
