import { useState } from 'react';
import './App.css';

function App() {
  let [arrayValue, setarrayValue] = useState([1, 2, 3]);
  const handleChange = (e) => {
    // console.log(e.target.value);
    // let value = inputValue;
    // const { name, value } = e.target;
    // setarrayValue({ ...inputValue, [name]: value });
    // setarrayValue
  };
  return (
    <>
      {
        <button type="button" onClick={() => handleChange()}>
          pop
        </button>
      }
      <div>{arrayValue}</div>
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
