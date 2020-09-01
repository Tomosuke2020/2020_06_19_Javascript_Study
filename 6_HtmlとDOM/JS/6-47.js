'use strict'
document.addEventListener('DOMContentLoaded' , function(){

        
    //<a id = "inner">要素のclickイベントリスナー
document.getElementById('inner').addEventListener('click' , function(e){
    window.alert('#innerリスナーが発生しました。現在子要素のinnerが反応しています');
    e.stopPropagation();
},false);

document.getElementById('inner').addEventListener('click' , function(e){
    window.alert('#innerリスナー2が発生しています。経由地点です。');
    e.stopImmediatePropagation();
},false);


//<div id="outer">要素のclickイベントリスナー
    document.getElementById('outer').addEventListener('click' , function(e){
        window.alert('#outerリスナーが発生しています。現在親divが反応しています。inner要素を選択した場合、アンカーへ飛びます。');
    }, false);
    e.preventDefault();
},false);
