import { useState } from 'react';
import './App.css';

function App() {
  let [arrayValue, setarrayValue] = useState([1, 2, 3]);
  const handlePop = () => {
    let value = arrayValue;
    value.pop();
    console.log(value);
    setarrayValue([...value]);
  };

  const handleAdd = () => {
    let value = arrayValue;
    let num = value.length + 1;
    value.push(num);
    setarrayValue([...value]);
  };

  return (
    <>
      <button type="button" onClick={() => handlePop()}>
        pop
      </button>
      <button type="button" onClick={() => handleAdd()}>
        add
      </button>

      {/* <div>{arrayValue}</div> */}
      <ul>
        {arrayValue.map((i) => {
          return <li key={i}>{i}</li>;
        })}
      </ul>
      {/* <input
        type="text"
        name="name"
        value={inputValue.name}
        onChange={(e) => {
          handleChange(e);
        }}
      /> */}
    </>
  );
}

export default App;
