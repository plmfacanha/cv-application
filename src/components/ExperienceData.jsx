export default function ExperienceData({ form, isSubmit }) {
  return (
    <>
      <div className="mb-3">
        <label htmlFor="company" className="form-label">
          Company Name:
        </label>
        <input
          type="text"
          id="company"
          name="company"
          className="form-control"
          defaultValue={form.company}
          disabled={isSubmit}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="position" className="form-label">
          Position Title:
        </label>
        <input
          type="text"
          id="position"
          name="position"
          className="form-control"
          defaultValue={form.position}
          disabled={isSubmit}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="responsibilities" className="form-label">
          Main Responsibilities:
        </label>
        <textarea
          id="responsibilities"
          name="responsibilities"
          className="form-control"
          defaultValue={form.responsibilities}
          disabled={isSubmit}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="dateFrom" className="form-label">
          Date From:
        </label>
        <input
          type="text"
          id="dateFrom"
          name="dateFrom"
          className="form-control"
          defaultValue={form.dateFrom}
          disabled={isSubmit}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="dateUntil" className="form-label">
          Date Until:
        </label>
        <input
          type="text"
          id="dateUntil"
          name="dateUntil"
          className="form-control"
          defaultValue={form.dateUntil}
          disabled={isSubmit}
          required
        />
      </div>
    </>
  );
}
