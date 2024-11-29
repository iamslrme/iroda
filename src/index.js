import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {const [number, setNumber] = useState(0);

  return (
    <div>
      <button onClick={() => setNumber((prev) => prev + 1)}>Click</button>
      <p>Count: {number}</p>
    </div>
  );
}

export default App;



