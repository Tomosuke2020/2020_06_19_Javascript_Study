//<select>要素mの最初の子要素を取得
var child = s.firstElementChild;
//子要素が存在する間、ループを繰り返し
while(child){
    console.log(child.value);
    child = child.nextElementSibiling;
}