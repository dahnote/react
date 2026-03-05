import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';

const InputBox = ({ inpuText, handleChange }) => {
  console.log(inpuText);
  return (
    <>
      {inpuText}
      <input
        type="text"
        name="inpuText"
        value={inpuText}
        onChange={handleChange}
      />
    </>
  );
};
const Card = ({ item }) => {
  return (
    <div key={item.id} className="col">
      <div className="card">
        <img
          src={item.urls.small}
          className="card-img-top"
          height="400px"
          alt=""
        />
      </div>
    </div>
  );
};
const api = 'https://api.unsplash.com/search/photos/';
const accessKey = 'nvaxn5gToEy_rr8KeWjNIhO3w2-04h8cskD1CNoKO0A';

function App() {
  const [inpuText, setinpuText] = useState('animal');
  const [jsonData, setJsonData] = useState([]);
  const handleChange = (e) => {
    console.log('29');
    setinpuText(e.target.value);
  };

  const handleSearch = () => {
    console.log(inpuText);
    // getApi();
  };
  // const getApi = async () => {
  //   let res = '';
  //   try {
  //     return res;
  //   } catch (err) {
  //     throw new Error(err);
  //   }
  // };
  useEffect(() => {
    (async () => {
      try {
        let res = await axios.get(
          `${api}?client_id=${accessKey}&query=${inpuText}`
        );
        console.log(res.data.results);
        setJsonData(res.data.results);
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);
  // const [filterString, setFilterString] = useState('animal');
  // const onSearchHandler = (e) => {
  //   setFilterString(e.target.value);
  // };
  return (
    <>
      <div className="row row-cols-2 g-3">
        {jsonData.map((item) => {
          console.log(item.id);
          return <Card item={item} />;
        })}
      </div>
      <InputBox inpuText={inpuText} handleChange={handleChange} />
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
