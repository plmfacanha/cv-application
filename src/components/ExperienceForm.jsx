import ExperienceData from "./ExperienceData";

export default function ExperienceForm({
  form,
  isVisible,
  isSubmit,
  handleShow,
  handleHide,
  handleSave,
  handleEdit,
}) {
  return (
    <div className="card p-3 mb-3">
      {isVisible ? (
        <form onSubmit={isSubmit ? handleEdit : handleSave}>
          <h2 className="h5">Practical Experience</h2>
          {isSubmit ? (
            <>
              <ExperienceData form={form} isSubmit={isSubmit} />
              <button type="submit" className="btn btn-primary me-2">
                Edit
              </button>
            </>
          ) : (
            <>
              <ExperienceData form={form} isSubmit={isSubmit} />
              <button type="submit" className="btn btn-primary me-2">
                Save
              </button>
            </>
          )}
          <button
            type="button"
            className="btn btn-outline-secondary"
            onClick={handleHide}
          >
            Hide
          </button>
        </form>
      ) : (
        <div>
          <p>This is the Experience Form</p>
          <button type="button" className="btn btn-primary" onClick={handleShow}>
            Show
          </button>
        </div>
      )}
    </div>
  );
}
