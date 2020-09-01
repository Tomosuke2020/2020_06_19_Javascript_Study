//ページ内の全てのアンカータグを取得
var list = document.getElementsByTagName('a');

//リスト（HtmlCollectionオブジェクト）から順にアンカータグを取り出し、
//そのhref属性をログに出力

for(var i = 0, len = list.length; i < len; i++){
    console.log(list.item(i).href);
}