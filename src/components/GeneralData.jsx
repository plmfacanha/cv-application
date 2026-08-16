export default function GeneralData({ form, isSubmit }) {
  return (
    <>
      <label htmlFor="name">Name: </label>
      <input
        type="text"
        name="name"
        defaultValue={form.name}
        disabled={isSubmit}
        required
      />
      <label htmlFor="email">Email: </label>
      <input
        type="email"
        name="email"
        defaultValue={form.email}
        disabled={isSubmit}
        required
      />
      <label htmlFor="phone">Phone: </label>
      <input
        type="tel"
        name="phone"
        defaultValue={form.phone}
        disabled={isSubmit}
        required
      />
    </>
  );
}
