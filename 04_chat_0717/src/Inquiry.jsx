import React from 'react'

const Inquiry = ({
    data,
    Button,
    handleDelete,
    allDelete,


}) => {

    return (
        <div className="APP course-wrapper">
            <h3 className="text-center contact__text">お問い合わせ一覧</h3>
            {data.map((item, index) => (
                <div key={index}>
                    <dl className="contact__list">
                        <dt className="contact__dt">id</dt>
                        <dd className="contact__dd">{item.id}</dd>
                        <dt className="contact__dt">名前</dt>
                        <dd className="contact__dd">{item.name}</dd>
                        <dt className="contact__dt">カナ</dt>
                        <dd className="contact__dd">{item.kana}</dd>
                        <dt className="contact__dt">メールアドレス</dt>
                        <dd className="contact__dd">{item.email}</dd>
                        <dt className="contact__dt trigger">チーズアカデミーを知ったきっかけ</dt>
                        <dd className="contact__dd">{item.cue}</dd>
                        <dt className="contact__dt">志望動機</dt>
                        {/* <dd className="contact__dd">{item.checkBox.join(",")}</dd> */}
                        <dd className="contact__dd">{item.reason}</dd>
                        <dt className="contact__dt bottom">詳細</dt>
                        <dd className="contact__dd bottom">{item.detail}</dd>
                    </dl>
                    <div className="btn-submit">
                        {/* ★★個別要素の削除ボタン（機能していない） */}
                        <Button
                              variant="outlined"
                              color="error"
                            onClick={() => handleDelete(item.id)}
                        >
                            削除
                        </Button>
                    </div>
                </div>
            ))}

            <form onSubmit={allDelete} className="btn-submit">
                <Button type="submit" variant="contained">クリア</Button>
            </form>


        </div>
    )
}

export default Inquiry