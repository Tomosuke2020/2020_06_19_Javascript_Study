'use strict'
//ドキュメントとして走らせる。
/**
 * @constructor
 * @classdesc メンバーについての情報を管理します。
 * @param {string} first Name 姓
 * @param {string} lastName名
 * @throws {Error} firstaNameかlastNameが足りません。
 * @throws {Error}  firstName かlastNameが足りません。
 * @author Yoshihiro Yamada
 * @version 1.0.0
 */

 var Member = function(firstName , lastName){

    
     if(firstName === undefined || lastName === undefined){
        throw new Error('firstNameかlastNameが足りません。');
     }
     this.firstName = firstName;
     this.lastName = lastName
     };

     /***
      * メンバーに関する詳細情報を表示します。
      * @return{string}メンバーの氏名
      * @deprecated{@link Member#toString}メソッドを代わりに利用してください。
      */

      Member.prototype.getName = function(){
          return this.lastName + ' ' + this.firstName;
      };

      /***
       * Memberクラスの内容を文字列化します
       * @return{String}メンバーの氏名
       */

       Member.prototype.toString = function(){
           return this.lastName + '' + this.firstName;
       };