// Dom có 3 thành phần: Viết tắt của Documant Object Model là cách thể hiện của 
// toàn bộ giao diện của ứng dụng Web dưới dạng object, thay vì là các thẻ HTML thông thường
//HTML DOM (không phải của Javascript) 

//1. Element: ID, Class, Tag, Css selector, HTML collection

// 2. Attribute
// 3. Text

// Node
//____________

// Javascript:

// var headingNode = document.getElementById('heading');
// console.log(headingNode);
// var inputvalue;
// var inputElement = document.querySelector('input[type="text"]')
// inputElement.onkeyup =function(e){
//     switch(e.which){
//         case 27:
//             console.log('Exit');
//             break;
//     }
// }
document.onkeypress = function(e){
    console.log(e.which);
    switch(e.which){
        case 27:
            console.log('EXIT');
            break;
        case 13:
            console.log('SEND CHAT');
            break;
    }
}
var aElements = document.querySelectorAll('a');
    console.log(aElements);
for(var i=0; i<aElements.length;++i){
    aElements[i].onclick = function(e){
        if(!e.target.href.startsWith('http://f8.edu.vn')){
            e.preventDefault();
        }
        console.log(e.target.href);
    }
}
var ulElements = document.querySelector('ul');
    ulElements.onmousedown = function(e){
        e.preventDefault();
    }
    ulElements.onclick = function(e){
        console.log(e.target);
    }

var divElement = document.querySelector('div');
    divElement.onclick = function(){
        console.log('DIV')
    }
var btnElement = document.querySelector('button');
    btnElement.onclick = function(e){
        e.stopPropagation();
        console.log('Click me')
    }