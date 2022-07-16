import { useState, useEffect } from 'react';
import './App.css'
import './reset.css'
// npm install @mui/material @emotion/react @emotion/styled 実行
import Button from '@mui/material/Button';

function App() {
  const getData =() => {
    const data = localStorage.getItem("test");
    if(data) {
      return JSON.parse(data);
    } else{
      return[];
    }
  };

 
  // 登録されるデータを保持するuseState
  const [data, setData] = useState(getData);

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


    const allDelete =() => {
      localStorage.clear();  
   };

  // const handleDelete =() => {
  //   localStorage.removeItem(("test") => item.index !=index);
  // };

  // const handleDelete = (id) => {
  //   /* 現在のタスクを削除する。 */
  //   setTaskList(taskList.filter((task) => task.id !== id));
  // };


  return (
    <div className="App">

    {/* <section id="contact"> */}
          <div className="course-wrapper">
            <h2 className="text-center contact__title">Contact</h2>
            <h3 className="text-center contact__text">説明会お申し込み・お問い合わせ</h3>
            <p className="text-center contact__smalltext">ぜひ1度、足を運んでみませんか。説明会は随時開催中。</p>
            <p className="text-center contact__smalltext">その他、お問い合わせもお気軽にどうぞ。お待ちしております。</p>
            <p className="text-center contact__smalltext">※チーズアカデミーは実際には存在しません。</p>
            <p className="text-center contact__smalltext bottom">間違っても問い合わせしないようお願いいたします。</p>
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
       {/* </section> */}



      {/* dataというuseStateの塊を、es6のmapというおまじないを使って表示しています */}
      {/* itemは任意で決める、a,でもよい */}
      <h3 className="text-center contact__text">お問い合わせ一覧</h3>
      {data.map((item, index) => (
        <div key={index}>
          {/* <p>タイトル：{item.title}</p> */}
          {/* <p>追加したもの：{item.email}</p> */}
          {/* <p>{item.name}</p>
          <p>{item.kana}</p>
          <p>{item.email}</p>
          <p>{item.cue}</p>
          <p>{item.reason}</p>
          <p>{item.detail}</p> */}
          
          {/* <Button type="remove" variant="contained" onClick={()=>handleDelete()}>削除</Button> */}

          
          <dl className="contact__list">
              <dt className="contact__dt">名前</dt>
              <dd className="contact__dd">{item.name}</dd>
              <dt className="contact__dt">カナ</dt>
              <dd className="contact__dd">{item.kana}</dd>
              <dt className="contact__dt">メールアドレス</dt>
              <dd className="contact__dd">{item.email}</dd>
              <dt className="contact__dt trigger">チーズアカデミーを知ったきっかけ</dt>
              <dd className="contact__dd">{item.cue}</dd>
              <dt className="contact__dt">志望動機</dt>
              <dd className="contact__dd">{item.reason}</dd>
              <dt className="contact__dt bottom">詳細</dt>
              <dd className="contact__dd bottom">{item.detail}</dd>
          </dl>
          <div className="btn-submit">
          <Button onClick={()=>handleDelete(index)}>削除</Button>
          </div>
        </div>
      ))}
       
       <form onSubmit={allDelete} className="btn-submit">
        <Button type="submit" variant="contained">クリア</Button>
       </form>





      {/* ここから書いていきます */}
    </div>
  );
}

export default App
