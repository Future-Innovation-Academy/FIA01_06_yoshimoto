import "./styles.css";
import { useState } from "react";

const Img = "";

export default function App() {
  // const test = () => {
  //   alert(1);
  // };
  const henka = () => {
    setA(!a);
  };

  const [a, setA] = useState(true);
  //a =1が入っています

  return (
    <div className="App">
      <h1>{a}</h1>
      <button onClick={henka}>押したらどうなる</button>
      <hr />
      {a === true && <h1>1が出てきます</h1>}
      {a === false && <h1>2が出てきます</h1>}
    </div>
  );
}