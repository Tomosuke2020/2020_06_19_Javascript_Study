    'use strict'
window.addEventListener('DOMContentLoaded' , function(){
    document.getElementById("file").addEventListener('change' , function(e){
        var inputs = document.getElementById("file").files;

        //forループで順にファイルを取り出す
        for(var i = 0 , len = inputs.length; i < len; i++){

    var input = inputs[i];
    //ログにファイル種類を表示
    console.log('ファイル名：' + input.name);
    console.log('種類：' + input.type);
    console.log('サイズ：' + input.size / 1024 + 'KB');
    console.log('最終更新日：' + input.lastModifiedDate);
    }
    },true);
});