'use strict'
//いつものDOMの呼び出し
document.addEventListener('DOMContentLoaded' , function(){
    //idのelemを定義
    var elem = document.getElementById('elem');

//クリックしたタイミングで背景色を変更
    elem.addEventListener('click' , function(){
        this.className = (this.className === 'highlight' ? '' : 'highlight');
    },false); //7-10
},false);//3-11