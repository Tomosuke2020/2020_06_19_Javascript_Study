//正規表現リテラル
// 変更分を[//]で囲む
//var result = str.match(/^[0-9]{1,}/gm);
console.log('出力');

var p =/http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w-.\/?%&=]*)?/gi;
var str ='サポートサイトはhttp://www.wings.msn.to/です。';
str += 'サンプル紹介サイトHTTP://www.web-deli.com/もよろしく！'
var result = p.exec(str);
for(var i = 0, len = result.length; i < len; i++){
    console.log(result[i]);
}


var p = /http(s)?:\/\/([\w])+\.[¥w-]+(\/[\w- .\/?%&=]*)?/gi;
var str = 'サポートサイトはhttp:wings.msn.to/です。';
str += 'サンプル紹介サイトHTTP://www.web-deli.com/もよろしく'
while((result = p.exec(str))  !== null) {
console.log(result[(0)]);
} 

var p = /http(s)?:\/\/([\w])+\.[¥w-]+(\/[\w- .\/?%&=]*)?/gi;
var str1 = 'サポートサイトはhttp:wings.msn.to/です。';
var str2 = 'サポートサイト「サーバーサイド技術の学び舎」もよろしく！。';
console.log(p.test(str1)); //結果  true or false

console.log('正規表現で文字列を置き換える');

var p = /http(s)?:\/\/([\w])+\.[¥w-]+(\/[\w- .\/?%&=]*)?/gi;
var str1 = 'サポートサイトはhttp:wings.msn.to/です。';
var str2 = 'サポートサイト「サーバーサイド技術の学び舎」もよろしく！。';
document.write(str.replace(p, '<a href="$1">"$1</a>'));
