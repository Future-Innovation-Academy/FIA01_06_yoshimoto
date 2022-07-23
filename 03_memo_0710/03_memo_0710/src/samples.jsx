import { useState, useEffect } from "react";
import "./App.css";

const APP_KEY = "test";

function App() {
  const getData = () => {
    const data = localStorage.getItem("test");
    if (data) {
      return JSON.parse(data);
    } else {
      return [];
    }
  };

  // 登録されるデータを保持するuseState
  const [data, setData] = useState(getData);

  // タイトル入力欄のテキスト情報を保持するuseState
  const [title, setTitle] = useState("");
  const [title2, setTitle2] = useState("");

  // ★チェックボックスの値は配列で保持する
  const [val, setVal] = useState([]);

  // 送信を押したら登録
  const handleAddSubmit = (e) => {
    // フォームタグは送信の際に画面がリロードされるのでそれをさせないおまじないが以下
    e.preventDefault();

    // データを登録するための「塊＝オブジェクト」を作る
    // ★プッシュするデータにチェックボックスの値を追加
    let pushData = {
      title,
      title2,
      checkBox:[...val]
    };

    setData([...data, pushData]);
    setTitle("");
    setTitle2("");
    // ★チェックボックスの値を初期化(空配列を入れます)
    setVal([]);
  };

  // ★チェックボックス関連
  // localStrageに送るデータのセットはformのonSubmitで行われますが
  // チェックボックスの場合は checked=true が付いているデータのみセットされます
  // handleChangeはチェックボックスに check=true (もしくはfalse)をセットする処理です
  const handleChange = e => {
    // チェック済みのチェックボックスがクリックされたとき
    if (val.includes(e.target.value)) {
      setVal(val.filter(item => item !== e.target.value));
    } else {
    // 未チェックのチェックボックスがクリックされた場合
      setVal([...val, e.target.value]);
    }
  };

  // point! useStateの[data]に変更があったらlocalStrageを更新する
  useEffect(() => {
    localStorage.setItem("test", JSON.stringify(data));
  }, [data]);

  return (
    <div className="App">
      <h1>localStrage</h1>

      <form onSubmit={handleAddSubmit}>
        {/* title */}
        <input
          type="text"
          required
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        {/* title2 */}
        <input
          type="text"
          required
          onChange={(e) => setTitle2(e.target.value)}
          value={title2}
        />

      {/* ★checkedでチェック判定を行う */}
      <label>
        <input
          type="checkbox"
          value="js"
          onChange={handleChange}
          checked={val.includes('js')}
        />
        JavaScript
      </label>
      <label>
        <input
          type="checkbox"
          value="python"
          onChange={handleChange}
          checked={val.includes('python')}
        />
        Python
      </label>
      <label>
        <input
          type="checkbox"
          value="java"
          onChange={handleChange}
          checked={val.includes('java')}
        />
        Java
      </label>
      <p>選択値：{val.join(",")}</p>
        {/* 送信ボタン */}
        <button type="submit">送信</button>
      </form>

      {/* ★チェックボックスの値の表示 */}
      {data.map((item, index) => (
        <div key={index}>
          <p>{item.title}</p>
          <p>{item.title2}</p>
          <p>{item.checkBox.join(",")}</p>
        </div>
      ))}
    </div>
  );
}

export default App;