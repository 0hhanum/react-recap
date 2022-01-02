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
    console.log(toDos);
  }
  return <div>
    <form onSubmit={onSubmit}>
      <input onChange={onChange} value={toDo} type="text" placeholder="Write thing to do" />
      <button>Add</button>
    </form>
  </div>
}

export default App;
