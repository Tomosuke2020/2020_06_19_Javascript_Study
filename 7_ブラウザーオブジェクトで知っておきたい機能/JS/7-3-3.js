'use strict'
var strage = localStorage;
for (var i = 0, len = storage.length; i < len; i++){
    var k = storage.key(i);
    var v = storage[key];
    console.log(k + ':' + v);
}
