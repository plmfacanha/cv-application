export default function EducationData({ form, isSubmit }) {
  return (
    <>
      <div className="mb-3">
        <label htmlFor="school" className="form-label">
          School Name:
        </label>
        <input
          type="text"
          id="school"
          name="school"
          className="form-control"
          defaultValue={form.school}
          disabled={isSubmit}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Title of Study:
        </label>
        <input
          type="text"
          id="title"
          name="title"
          className="form-control"
          defaultValue={form.title}
          disabled={isSubmit}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="studyDate" className="form-label">
          Date of Study:
        </label>
        <input
          type="text"
          id="studyDate"
          name="studyDate"
          className="form-control"
          defaultValue={form.studyDate}
          disabled={isSubmit}
          required
        />
      </div>
    </>
  );
}
