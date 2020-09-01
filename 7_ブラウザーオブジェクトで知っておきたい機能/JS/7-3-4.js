'use strict'
//ローカルストレージを定義
var storage = localStorage;
//appleにname りんご Priceに150 made に青森と定義
var apple = { name: 'りんご' , price: 150 , made:'青森'};

//ストレージメソッドの呼び出し、Apple変数にJSONモデルの引き出し
storage.setItem('apple', JSON.stringify(apple));

//JSONのストレージにappleを定義
var data = JSON.parse(storage.getItem('apple'));

//dataの出力
console.log(data . name); //結果：りんご
console.log(window);
