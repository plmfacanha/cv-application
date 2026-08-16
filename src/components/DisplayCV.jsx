function Field({ label, value }) {
  return (
    <p className="mb-1">
      <strong>{label}:</strong> {value}
    </p>
  );
}

export default function DisplayCV({
  generalForm,
  educationForm,
  experienceForm,
}) {
  return (
    <section className="card p-3">
      <h1 className="h3">Resume</h1>
      <div className="mb-3">
        <h2 className="h5">General Information</h2>
        <Field label="Name" value={generalForm.name} />
        <Field label="Email" value={generalForm.email} />
        <Field label="Phone" value={generalForm.phone} />
      </div>
      <div className="mb-3">
        <h2 className="h5">Education</h2>
        <Field label="School" value={educationForm.school} />
        <Field label="Title of Study" value={educationForm.title} />
        <Field label="Date of Study" value={educationForm.studyDate} />
      </div>
      <div className="mb-3">
        <h2 className="h5">Practical Experience</h2>
        <Field label="Company" value={experienceForm.company} />
        <Field label="Position" value={experienceForm.position} />
        <Field
          label="Responsibilities"
          value={experienceForm.responsibilities}
        />
        <Field
          label="Dates"
          value={`${experienceForm.dateFrom} - ${experienceForm.dateUntil}`}
        />
      </div>
    </section>
  );
}
