import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';

const InputBox = ({ inpuText, handleChange }) => {
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
  let [inpuText, setinpuText] = useState('animal');
  const handleChange = (e) => {
    setinpuText(e.target.value);
  };

  const handleSearch = () => {
    console.log(inpuText);
  };

  useEffect(() => {
    const getApi = async () => {
      const res = await axios.get(
        `${api}?client_id=${accessKey}&query=${inpuText}`
      );
      console.log(res);
    };
    getApi();
  }, []);

  return (
    <>
      {inpuText}
      <InputBox text={inpuText} handleChange={handleChange} />
      {
        <button type="button" onClick={() => handleSearch()}>
          search
        </button>
        /*<button type="button" onClick={() => handleAdd()}>
        add
      </button>
      <ul>
        {arrayValue.map((i) => {
          return <li key={i}>{i}</li>;
        })}
      </ul> */
        // <InputBox text={inpuText} handleChange={handleChange} />
      }
    </>
  );
}

export default App;
