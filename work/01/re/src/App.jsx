import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
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
          <tr>
            <td>綠色馬卡龍</td>
            <td>120</td>
            <td>3</td>
            <td>$ 120</td>
          </tr>
          <tr>
            <td>粉係馬卡龍</td>
            <td>120</td>
            <td>2</td>
            <td>$ 240</td>
          </tr>
          <tr>
            <td>甜蜜左擁右抱</td>
            <td>200</td>
            <td>7</td>
            <td>$ 1400</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colspan="3">總計：</td>
            <td>NT$ 1760</td>
          </tr>
        </tfoot>
      </table>
    </>
  );
}

export default App;
