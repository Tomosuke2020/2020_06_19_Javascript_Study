'use strict'
document.addEventListener('DOMContentloaded' , function(){
    var elem = document.getElementById('elem');

    //クリックしたタイミングで背景色を変更
    elem.addEventListener('click' , function(){
        ethis.classList.toggle('highlight');
    }, false);
}, false); 