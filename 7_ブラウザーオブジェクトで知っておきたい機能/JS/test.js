'use strict'
document.addEventListener('DOMContetLoaded' , function(){
    document.getElementById('isbn').addEventListener('change' , function(){
        location.href = "http://www.wings.msn.to/index.php/-/A-03" + this.Value;
    }, false);
}, false);