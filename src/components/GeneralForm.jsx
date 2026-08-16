import "../styles/GeneralForm.css";
import GeneralData from "./GeneralData";
// import { useState } from "react";

export default function GeneralForm({
  form,
  isVisible,
  isSubmit,
  handleShow,
  handleHide,
  handleSave,
  handleEdit,
}) {
  return (
    <>
      {isVisible ? (
        <form onSubmit={isSubmit ? handleEdit : handleSave}>
          {isSubmit ? (
            <>
              <GeneralData form={form} isSubmit={isSubmit} />
              <button type="submit">Edit</button>
            </>
          ) : (
            <>
              <GeneralData form={form} isSubmit={isSubmit} />
              <button type="submit">Save</button>
            </>
          )}
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
