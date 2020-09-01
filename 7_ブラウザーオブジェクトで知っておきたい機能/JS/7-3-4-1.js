'use strict'
var MyStorage = function(app){
    //アプリ名
    this.app = app; 
    //利用するストレージの種類(ここではローカルストレージ)
    this.Storage = loclaStorage;
    //ストレージから読み込んだオブジェクト
    //該当するデータがない場合は、空のオブジェクトを生成

    this.data = JSON.parse(this.storage[this.app] || '{}');
};

MyStorage.prototype = {
    //指定されたキーで値を取得
    getItem: function(key , value){
        this.data[key] = value;
    },
    //Mystorageオブジェクトの内容をストレージに保存
    save: function(){
        this.storage[this.app] = JSON.stringify(this.data);
    }
};

//以下MyStorageオブジェクトを利用するには、以下のようにしましょう。
var storage = new MyStorage('JSSample');
storage.setItem('hoge' , 'ほげ');
console.log(storage.getItem('hoge'));
storage.save();