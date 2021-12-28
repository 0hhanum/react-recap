import { useState, useEffect } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");

  const onClick = () => setCounter((current) => current + 1);
  const onChange = (event) => {
    setKeyword(event.target.value);
  }

  useEffect(() => console.log("I run only once"), []);
  // useEffect() makes code executed only once when Component rendered.
  // It run when items in lists are changed.
  useEffect(() => console.log("I run when 'keyword' changes"), [keyword]);
  useEffect(() => console.log("I run when counter changes"), [counter]);
  useEffect(() => console.log("I run when keyword & counter changes"), [keyword, counter]);
  return (
    <div>
      <input value={keyword} onChange={onChange} type="text" placeholder="Search by.."></input>
      <h1>{counter}</h1>
      <button onClick={onClick}>Click Me</button>
    </div>
  );
}

export default App;
