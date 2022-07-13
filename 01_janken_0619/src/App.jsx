import { useState } from 'react'
// import logo from './gu.png' 
import gu from './gu.png'
import choki from './choki.png'
import pa from './pa.png'
import question from './question.png'

import './App.css'

function App() {
  // 乱数を作成(1～3)
  const num = () => Math.floor(Math.random() * 3) + 1
  // rが元の箱、setRが更新後の箱、rの中にはnumが入っている
  const [r, setR] = useState(num());
  // コンピューターの出し手
  const [comp, setComp] = useState()
  // 勝敗結果
  const [kekka, setKekka] = useState("ここに入る")
  // グーボタン 
  const [logo, setLogo] = useState(question)
  const gu_btn = () => {
    setR(num());
    if(r==1) {
      return(
      <>
      {setLogo(gu)}
      <p>{setComp("グー")}</p>  
      <p>{setKekka("あいこ")}</p>
      </>
      )
      }
    if(r==2){
      return(
      <>
      {setLogo(choki)}
      <p>{setComp("チョキ")}</p>  
      <p>{setKekka("勝ち")}</p>
      </>
      )
    }
    if(r==3){
      return(
      <>
      {setLogo(pa)}
      <p>{setComp("パー")}</p> 
      <p>{setKekka("負け")}</p>
      </>
      )
    }
  }
  //　チョキボタン 
  const choki_btn = () => {
    setR(num());
    if(r==1) {
      return(
      <>
      {setLogo(gu)}
      <p>{setComp("グー")}</p> 
      <p>{setKekka("負け")}</p>
      </>
      )
      }
    if(r==2){
      return(
      <>
      {setLogo(choki)}
      <p>{setComp("チョキ")}</p> 
      <p>{setKekka("あいこ")}</p>
      </>
      )
      }
    if(r==3){
      return(
      <>
      {setLogo(pa)}
      <p>{setComp("パー")}</p> 
      <p>{setKekka("勝ち")}</p>
      </>
      )
    }
  }
  
  // パーボタン
  const pa_btn = () => {
    setR(num());
    if(r==1) {
      return(
      <>
      {setLogo(gu)}
      <p>{setComp("グー")}</p> 
      <p>{setKekka("勝ち")}</p>
      </>
      )
      }
    if(r==2){
      return(
      <>
      {setLogo(choki)}
      <p>{setComp("チョキ")}</p> 
      <p>{setKekka("負け")}</p>
      </>
      )
    }
    if(r==3){
      return(
      <>
      {setLogo(pa)}
      <p>{setComp("パー")}</p> 
      <p>{setKekka("あいこ")}</p>
      </>
      )
    }
  }
  
  return (
    <div className="App">
      <header className="App-header">
      <h1>じゃんけん</h1>
      
      
      <div>
      {/* クリックイベント*/}
      <button onClick ={gu_btn}>グー</button>
      <button onClick ={choki_btn}>チョキ</button>
      <button onClick ={pa_btn}>パー</button>
      </div>
      
      <p>コンピューターの出した手は？
        {/* {comp} */}
     
      <div>
       {/* グルグル画像 */}
      <img src={logo} className="App-logo" alt="logo" />
      </div>


      </p>  
      <p>勝敗！
        {kekka}
      </p>
      

      </header>
    </div>
  )

}

export default App
