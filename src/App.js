import { useState, useEffect } from "react";

function Hello() {
  useEffect(() => {
    console.log("Created");
    return () => console.log("I run when Components destroyed")
  }, [])
  // if  deps is empty, it means function run only once when it rendered.
  // The first arg of useEffect is function. And the function returned from first args(function) run when components destroyed.
  return <h1>Hello!</h1>
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => {
    setShowing((current) => !current);
  }
  return <div>
    <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    {showing ? <Hello /> : null}
  </div>
}

export default App;
