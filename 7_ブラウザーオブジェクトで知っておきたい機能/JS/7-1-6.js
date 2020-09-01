'use strict'
var count = 0;
var result = document.getElementById("result");

//[カウントアップ]ボタンをクリックした時に履歴を追加
document.getElementById("btn").addEventListener('click' , function(){
    result.textContent = ++count;
    history.pushState(count, null , '7.0 ブラウザーオブジェクトで知っておきたい機能/JS/7-1-6.js/' +count);
});

//[戻る]ボタンでページの状態を元に戻す
window.addEventListener('popstate' , function(e){
    count = e.state;
    result.textContent = count;
});