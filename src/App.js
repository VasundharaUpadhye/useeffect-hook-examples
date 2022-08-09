import "./App.css";
import { useState } from "react";

function App() {
  const [isTest, setIstest] = useState(true);

  return (
    <div>
      <p>{isTest ? "I am Test1" : "I am Test2"}</p>
    </div>
  );
}

export default App;
