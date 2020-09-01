'use strict'
<?php
    if($_REQUEST['submit'] !== null){
        //処理を3秒間中断(サーバー処理を体感するためのダミーの遅延)
        sleep(3);
        print('こんにちは、'. htmlspecialchars($_POST['name'], ENT_QUOTES | ENT_HTML5,
        'UTF-8').'さん！');
    }
?>