'use strict'
console.log('コンソールに情報を入力しています。\n文字列を出力しています。デバックのヒントにしてください。\n');
console.log('ログ');
console.info('情報')
console.warn('警告');
console.error('エラー');

console.log('ここから下は書式指定子を埋め込み出力をしています。')
console.log('初めまして、私は%sです。 %d歳です。' , '山田太郎' , 30);
//結果：初めまして、私は山田太郎です。30歳です。
console.log('今日の気温は、%.2f度です。' ,22.5);
//結果：今日の気温は22.50度です。(Firefoxの場合)
