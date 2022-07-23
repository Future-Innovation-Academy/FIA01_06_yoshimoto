import React from 'react';
import { useState , useEffect } from "react";

// npm install @mui/material @emotion/react @emotion/styled 実行
import Button from '@mui/material/Button';
// import { Inquiry } from "./Inquiry";

export const InputForm = (data, setData) => {

  // タイトル入力欄のテキスト情報を保持するuseState
  const [name, setName] =useState("");

  const [kana, setKana] =useState("");

  const [email, setEmail] = useState("");

  const [cue, setCue] = useState("");

  const [reason, setReason] =useState("");

  const [detail, setDetail] =useState("");

  // 送信を押したら登録
  const handleAddSubmit = (e) => {
  // フォームタグは送信の際に画面がリロードされるのでそれをさせないおまじないが以下
  e.preventDefault();

  //　データを登録するための「塊＝オブジェクト」を作る
  let pushData = {
    name,
    kana,
    email, 
    cue,
    reason,
    detail,// 追加　inputのuseState
  };

  setData([...data, pushData]);
  setName("");
  setKana("");
  setEmail("");
  setCue("");
  setReason("");
  setDetail("");
  };

  // point! useStateの[data]に変更があったら(リロードの度に）localStrageを更新する
  useEffect(() => {
    localStorage.setItem("test", JSON.stringify(data));
  }, [data]);



  return (
    
    <div className="course-wrapper">
    {/* <form action="#" method="POST"> */}
    <form onSubmit={handleAddSubmit}>
      <dl className="contact__list">
          <dt className="contact__dt">名前</dt>
          <dd className="contact__dd">
            <input 
            type="text" 
            // name="name" 
            // id="name" 
            className="form-parts" 
            required
            onChange={(e) => setName(e.target.value)}
            value={name}
            />
          </dd>
          <dt className="contact__dt">カナ</dt>
          <dd className="contact__dd">
            <input 
            type="text" 
            // name="name" 
            // id="name" 
            className="form-parts" 
            required
            onChange={(e) => setKana(e.target.value)}
            value={kana}
            />
            </dd>
          <dt className="contact__dt">メールアドレス</dt>
          <dd className="contact__dd">
            <input 
            type="email" 
            // name="email" 
            // id="email" 
            className="form-parts" 
            required
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            /></dd>
          <dt className="contact__dt trigger">チーズアカデミーを知ったきっかけ</dt>
          <dd className="contact__dd">
            <select 
            name="selectbox" 
            className="form-parts"
            required
            onChange={(e) => setCue(e.target.value)} >
                <option value="#"></option>
                <option value="google検索">google検索</option>
                <option value="SNS">SNS</option>
                <option value="紹介">紹介</option>
                <option value="たまたま通りかかった">たまたま通りかかった</option>
                <option value="その他">その他</option>
            </select>
          </dd>
          <dt className="contact__dt check-radio">志望動機</dt>
          <dd className="contact__dd contact__radio">
              <label for="startup" className="form-label">
                <input 
                type="checkbox" 
                name="kind" 
                id="startup" 
                onChange={(e) => setReason(e.target.value)}
                value="起業をしたい" />
                起業をしたい
              </label>
              <label for="jobchange" className="form-label">
                <input 
                type="checkbox" 
                name="kind" 
                id="jobchange" 
                onChange={(e) => setReason(e.target.value)}
                value="チーズ系起業に就職・転職したい" />
                チーズ系企業に就職・転職したい
              </label>
              <label for="skillup" className="form-label">
                <input 
                type="checkbox" 
                name="kind" 
                id="skillup"
                onChange={(e) => setReason(e.target.value)} 
                value="チーズと関わる仕事をしており、仕事に生かしたい" />
                チーズと関わる仕事をしており、仕事に生かしたい
              </label>
              <label for="education" className="form-label">
                <input 
                type="checkbox" 
                name="kind" 
                id="education"
                onChange={(e) => setReason(e.target.value)} 
                value="チーズの教養を身に着けたい" />
                チーズの教養を身に着けたい
              </label>
          </dd>
          <dt className="contact__dt bottom">詳細</dt>
          <dd className="contact__dd bottom">
              <textarea 
              // name="detail" 
              // id="detail" 
              cols="30" 
              rows="10" 
              className="form-parts"
              required
              onChange={(e) => setDetail(e.target.value)}
              value={detail}
              >
              </textarea>
          </dd>
      </dl>
        <div className="btn-submit">
        <Button type="submit" variant="contained">送信</Button>
        {/* <input type="submit" value="送信" className="btn btn-submit" /> */}
        </div>
    </form>


    </div> 

    

  );
  
};


