'use strict'
//親グループを開始
console.log('ログをグループ化して出力します。');
console.group('上位グループ');
for(var i = 0; i < 3; i++){
    //子グループを開始
    console.group('下位グループ' + i);
    for(var j = 0; j < 3; j++){
        console.log(i,j);
    }
    //子グループ
    console.groupEnd();
}
//親グループ
console.groupEnd();

console.log('Timer/Timerメソッド関連のタイマー動作')
console.time('MyTimer');
window.alert('確認してください。');
console.timeEnd('MyTimer');