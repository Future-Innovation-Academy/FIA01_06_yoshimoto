import { useState } from 'react'
import logo from './gu.png' 

import './App.css'

function App() {
  // 乱数を作成(1～3)
  const num = () => Math.floor(Math.random() * 3) + 1
  // rが元の箱、setRが更新後の箱、rの中にはnumが入っている
  const [r, setR] = useState(num());
  // クリックイベントでsetRに乱数結果を代入?
  const [kekka, setKekka] = useState("ここに入る")
  const result = () => {
    if(r==1) return(
      "グー"
    )
    if(r==2) return(
      "チョキ"
    )
    if(r==3) return(
      "パー"
    )
  }
  
  const gu_btn = () => {
    setR(num());
    if(r==1) {
      return(
      <p>{setKekka("あいこ")}</p>
      )
      }
    if(r==2){
      return(
      <p>{setKekka("勝ち")}</p>
      )
    }
    if(r==3){
      return(
      <p>{setKekka("負け")}</p>
      )
    }
  }

  const choki_btn = () => {
    setR(num());
    if(r==1) {
      return(
      <p>{setKekka("負け")}</p>
      )
      }
    if(r==2){
      return(
      <p>{setKekka("あいこ")}</p>
      )
    }
    if(r==3){
      return(
      <p>{setKekka("勝ち")}</p>
      )
    }
  }
    
  const pa_btn = () => {
    setR(num());
    if(r==1) {
      return(
      <p>{setKekka("勝ち")}</p>
      )
      }
    if(r==2){
      return(
      <p>{setKekka("負け")}</p>
      )
    }
    if(r==3){
      return(
      <p>{setKekka("あいこ")}</p>
      )
    }
  }
  
  return (
    <div className="App">
      <header className="App-header">
 
      <img src={logo} className="App-logo" alt="logo" />
      <h1>じゃんけん</h1>
      <div>
      {/* クリックするとhenka作動 */}
      <button onClick ={gu_btn}>グー</button>
      <button onClick ={choki_btn}>チョキ</button>
      <button onClick ={pa_btn}>パー</button>
      
      {/* <button onClick ={aite}>結果</button> */}
      {/* 以下コードだと1行にまとめられる */}
      {/* <button onClick ={() => {setR(num())}>グー</button> */}
      </div>
      
      <p>コンピューターの出した手は？
        {result()}
      </p>  
      <p>勝敗！
        {kekka}
      </p>
      

      </header>
    </div>
  )

}

export default App
