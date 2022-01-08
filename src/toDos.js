import { useState, useEffect } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);

  const onChange = (event) => {
    setToDo(event.target.value);
  }
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDos((current) => [toDo, ...toDos]); // unpack is JS
    setToDo("");
  }
  return <div>
    <h1>You have {toDos.length} things to do.</h1>
    <form onSubmit={onSubmit}>
      <input onChange={onChange} value={toDo} type="text" placeholder="Write thing to do" />
      <button>Add</button>
    </form>
    <hr />
    <ul>
      {toDos.map((item, index) => <li key={index}>{item}</li>)}
    </ul>

  </div>
}

export default App;
