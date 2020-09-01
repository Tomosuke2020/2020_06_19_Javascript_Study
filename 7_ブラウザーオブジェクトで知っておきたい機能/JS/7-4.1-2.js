'use strict'
xhr.addEventListener('loadstart' , function(){
    result.textContent = '通信中...';
},false);

xhr.addEventListener('load' ,function(){
    XPathResult.textContent = xhr.responseText;
},false);

xhr.addEventListener('error' , function(){
    XPathResult.
},false);