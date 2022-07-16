import { useState, useEffect } from 'react';
import './App.css'
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
  const [title, setTitle] =useState("");

  // 追加 input(ここの名前は自分で決めてOK)  
  const [email, setEmail] = useState("");

  // 送信を押したら登録
  const handleAddSubmit = (e) => {
  // フォームタグは送信の際に画面がリロードされるのでそれをさせないおまじないが以下
  e.preventDefault();

  //　データを登録するための「塊＝オブジェクト」を作る
  let pushData = {
    title,
    email, // 追加　inputのuseState
  };
  setData([...data, pushData]);
  setTitle("");
  setEmail("");
  };


  // point! useStateの[data]に変更があったら(リロードの度に）localStrageを更新する
  useEffect(() => {
    localStorage.setItem("test", JSON.stringify(data));
  }, [data]);

  const handleDelete =() => {
    localStorage.removeItem("test");
  };

  // const handleDelete = (id) => {
  //   /* 現在のタスクを削除する。 */
  //   setTaskList(taskList.filter((task) => task.id !== id));
  // };


  return (
    <div className="App">
      {/* ここから書いていきます */}
      <h1>localStrage</h1>
      {/*  */}
      <form onSubmit={handleAddSubmit}>
        {/* title */}
        <label>タイトル入力</label>
        <input
         type="text"
         required
         onChange={(e) => setTitle(e.target.value)}
         value={title}
         />
        <hr />
        {/* email */}
        <label>追加したinput</label>
        <input
         type="text"
         required
         onChange={(e) => setEmail(e.target.value)}
         value={email}
         />

        <hr />
        {/* 送信ボタン */}
        {/* <button type="submit">送信</button> */}
        <Button type="submit" variant="contained">送信</Button>
        
        
      </form>

      {/* dataというuseStateの塊を、es6のmapというおまじないを使って表示しています */}
      {/* itemは任意で決める、a,でもよい */}
      {data.map((item, index) => (
        <div key={index}>
          <p>タイトル：{item.title}</p>
          <p>追加したもの：{item.email}</p>
          <Button onClick={()=>handleDelete()}>削除</Button>
          {/* <Button type="remove" variant="contained" onClick={()=>handleDelete()}>削除</Button> */}
        </div>
      ))}

      {/* ここから書いていきます */}
    </div>
  );
}

export default App
