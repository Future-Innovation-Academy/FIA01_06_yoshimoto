**<やったこと>**<br>
03_memo_0710で作ったチーズアカデミーのContactフォームをfirebaseで実装してみた。<br>

**<できたこと>**<br>
フォーム記入、selectbox/checkbox選択結果が、問い合わせ結果として反映できた
firebase側にも反映できた
講義であったpropsを使えた

**<できなかったこと>**<br>
削除機能は未実装（そういえば次の講義で編集、削除をやるということを思い出した）

**<感想>**<br>
LocalStorage活用時とfirebase活用で、コードの書き方が違うので、講義動画を見ながら<br>
なんとか実装できたものの、完全に理解しきれていない。
最初、

```
<form onSubmit={addData}>
<button type="submit">"　
```

にしていたところ、addDataが発動しなかった。<br>

講義の通り<br>

```
"<button onClick>"
```

にしたらうまくいった。なぜだろう。


