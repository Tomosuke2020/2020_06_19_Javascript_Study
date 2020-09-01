'use strict'
//いつものDOMの呼び出し
document.addEventListener('DOMContentLoaded' , function(){
    var elem = document.getElementById('elem');
    
    //マウスポインタが乗ったタイミングで背景色を変更：マウス仕様の呼び出し(over)
    elem.addEventListener('mouseover' , function(){
        this.style.backgroundColor = 'Yellow';
    },false);

    //マウスポインターが外れたタイミングで背景色を戻す：マウス仕様の呼び出し（out）
    elem.addEventListener('mouseout' , function(){
        this.style.backgroundColor = '';
    },false);
},false);

document.addEventListener('DOMContentLoaded' , function(){
    var elem = document.getElementById('action');

elem.addEventListener('mouseover' , function(){
    this.style.backgroundColor = 'Red';
},false);

    //マウスポインターが外れたタイミングで背景色を戻す：マウス仕様の呼び出し（out）
    elem.addEventListener('mouseout' , function(){
        this.style.backgroundColor = '';
    },false);
},false);
