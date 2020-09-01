'use strict'
document.addEventListener('DOMcontentLoaded' , function(){
    var li = document.getElementsByTagName('li');
    console.log('変更前：' + li.length); //結果
    
    var ul = document.getElementById('list')
    ul.appendChild(document.creatElementById('li'));
    console.log('変更後：' + li.length);
},false);