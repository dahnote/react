import { useState } from 'react';
import './App.css';

const InputBox = ({ inpuText, handleChange }) => {
  console.log(inpuText);
  return (
    <>
      <input
        type="text"
        name="inpuText"
        value={inpuText}
        onChange={(e) => {
          handleChange(e);
        }}
      />
    </>
  );
};

const api = 'https://api.unsplash.com/search/photos/';
const accessKey = 'nvaxn5gToEy_rr8KeWjNIhO3w2-04h8cskD1CNoKO0A';

function App() {
  // let [arrayValue, setarrayValue] = useState([1, 2, 3]);

  // const handlePop = () => {
  //   let value = arrayValue;
  //   value.pop();
  //   console.log(value);
  //   setarrayValue([...value]);
  // };

  // const handleAdd = () => {
  //   let value = arrayValue;
  //   let num = value.length + 1;
  //   value.push(num);
  //   setarrayValue([...value]);
  // };
  let [inpuText, setinpuText] = useState('');
  const handleChange = (e) => {
    console.log(e.target.value);
    setinpuText(e.target.value);
  };

  return (
    <>
      {
        /* <button type="button" onClick={() => handlePop()}>
        pop
      </button>
      <button type="button" onClick={() => handleAdd()}>
        add
      </button>
      <ul>
        {arrayValue.map((i) => {
          return <li key={i}>{i}</li>;
        })}
      </ul> */
        <InputBox text={inpuText} handleChange={handleChange} />
      }
    </>
  );
}

export default App;
