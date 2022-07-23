import { useState, useEffect } from "react";
import "./App.css";
import "./reset.css";
// firebaseを使うために用意されているおまじないを読み込む
import {
  collection,
  query,
  onSnapshot,
  addDoc,
  QuerySnapshot,
  deleteDoc,
} from "firebase/firestore";
import { db, auth } from "./firebase"; //.envに書かれているfirebaseに接続するためのもの
import Add from "./Add";
import Statement from "./Statement";
import Inquiry from "./Inquiry";
// npm install @mui/material @emotion/react @emotion/styled 実行
import Button from '@mui/material/Button';

function App() {
  //1. useStateを準備して、データを取得できるようにする🤗
  const [data, setData] = useState([
    {
      id: "",
      name: "",
      kana: "",
      email: "",
      cue: "",
      // checkBox: [...reason],
      reason: "",
      detail: "",
    },
  ]);
  console.log(data, "useStateの箱の中身");

  //3. 登録用のuseStateを準備します🤗
  const [nameValue, setNameValue] = useState("");

  const [kanaValue, setKanaValue] = useState("");

  const [emailValue, setEmailValue] = useState("");

  const [cueValue, setCueValue] = useState("");

  const [selectValue, setSelectValue] = useState("");

  const [reasonValue, setReasonValue] = useState("");

  const [detailValue, setDetailValue] = useState("");


  // 2. useEffectを使って画面表示の際にfirebaseからデータを取得する
  useEffect(() => {
    //2.1 query=コレクション(firebaseのデータが入る箱のこと)
    const q = query(collection(db, "04_chat_0717")); //データにアクセス

    // 2.2
    const unsub = onSnapshot(q, (QuerySnapshot) => {
      setData(
        QuerySnapshot.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().name,
          kana: doc.data().kana,
          email: doc.data().email,
          cue: doc.data().cue,
          reason: doc.data().reason,
          detail: doc.data().detail,
        }))
      );
    });
    return () => unsub();
  }, []);


  // 4. inputのonChangeのイベントを記述🤗
  const handleInputChange = (e) => {
    console.log(e, "event");
    console.log(e.target, "event target");
    setNameValue(e.target.value);
  };

  const handleInputChange2 = (e) => {
    console.log(e, "event");
    console.log(e.target, "event target");
    setKanaValue(e.target.value);
  };

  const handleInputChange3 = (e) => {
    console.log(e, "event");
    console.log(e.target, "event target");
    setEmailValue(e.target.value);
  };

  const handleInputChange4 = (e) => {
    console.log(e, "event");
    console.log(e.target, "event target");
    setCueValue(e.target.value);
    setSelectValue(e.target.value);
  };

  // const handleInputChange5 = (e) => {
  //   console.log(e, "event");
  //   console.log(e.target, "event target");
  //   setReasonValue(e.target.value);
  // };

  // ★selectbox複数選択パターン（要確認）
  const handleInputChange5 = (e) => {
    // console.log(e, "event");
    // console.log(e.target, "event target");
    if (reasonValue.includes(e.target.value)) {
      setReasonValue(reasonValue.filter(item => item !== e.target.value));
    } else {
      setReasonValue([...reasonValue, e.target.value]);
    }
  };

  // const handleChange = e => {
  //   if (reason.includes(e.target.value)) {
  //     setReason(reason.filter(item => item !== e.target.value));
  //   } else {
  //     setReason([...reason, e.target.value]);
  //   }
  // };


  const handleInputChange6 = (e) => {
    console.log(e, "event");
    console.log(e.target, "event target");
    setDetailValue(e.target.value);
  };




  //5. 送信の処理を記述＝送信のボタンが押されたら登録の処理を実行する🤗
  const addData = async () => {
    // 処理を記述していきます🤗
    // alert(1); 記述後、送信ボタンを押す→画面に変化があればコメントアウトしましょう🤗

    // firebaseへの登録の処理
    await addDoc(
      collection(db, "04_chat_0717"), //場所どこ？
      {
        name: nameValue,
        kana: kanaValue,
        email: emailValue,
        cue: cueValue,
        reason: reasonValue,
        detail: detailValue,
      }
    );

    // 文字を空にします🤗
    setNameValue("");
    setKanaValue("");
    setEmailValue("");

    setCueValue("");
    // selectboxは配列表示？
    setReasonValue([]);
    setDetailValue("");


  };

  // 全部削除（未実装）
  const allDelete = async () => {
    await deleteDoc(
      collection(db, "04_chat_0717"),
      {
        name: nameValue,
        kana: kanaValue,
        email: emailValue,
        cue: cueValue,
        reason: reasonValue,
        detail: detailValue,
      }
    );
  };

  // 部分削除（未実装）
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };


  return (

    <div className="App">

      <Statement />

      <Add
        addData={addData}

        nameValue={nameValue}
        kanaValue={kanaValue}
        emailValue={emailValue}
        cueValue={cueValue}
        seleclValue={selectValue}
        reasonValue={reasonValue}
        detailValue={detailValue}

        handleInputChange={handleInputChange}
        handleInputChange2={handleInputChange2}
        handleInputChange3={handleInputChange3}
        handleInputChange4={handleInputChange4}
        handleInputChange5={handleInputChange5}
        handleInputChange6={handleInputChange6}

        Button={Button}
      />

      <Inquiry
        data={data}
        allDelete={allDelete}
        handleDelete={handleDelete}
        Button={Button}

      />



    </div>
  );
};

export default App;