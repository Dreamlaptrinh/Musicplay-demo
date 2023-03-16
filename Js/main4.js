// 1.DOM EVENT/ EVENT LISTeNER
// *. Làm nhiều việc 
// *. Lắng nghe/ hủy bỏ lắng nghe

var btn = document.getElementById('btn');
function viec1() {
    console.log('viec 1');
}
function viec2() {
    console.log('viec 2');
}
btn.addEventListener('click', viec1);
btn.addEventListener('click', viec2);
setTimeout(function(){
    btn.removeEventListener('click',viec1)
},3000);