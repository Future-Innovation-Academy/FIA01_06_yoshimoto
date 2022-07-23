import { useState, useEffect } from 'react';
import './App.css'
import './reset.css'
// npm install @mui/material @emotion/react @emotion/styled 実行
// import Button from '@mui/material/Button';
// conponentを作成
import { Title } from "./components/Title";
import { InputForm } from "./components/InputForm";
import { Inquiry } from "./components/Inquiry";

function App() {
 
  const getData =() => {
    const data = localStorage.getItem("test");
    if(data) {
      return JSON.parse(data);
    } else{
      return[];
    }
  };

  const [data, setData] = useState(getData);
  




  return (
    <div className="App">
      <Title />
      {/* inputForm, inquiryにdata,setDataを渡す */}
      {/* ↓inputFormのコンポーネント */}
      {/* <InputForm /> */}
      
      <InputForm data={data} setData={setData} />
      {/* ↓inquiryのコンポーネント */}
      {/* <Inquiry /> */}
      {/* <Inquiry data={data} setData={setData} /> */}
    </div>
      
  );
}

export default App
