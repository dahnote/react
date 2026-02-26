import { useState } from 'react';
import './App.css';

function App() {
  let [inputValue, setinputValue] = useState({ name: '' });
  const handleChange = (e) => {
    // console.log(e.target.value);
    // let value = inputValue;
    const { name, value } = e.target;

    setinputValue({ ...inputValue, [name]: value });
  };
  return (
    <>
      {/* <div>{num}</div>
      <button type="button" onClick={() => handleClick()}>
        ++
      </button> */}
      <div>{JSON.stringify(inputValue)}</div>
      <input
        type="text"
        name="name"
        value={inputValue.name}
        onChange={(e) => {
          handleChange(e);
        }}
      />
    </>
  );
}

export default App;
