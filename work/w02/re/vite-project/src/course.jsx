import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
const API_BASE = import.meta.env.VITE_API_BASE
// console.log(import.meta.env.VITE_API_BASE)
// console.log(env.API_BASE)
// const API_PATH = ""

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
  async function login(){
    
    try {
      const res = await axios.post(`${API_BASE}/admin/signin`,data)
      console.log(res)
    } catch (error) {
      console.log(error)
    }
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
