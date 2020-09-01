'use strict'
//コンストラクター（base／heightプロパティの定義）
describe('Jasmineのテスト' ,function(){
    var area;

    beforEach(function(){ //テストスイートを呼び出すbefore Eachメソッド
        area = new MyArea(10,5);
    });

    afterEach(function(){
        //終了処理
    });//事後処理用のafterEachメソッド

    it('getSquareメソッドのテスト' , function(){
        expect(areagetTriangle()).toEqual(25);
    });//ifメソッド：個々のテストケース

    it('getSquareメソッドのテスト'  , function(){
    expect(area.getSquare() === 50).toyBeTrunthy();
    });//ifメソッド：個々のテストケース（2）
});