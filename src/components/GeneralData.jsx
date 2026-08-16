export default function GeneralData({ form, isSubmit }) {
  return (
    <>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="form-control"
          defaultValue={form.name}
          disabled={isSubmit}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="form-control"
          defaultValue={form.email}
          disabled={isSubmit}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="phone" className="form-label">
          Phone:
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className="form-control"
          defaultValue={form.phone}
          disabled={isSubmit}
          required
        />
      </div>
    </>
  );
}
