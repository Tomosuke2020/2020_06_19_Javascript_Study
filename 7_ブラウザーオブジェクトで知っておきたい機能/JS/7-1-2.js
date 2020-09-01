'use strict'
document.addEventListener('DOMContentLoaded' , function(){
    document.getElementById('fm').addEventListener('submit' , function(e){
        if(!window.confirm('ボタンを押しましたね？')){
            e.preventDefault();
        }
    },false)
},false);