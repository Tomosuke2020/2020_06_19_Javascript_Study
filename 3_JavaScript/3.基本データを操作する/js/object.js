//objectのオブジェクト

//List3-50
var obj = new Object(); 
console.log(obj.toString());//[object Object]
//文字列を返す
console.log(obj.valueOf());//{}
//文字列以外の基本型の値が返されることを期待して使われる


var dat = new Date();
console.log(dat.toString());
//結果：wed Jun 15 2016 16:08:03 GMT+0900
console.log(dat.valueOf());

var ary = ['phototyoe.js' , 'jQuery' , 'Yahoo! UI'];
console.log(ary.toString());
console.log(dat.valueOf());

var num = 10;
console.log(num.toString());
console.log(num.valueOf());

var reg = /[0-9]{3}-[0-9]{4}/g;
console.log(reg.toString());
console.log(reg.valueOf());

let pet = {
    type:'スノーホワイトハムスター',
    name:'キラ',
    description:{
        birth:'2014-02-15'
    }
};

let pet2 = {
    name: '山田きら',
    color:'白',
    description:{
        food:'ひまわりの種'
    }
};

let pet3 = {
    weight:42,
    photo: 'http://www.wings.msn.to/img/ham.jpg'
};

Object.assign(pet, pet2, pet3);
console.log(pet);
//結果その通り

//3-51 オブジェクトを生成する -createメソッド -
var obj = { x:1, y:2,z:3};
//objに値をいれる

var obj2 = new Object();
obj2.x = 1;
obj2.y = 2;
obj2.z = 3;
//インスタンス化して個々にプロパティを追加してしても同じ意味になる

var obj3 = Object.create(Object.prototype, {
    x :{value:1, writable: true, configurable: true, enumerable : true},
    y: {value:2, writable: true, configurable: true, enumerable : true},
    z: {value:3, writable: true, configurable: true, enumerable : true},
}
);

console.log('objectを生成するメソッド');
/*
構文
Object.create(proto [,propps])
    proto:生成するオブジェクトの元となるオブジェクト
    props:プロパティ情報
*/



