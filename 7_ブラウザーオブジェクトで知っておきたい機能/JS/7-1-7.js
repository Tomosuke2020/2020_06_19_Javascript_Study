'use strict'
var agent = window.navigator.userAgent.toLowerCase();

var chrome = (agent,indexOf('chrome') > -1) && (agent.indexOf('edge') === -1) &&
(agent.indexOf('opr') === -1);
console.log('Chrome：' + chrome);
//結果true

if(window.File){
    //ファイルオブジェクトを利用したコード
} else {
    window.alert('File APIは利用できません。');
}
