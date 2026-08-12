export default function GeneralData({ form, isSubmit }) {
  if (isSubmit) {
    console.log(form);
  }

  return (
    <>
      <label htmlFor="name">Name: </label>
      <input type="text" name="name" defaultValue={form.name} required />
      <label htmlFor="email">Email: </label>
      <input type="email" name="email" defaultValue={form.email} required />
      <label htmlFor="phone">Phone: </label>
      <input type="tel" name="phone" defaultValue={form.phone} required />
    </>
  );
}
