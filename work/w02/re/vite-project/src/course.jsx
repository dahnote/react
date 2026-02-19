import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

const API_BASE = "https://ec-course-api.hexschool.io/v2"

// 請自行替換 API_PATH
const API_PATH = ""

function App() {
  const [count, setCount] = useState(0);

  const [data, setDATA] = useState({
    username: "",
    password: "",
  });
  // const [products, setProducts] = useState([]);
  // const [, setTempProduct] = useState(null);
  // function handleSubmit (){
  // }
  function handleInputChange (e){
    console.log(e.target.value)
    const {name,value}=e.target
    setDATA({
      ...data,
      [name]:value
    })
  }
  function login(){

  }
  return (
    <>
      {JSON.stringify(data)}
      <div>
        <input type="email" id="email"
        name="username"
        onChange={(e)=>{handleInputChange(e)}}/>
        <input
          type="password"
          id="password"
          name="password"
          onChange={(e)=>{handleInputChange(e)}}
        ></input>  
        <button type="button" id="login" onClick={()=>login()}> 登入</button>
        </div>
    </>
  );
}




export default App
