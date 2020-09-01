'use strict'
Promise.all([
    asyncProcess('トクシロウ'),
    asyncProcess('ニンザブロウ'),
    asyncProcess('リンリン')
]).then(

    response => {
    console.log(response);
    },

    error => {
        console.log(`エラー：${error}`);
    }
);  
//結果：["入力値： トクシロウ" , "入力値：ニンザブロウ" , "入力値：リンリン"]