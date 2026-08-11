import "../styles/DisplayCV.css";

export default function DisplayCV({ name, email, phone }) {
  return (
    <section className="resume">
      <h1>Resume</h1>
      <div>
        <p>Name: {name}</p>
        <p>Email: {email}</p>
        <p>Phone: {phone}</p>
      </div>
    </section>
  );
}
