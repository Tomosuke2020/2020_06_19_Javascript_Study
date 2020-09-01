    'use strict'
//ウィンドウに表示する関数
window.addEventListener('DOMContentLoaded' , function(){

    //Fileを定義
    document.getElementById('file').addEventListener('change' , function(e){

    //選択されたファイルを取得（単一選択なので、0で決めうち）
    var input = document.getElementById('file').files[0];

    //変数の読み込みを定義
    var reader = new FileReader();
        reader.addEventListener('load' , function(){
            document.getElementById('result').textContent = reader.result;
        }, true);
        reader.readAsText(input , 'UTF-8');
        },true);
});

reader.addEventListener('error', function(){
    console.log.apply(reader.error.message);
}, true);

reader.readAsText(input , 'UTE-8');

//エラーを発生させるため、読み込み直後に処理を中止
reader.abort();