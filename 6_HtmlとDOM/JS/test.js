document.addEventListener('DOMContentLoaded',function(){
    //<img id="logo">を取得
    var logo = document.getElementById('namida');
    
    //<img>要素に含まれる属性リストを取得
    var attrs = logo.attributes;

    //属性リストから順に属性を取り出し、その名前／値のセットを出力
    for(var i = 0, lent = attrs.length; i < lent; i++){
        var attr = attrs.item(i);
        console.log(attr.name + ':' + attr.value);
    }
}, false);
