import React from "react";

const Add = ({
  addData,
  nameValue,
  kanaValue,
  emailValue,
  cueValue,
  reasonValue,
  detailValue,

  // allDelete,
  // handleDelete,

  handleInputChange,
  handleInputChange2,
  handleInputChange3,
  handleInputChange4,
  handleInputChange5,
  handleInputChange6,

  Button,

}) => {

  return (


    <div className="APP course-wrapper">
      <p>{kanaValue}</p>
      <p>{detailValue}</p>
      <form>
        {/*◆Formタグに"onSubmit"、Buttonタグに"type="submit"としたら{addData}が作動しない  */}
        {/* <form onSubmit={addData}> */}

        {/* ★名前 */}
        <dl className="contact__list">
          <dt className="contact__dt">名前</dt>
          <dd className="contact__dd">
            <input
              type="text"
              className="form-parts"
              required
              value={nameValue}
              onChange={handleInputChange}
            />
          </dd>

          {/* ★カナ */}
          <dt className="contact__dt">カナ</dt>
          <dd className="contact__dd">
            <input
              type="text"
              className="form-parts"
              required
              value={kanaValue}
              onChange={handleInputChange2}
            />
          </dd>

          {/* ★メールアドレス */}
          <dt className="contact__dt">メールアドレス</dt>
          <dd className="contact__dd">
            <input
              type="email"
              className="form-parts"
              required
              value={emailValue}
              onChange={handleInputChange3}
            /></dd>

          {/* ★きっかけ selectbox */}
          <dt className="contact__dt trigger">チーズアカデミーを知ったきっかけ</dt>
          <dd className="contact__dd">
            <select
              name="selectbox"
              className="form-parts"
              required
              onChange={handleInputChange4}
              value={cueValue}>

              <option value="">選択</option>
              <option value="google検索">google検索</option>
              <option value="SNS">SNS</option>
              <option value="紹介">紹介</option>
              <option value="たまたま通りかかった">たまたま通りかかった</option>
              <option value="その他">その他</option>
            </select>
          </dd>

        </dl>

        {/* ★志望動機 checkbox */}
        <dl className="contact__list">
          <dt className="contact__dt check-radio">志望動機</dt>
          <dd className="contact__dd contact__radio">
            <label htmlFor="startup" className="form-label">
              <input
                type="checkbox"
                value="起業をしたい"
                onChange={handleInputChange5}
                checked={reasonValue.includes('起業をしたい')}
              />
              起業をしたい
            </label>
            <label htmlFor="jobchange" className="form-label">
              <input
                type="checkbox"
                value="チーズ系企業に就職・転職したい"
                onChange={handleInputChange5}
                checked={reasonValue.includes('チーズ系企業に就職・転職したい')}
              />
              チーズ系企業に就職・転職したい
            </label>
            <label htmlFor="skillup" className="form-label">
              <input
                type="checkbox"
                value="チーズと関わる仕事をしており、仕事に生かしたい"
                onChange={handleInputChange5}
                checked={reasonValue.includes('チーズと関わる仕事をしており、仕事に生かしたい')}
              />
              チーズと関わる仕事をしており、仕事に生かしたい
            </label>
            <label htmlFor="education" className="form-label">
              <input
                type="checkbox"
                value="チーズの教養を身に着けたい"
                onChange={handleInputChange5}
                checked={reasonValue.includes('チーズの教養を身に着けたい')}
              />
              チーズの教養を身に着けたい
            </label>
          </dd>
        </dl>

        {/* 詳細 */}
        <dl className="contact__list">
          <dt className="contact__dt bottom">詳細</dt>
          <dd className="contact__dd bottom">
            <textarea
              cols="30"
              rows="10"
              className="form-parts"
              required
              value={detailValue}
              onChange={handleInputChange6}
            >
            </textarea>
          </dd>
        </dl>

        {/*◆Formタグに"onSubmit"、Buttonタグに"type="submit"としたら{addData}が作動しない  */}
        <div className="btn-submit">
          {/* <Button className="btn-submit" type="submit" variant="contained">送信</Button> */}
          <Button variant="contained" onClick={addData}>送信</Button>
        </div>
      </form>

    </div>


  );
};

export default Add;