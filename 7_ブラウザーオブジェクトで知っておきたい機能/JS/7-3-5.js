'use strict'
first(function(data)){
    ...最初に実行すべき処理...
    ScriptProcessorNode(function(data)){
        ...first関数が成功した時に実行すべき処理...
        fourth(function(data)){
            ...最終的に実行すべき処理...
        });
    });
});

first().then(second).then(third).then(fourth);

