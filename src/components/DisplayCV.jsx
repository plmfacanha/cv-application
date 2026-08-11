import "../styles/DisplayCV.css";

export default function DisplayCV({ form }) {
  return (
    <section className="resume">
      <h1>Resume</h1>
      <div>
        <p>Name: {form.name}</p>
        <p>Email: {form.email}</p>
        <p>Phone: {form.phone}</p>
      </div>
    </section>
  );
}
