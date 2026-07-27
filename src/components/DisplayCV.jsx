import "../styles/DisplayCV.css";

export default function DisplayCV({ isVisible }) {
  return <>{isVisible && <p>Whatever</p>}</>;
}
