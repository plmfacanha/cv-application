import "../styles/DisplayCV.css";
import { useState } from "react";

export default function DisplayCV() {
  const [isVisible, setVisible] = useState(false);

  return (
    <>
      {isVisible && <p> This element shows when isVisible is set to true</p>}
      <button onClick={() => setVisible(!isVisible)}>
        Click here to show this page section
      </button>
    </>
  );
}
