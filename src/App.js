import { useState, useEffect } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const onClick = () => setCounter((current) => current + 1);
  console.log("I'm running all the time.")
  const runOnlyOnce = () => console.log("running~");
  useEffect(runOnlyOnce, []);
  // useEffect() makes code executed only once when Component rendered.

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={onClick}>Click Me</button>
    </div>
  );
}

export default App;
