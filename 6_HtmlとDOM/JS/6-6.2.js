'use strict'
//いつものDOMの呼び出し
document.addEventListener('DOMContentLoaded' , function(){
    //idのelemを定義
    var elem = document.getElementById('elem');
    
    //マウスポインタが乗ったタイミングで背景色を変更：マウス仕様の呼び出し(over)
    //cssのハイライトを呼び出している
    elem.addEventListener('mouseover', function(){
        this.className = 'highlight';
    },false);

    //マウスポインターが外れたタイミングで背景色を戻す：マウス仕様の呼び出し（out）
    elem.addEventListener('mouseout' , function(){
        this.style.backgroundColor = '';
    },false);
},false);