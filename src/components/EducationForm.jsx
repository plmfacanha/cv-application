import EducationData from "./EducationData";

export default function EducationForm({
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
          <h2 className="h5">Education</h2>
          {isSubmit ? (
            <>
              <EducationData form={form} isSubmit={isSubmit} />
              <button type="submit" className="btn btn-primary me-2">
                Edit
              </button>
            </>
          ) : (
            <>
              <EducationData form={form} isSubmit={isSubmit} />
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
          <p>This is the Education Form</p>
          <button type="button" className="btn btn-primary" onClick={handleShow}>
            Show
          </button>
        </div>
      )}
    </div>
  );
}
