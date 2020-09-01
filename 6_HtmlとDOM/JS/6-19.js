document.addEventListener("DOMContentLoaded" , function(){
    //ボタンクリック時にチェック項目の値をダイアログ表示
    document.getElementById('btn').addEventListener('click',function(){
    //選択値を格納するための配列
        
    //resultの箱に格納
    var result = [];

    //getElementでID呼び出し
    var foods = document.getElementsByName('food');

    //チェックボックスを走査し、チェック状態にあるかを確認
    for(var i = 0, len = foods.length; i < len; i++){
    var food = foods.item(i);

    //チェックされている項目の値を配列に追加
    if(food.checked){
    result.push(food.value);
    }
}
    //配列の内容をダイアログに出力
    window.alert(result.toString());
    }, false);
}, false);

var onoff = document.getElementsById('onoff');
//チェックボックスonoffの状態に応じてログを出力
if(onoff.checked){
    console.log(onoff.value);
} else {
    console.log('チェックされていません。');
}