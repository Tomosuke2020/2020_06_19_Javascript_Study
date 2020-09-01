'use strict'
document.getElementById('btn').addEventListener('click' , function(){
    //サービスへの問合せURLを生成

    var url = 'http://b.hatena.ne.jp/entry/jsonlite/?callback=show&url='
    + encodeURIComponent(document.getElementById('url').value);
    //サービスからJavaScriptのコードを受け取るための<script>要素を生成

    var scr = document.createElement('script');
    scr.src = url;

    document.getElementsByTagName('body').item(0).appendChild(scr);
}, false);

    function show(data){
        if (data === null){
            result.textContent = 'ブックマークは存在しませんでした。'
        } elese {
            result.appendChild(ul);
        }
    }
