'use strict'
document.addEventListener('DOMContentLoaded' , function(){
    var Counter = function(elem){
        this.count = 0;
        this.elem = elem;

    elem.addEventListener('click' , function(){
        this.count++;
        this.show();
    },false);
};

//カウンタ（++の数を数えるプログラム）情報を表示させるためのメソッド
Counter.prototype.show = function(){
    console.log(this.elem.id + 'は' + this.count + '回クリックされました。');
}
    //<button>要素btnにカウンタを紐付け
    var c = new Counter(document.getElementById('btn'));
} , false);

//残りの記述
elem.addEventListener('click' , () => {
    this.count++;
    this.show();
} , false);