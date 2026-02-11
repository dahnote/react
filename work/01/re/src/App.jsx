import { useState } from 'react';
import './App.css';

function App() {
  const [apiData, setApiData] = useState([
    {
      title: '綠色馬卡龍',
      price: 120,
      amount: 3,
    },
    {
      title: '綠色馬卡龍2',
      price: 1202,
      amount: 23,
    },
    {
      title: '綠色馬卡龍3',
      price: 1203,
      amount: 33,
    },
    {
      title: '綠色馬卡龍4',
      price: 1204,
      amount: 34,
    },
  ]);
  const [state, setState] = useState(1);
  const [tempData, setTempData] = useState({});
  function AddState(num) {
    setState(state + num);
  }
  function removeItem(title) {
    const index = apiData.findIndex((item) => {
      return item.title === title;
    });
    console.log(index);
    // setData(data.splice(index, 1));
    let _data = [...apiData];
    _data.splice(index, 1);
    console.log(_data);
    // data.splice(index, 1);
    // setData(data);
    setApiData(_data);
  }
  return (
    <>
      <div>
        {state}
        <table>
          <thead>
            <tr>
              <th width="200">品名</th>
              <th>單價</th>
              <th>數量</th>
              <th width="150">小計</th>
            </tr>
          </thead>
          <tbody>
            {apiData.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.title}</td>
                  <td>{item.price}</td>
                  <td>{item.amount}</td>
                  <td>
                    {item.price * item.amount}
                    <button
                      type="button"
                      onClick={() => {
                        setTempData(item);
                      }}
                    >
                      選
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        removeItem(item.title);
                      }}
                    >
                      刪除
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="3">總計：</td>
              <td>NT$ 1760</td>
            </tr>
          </tfoot>
        </table>
        <button
          type="button"
          onClick={() => {
            setState(state + 1);
          }}
        >
          編輯+1
        </button>
        <button
          type="button"
          onClick={() => {
            AddState(2);
          }}
        >
          編輯+2
        </button>
        <div>{tempData.title}</div>
      </div>
    </>
  );
}

export default App;
