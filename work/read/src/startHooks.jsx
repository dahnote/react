import { useState } from 'react';
import './App.css';

function App() {
  let [num, setnum] = useState(0);
  const handleClick = () => {
    let value = num;
    value += 1;
    setnum(value);
  };
  return (
    <>
      <div>{num}</div>
      <button type="button" onClick={() => handleClick()}>
        ++
      </button>
    </>
  );
}

export default App;
