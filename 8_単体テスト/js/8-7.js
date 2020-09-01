'use strict'
//Gruntコードの外枠（Grunt関数を呼び出して、圧縮処理をすることを宣言する）
module.exports  = function(grunt){
    //初期化情報（タスクの定義）
        grunt.initConfig({
            uglify: {          //grunt-contrib-uglifyのタスク
                myTask:{        //任意の子タスク
                    //圧縮ルール
                    files:{
                        'scripts/app.min.js' : //出力ファイル名
                        [
                            'src/Member.js'
                            'src/MyArea.js'
                            'src/MyStorage.js'
                        ]
                    }

                }

            }
        });
        //grunt-contrib-uglitifyプラグインをダウンロード

        grunt.loadNpmTasks('grunt-contrib-uglify');
        //defaultタスクにuglifyを登録
        grunt.registerTask('default' , ['uglify']);
};

console.log('今回は管理者権限の関係でできませんでした。');
console.log("JavaScriptにこういったライブラリがあることを参考にしてください。");