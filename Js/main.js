// Bài học khai báo biến//
var fullName = 'Pham Duc Tai';
var age = '26';
alert(fullName);
alert(age);
/* giới thiệu 1 số hàm built-in
    1. Alert Hiện lên mess
    2. Console
    3. Confirm  Có mess và có của sổ
    4. Prompt   có input nhập giá chị
    5. Set timeout      sau 1 khoảng tg và chạy 1 lần
    6. Set interval      Chạy 1 đoạn sau 1 khoảng tg và chạy 1 lần
    */

  console.log(fullName);
confirm('Xac nhan ban du tuoi');
prompt('Xác nhan ban du tuoi');
setTimeout(function() {
    alert('Thong bao')
}, 1000)
//setInterval(function() {
   // console.log('Day la log'+ Math.random() )}, 1000)

/** Giới thiệu về toán tử
1 Toán tử số học - Arithmetic
2 Toán tử gán - Assignement
3 Toán tử so sánh - Comparison
4 Toán tử logic - Logical
**/
var a = 1 + 2;
console.log(a);
var b=3;
var c=4;
if (c<b){ //c==b,c>b
    alert('Dung');
}
if (a>0&&b>0){
    alert('a&b lớn hơn 0')
}
/** Toán tử số học
 * + ->cộng
 * - ->Trừ
 * * ->Nhân
 * ** -> Lũy thừa
 * / ->Chia
 * % ->Chia lấy số dư
 * ++ ->Tăng 1 giá trị số
 * -- ->Giảm 1 giá trị số
 */
var d= b +c;
//d--;
//console.log(d);
//Toán tử ++ ---
//Prefix (tiền tố) & Postfix (hậu tố)
//--d;
//console.log(d);
// Tiền tố ++d, việc 1: +1 cho a, a=a+1 in ra 7
// việc 2 trả về a sau khi được +1
var output=d++;
console.log('output: ',output);
console.log(d);
// Hậu tố

/** Toán tử gán
 Toán tử         ví dụ          Tương đương
 =                x=y               x = y
 +=               x+=y              x = x+y
 -=               x-=y              x = x-y
 *=               x*=y              x = x*y
 /=               x/=y              x = x/y
 **=             x **=y             x = x ** y
 */
/**
    Toán tử chuỗi
 */
var firstName = 'Tai';
// String type
var lastName = 'Pham';
console.log(firstName + ' ' + lastName);
var ten='tai';
ten = ten + ' pham';
console.log(ten);
/**
    Toán tử so sánh;
    == -> bằng
    != -> không bằng
    > -> lớn hơn
    < -> nhỏ hơn
    >= ->lớn hơn hoặc bằng
    <= ->nhỏ hơn hoặc bằng
 */
if (b==c){
    console.log('Dieu kien dung!');
} else{
    console.log('Dieu kien sau!');
}
/** Boolean
 */
// Boolean type
var inSuccess = c>b;
console.log(inSuccess);
/**
  If - else
 */
/**
 * Các giá trị sau khi truyền vào là fasle
 * 0
 * false
 * ''-""
 * undefined
 * NaN
 * null
 */
if(inSuccess){
    console.log('Dieu kien dung!');
}else{
    console.log('Dieu kien sau!');
}
/**
 * Toán tử logic
 * 1. && - And
 * 2. || - Or
 * 3. ! - Not (Phủ định lại biểu thức)
 */
var e = 1;
var f = 2;
// Number type
var g = 3;

if (e>0 && f>0 && g>0){ //tat cả phải dung
    console.log('Dieu Kien Dung!');
}
if (e>0 || f<0 || g<0){ //1 trong 3 phải đúnng
    console.log('Dieu Kien Dung!');
}
/**
 Kiểu dữ liệu trong js
 1. Dữ liệu nguyên thủy - Primitive Data
 - Number
 - String
 - Boolean
 - Undefined
 - Null
 - Symbol
 2. Dữ liệu phức tạp - Complex Data
 - Function
 - Object
 */
// Undefined type
var un;
console.log(un)
//Null
var isNull = null; //nothing
//Symbol
var id = Symbol('id'); //unique duy nhất
var id2 = Symbol('id'); //uniqud duy nhất


//Function
var myFunction = function(){
    alert('Chao xin');
}
myFunction();
//Object types  có thể chứa rất nhiều dạng dũ liệu
var myObject = {
    Name:'Tai Pham',
    Age: 18,
    Address: 'Ha Noi'
};
console.log('myObject', myObject);
//Array
var myArray=[
    'Js',
    'Html',
    'Css'
];
console.log('myArray', myArray);
/**
 * Toán tử so sánh P2
 * ===
 * !==
 */
// == chỉ so sánh value, === so sánh cả kiểu dữ liệu, cả value
// Tương tự với  != và !==

/**
 * Tóán tử logical và câu lệnh điều kiện if
 *  Hiểu hơn về câu lệnh điều kiện
 *  và phép so sánh
 */

/**
 * Toán từ and lấy các giá trị từ trái quá phải theo kiểu boolean
* Đọc giá trị từ trái qua phải khác 6 kiểu false ở trên thì lấy luôn
*/



//  // Chuỗi trong js
//  // 1. Tạo chuỗi ( Có 2 cách nhưng cách 2 nhưng sẽ tạo ra đối tượng là object)
//  // Bằng cách ví dụ 
//  //  C1 var fullName = 'Tai Pham'; Khuyến khích dùng
//  *  C2 var fullName = new String('Tai Pham');
//  *  - Các cách tạo chuỗi
//  *  - nên dùng cách nào? Lý do?
//  *  - Kiểm tra data type
//  * 2. Một số case sử dụng backslash (\)
//  * ví dụ  var fullName = 'Tai Pham 'đẹp trai''; sẽ lỗi
//  * sửa  var fullName = 'Tai Pham \'đẹp trai\'';
//  * 3. Xem độ dài chuỗi
//  * Console.log(fullName.length)
//  * 4. Chú ý độ dài khi viết code
//  * Cách khai báo xuống dòng thêm dấu cộng r xuống dòng bth
//  * 5. Template string ES6
//  // C1: console.log('toi la: + fullName +' '+ lasName');
//  // C2: console.log(`toi la: ${firstName} ${lastName});

//Làm việc với chuỗi

var myString = 'Tu hoc js js js';
// Keyword: Js string methods
// 1.length
//console.log(myString.length);
//2. Find index
console.log(myString.indexOf('js')); //dem tu 0
console.log(myString.search('js'));
//3.Cut string
console.log(myString.slice(3,7))
//4.Replace
console.log(myString.replace('js','Javascript'));
console.log(myString.replace(/js/g,'Javascript'));


//5.Convert to upper case
//console.log(myString.toUpperCase());
//6.Convert to lower case
//console.log(myString.toLowerCase());
//7.Trim
//console.log(myString.trim())
//8. Split
var languages ='Javascript, HTML, CSS';
console.log(languages.split(', '));
//9. Get a character by index (lấy 1 ký tự bởi 1 index cho trước)
const myString2 ='Tai Pham';
console.log(myString2.charAt(0))

/*
Kiểu số (Number) trong JS
1. Tạo giá trị Number
- Các cách tạo
- Dùng cách nào? Tại sao?
- Kiểm tra data type   console.log(isNaN(result))
2. Làm việc với Number
- To string     console.log(abc.toString);
- To fixed      console.log(PI.toFixed()); làm tròn số (số làm tròn mong muốn)
*/
/* Mảng trong js
1. Tạo mảng
- Cách tạo          var languages = []
- Sử dụng cách nào? WHy?
- Kiểm tra data type? console.log(Array.isArray())
2. Truy xuất mảng
- Độ dài mảng
- Lấy phần tử theo index
*/

/* Làm việc với mảng 
1. To string
2. Join console.log(  ,join(''));
3. Pop  xóa đi phân tử cuối mảng và trả lại phần tử đã xóa
console.log(  .pop())
Nếu thêm 1 console.log(  .pop()) thì sẽ xóa thêm 1 phần tử nữa trong mảng
4. Push thêm 1 phần tử ở cuối mảng trả về độ dài mới của mảng
console.log(   .push(''))
5. Shift   xóa đi phần tử ở đầu mảng và trả lại phần tử đã xóa
console.log(  .shift()) 
6. Unshift Thêm 1 phần tử ở đầu mảng trả về đọ dài mới
console.log(   .unshift(''))
7. Splicing
Xóa 1 phần tử bất kì trong mảng
languages.splice(từ vị trí con trỏ chỉ đến, số phần tử cần xóa)
8. Contact 
Nối array
ví dụ: console.log(languages.concat(languages 2))
9. Slicing cắt mảng
ví dụ console.log(languages.slice(1, 2))
*/

/**
    1. Hàm?
    - Một khối mã
    - Làm 1 việc cụ thể
    2. Loại hàm
    - Built-in
    - Tự định nghĩa
    3. Tính chất
    - Không thực thi khu được gọi
    - Sẽ thực thi khi được gọi
    - Có thể nhận tham số
    - Có thể trả về 1 giá trị
    4. Tạo hàm đầu tiên
 */
function showDialog() {
    alert('Hi xin chao cac ban!');
}
showDialog();

/*
Tham số hàm - Js cơ bản
1. Tham số?
    - Định nghĩa?
    - Kiểu dữ liệu? //không giới hạn
    - Tính private?
    - 1 tham số
    - Nhiều tham số
2. Truyền tham số.
    - 1
    - nhiều
3. Argument?
    - Đối tượng Arguments
    - Giới thiệu vòng for
*/
function writeLog(message){
    console.log(message)
}
writeLog('test message')

function writeLog(){
    var myString = '';
    for (var param of arguments){
        myString += `${param} -`
    }
    console.log(myString)
}
writeLog('Log 1', 'Log 2', 'Log 3');

//Return trong hàm - JV cơ bản
function cong(a,b){
    return a + b;
    // return a.toString() + b.toString();
}
var result = cong(2, 8);
console.log(result)

//Một số điều cần biết về function
/*
1. Khi function trùng tên? sau sẽ ghi đè lên trước
2. Khai báo biến trong hàm?  
3. Định nghĩa hàm trong hàm?    Phạm vi sử dụng chỉ trong 1 function định nghĩa vì có tính private
*/ 
function showMessage() {
    function showMessage2() {
        console.log('Message 2');
    }
    showMessage2();
}
showMessage();

/* Các loại function
    1. Declation function
    function showMessage(){

    }
    2. Expresstion function
    Var showMessage = function(){

    }
    3. Arrow function
*/

/* Polyfill?*/
 if(!String.prototype.includes){
    String.prototype.includes = function(search,start){
        'use strict';
        if (search instanceof RegExp){
            throw TypeError('first argument must not be a RegExp');
        }
        if (start === undefined){start=0;}
        return this.indexOf(search,start)!== -1;
    }
 }

//  Object trong jS

// var myInfor = {
//     name: 'Tai',
//     age: 18,
//     address: 'Ha Noi,Vn',
//     [EmailKey]: 'taibooi97@gmail.com',
//     getName: function(){
//         return this.name;
//     }
// };
//Function  --> Phương thước /method
//Others --> Thuộc tính /property
// console.log(myInfor.getName());

//Object constructor
function User(firstName, lasName, avatar){
    this.firstName = firstName; //thuoc tinh
    this.lasName = lasName;
    this.avatar = avatar;
    this.getName = function(){ //phuong thuc
        return `${this.firstName} ${this.lasName}`
    }
}
User.prototype.className = 'F8';
User.prototype.getClassName = function(){
    return this.className;
}
var author = new User('tai', 'pham', 'avatar');
var user = new User('ngoc', 'le', 'avatar');
author.title = 'chia sẻ';
user.comment = 'abc';
console.log(author);
console.log(user);
// Object prototype (nguyên mẫu) - Basic
// 1. Prototype là gì?  // them duoc thuoc tính ở bên ngoài hàm tạo
// 2.Sử dụng khi nào? khi muốn thêm 1 thuộc tính bên ngoài constructor

// Đôi tuwojgn Date
var date = Date();
console.log(date);
// var year = date.getFullyear();
// var month= date.getMonth() + 1;
// var day=date.getDate();

// Cau lenh re nhánh if else
var date = 2;
if (date ===2){
    console.log('Hôm nay bằng thứ 2');
} else if (date ===3){
    console.log('Hôm nay bằng thứ 3');
} else if (date ===4){
    console.log('Hôm nay bằng thứ 4');
} else {
    console.log('không biết');
}

// Cau lenh re nhánh switch
var date = 2;
switch(date){
    case 2:
        console.log('Hôm nay là thứ 2');
        break;
    case 3:
        console.log('Hôm nay là thứ 3');
        break;
    case 4:
        console.log('Hôm nay là thứ 4');
        break;
    default:
        console.log('không biết');
}
// khi nào cần tính đúng hay sao thì dùng if else 
// Biết trước giá trị thì dufmng switch case,lớn hơn >= 3 case, ít hơn thì dùng if else

// Toán tử 3 ngôi - Ternary operator
var course ={
    name:'JS',
    coin:200,
}
//C1
if (course.coin>0){
    console.log(`${course.coin} Coins`);}
    else{
        console.log('Miễn Phí');
    }
//C2
// var result = course.coin > 0 ? `${course.coin} Coins`:'Miễn Phí';
// console.log(result);
/**
 * Vòng lặp - Loop
 1.for - Lặp với điều kiện đúng
 for(var i; i<=100;i++){
    console.log(i);
 }
var myArray=[
    'tai',
    'ngoc',
    'linh',
    'ha',
];
var arrayLength=myArray.length;
for(var i=0;i<arrayLength;i++){
    console.log(myArray[i]);
}
 


 2.for/in - Lặp qua key của đối tượng
Var myInfo = {
    name:'tai pham',
    age: 20,
    address: 'Ha nOi'
};
for (var key in myInfo){
    console.log(myInfo[key]);
}

 3.for/of - Lặp qua value của đối tượng
Var myInfo = {
    name:'tai pham',
    age: 20,
    address: 'Ha nOi'
};
for (var value of Object.values(myInfo)){
    console.log(value);
}


 4.while - lặp khi điều kiện đúng
 var myInfo = {
    name:'tai pham',
    age: 20,
    address: 'Ha nOi'
};
 var i = 0;
while (i< myInfo.length){
    console.log(myInfo[i]);
    i++;
}


5.do/while - lặp ít nhất 1 lần, sau khó lặp điều kiện đúng
var i=0;
var isSuccess=false;
do {
    i++
    console.log('Nap thẻ lần'+i);
    //thành công
    if(false){
        isSuccess = true;
    }
}while (!isSuccess && i<3);

 */

// 6. Break & continue in loop

// for ( var i=0; i <10; i++){
//     console.log(i);
//     if(i>=5){
//         break;
//     }
// }

// for ( var i=0; i <10; i++){
//     if(i%2 !==0){
//         continue;
//     }

//     console.log(i);
// }

///7. Vòng lặp lồng nhau - nested loop
// var myArray = [
//     [1,2],
//     [3,4],
//     [5,6]
// ];
// for(var i=0; i<myArray.length; i++){
//     for(var j=0; j<myArray[i].length; j++){
//     console.log(myArray[i][j]);}
// }

// 8.loop
// for (var i = 100; i>=0; i-=5){
//     console.log(i);
// }

/*Làm việc với mang phần 2
    Array methods
    forEach()
    every()
    some()
    find()
    filer()
    map()
    reduce()
*/
var courses = [
    {
        id:1,
        name: 'Java',
        coin: 0
    },
    {
        id:2,
        name: 'Javascript',
        coin: 100
    },
    {
        id:2,
        name: 'Javascript',
        coin: 50
    },
    {
        id:3,
        name: 'Python',
        coin: 100
    },
    {
        id:4,
        name: 'html,css',
        coin: 2
    }
];
// courses.forEach(function(course, index){    // Duyệt qua từng phần tử của mảng
//     console.log(index,course);
// });
    // var isFree = courses.every(function(course, index){   //Kiểm tra tất cả các phần tử của mảng thỏa mãn điều kiện gì đó
    //     return course.coin === 0;
    // });
    // console.log(isFree);

    // var course = courses.find(function(course, index){   //Kiểm tra tất cả các phần tử của mảng thỏa mãn điều kiện gì đó ngược lại với every
    //     return course.name = 'python';
    // });
    // console.log(course);

    // var ListCourse = courses.filter(function(course, index){   //Kiểm tra tất cả các phần tử của mảng thỏa mãn điều kiện gì đó ngược lại với every
    //     return course.name === 'Javascript';
    // });
    // console.log(ListCourse);

    // var newCourses = courses.map(function courseHandler(course, index){
    //     // console.log(course);
    //     return{
    //         id:course.id,
    //         name:`Khoa Học: ${course.name}`,
    //         coin: course.coin,
    //         coinText: `Gia: ${course.coin}`,
    //         index: index,
    //     }
    // });
    // console.log(newCourses);

    //C1
    // var totalCoin = 0;                              //dễ hiểu hơn
    // for (var course of courses){
    //     totalCoin += course.coin;
    // }
    // console.log(totalCoin);
    //c2
    // var i = 0;
    // var totalCoin = courses.reduce(function(total, course){
    //     i++;
    //     console.log(i ,total);
    //     return total + course.coin;
    // },0);
    // console.log(totalCoin);
    //c3
    //  var numbers = [0, 100, 50, 100 ,2]
    //  var totalCoin = numbers.reduce(function(total,number){
    //     return total+number;
    //  });
    //  console.log(totalCoin);

    //Flat - 'làm phẳng' mảng từ Depth array - 'mảng sâu'

var deathArray = [1,2,[3,4],5,6,[7,8,9]];
var flatArray = deathArray.reduce(function(flatOutput, deathitem){
    return flatOutput.concat(deathitem);
},[]);
    console.log(flatArray);

    //Lay ra các khóa học và đưa vào 1 mảng mới
var topics = [
    {
        topic: "Front-end",
        courses:[
            {
                id:1,
                title:"HTML,CSS"
            },
            {
                id:2,
                title:"Javascript"
            }
        ]
    },
    {
        topic:"Back-end",
        courses:[
            {
                id:1,
                title:"PHP"
            },
            {
                id:2,
                title:"NodeJs"
            }
        ]
    },
];

var newCourses = topics.reduce(function (courses, topic) {
    return courses.concat(topic.courses)
},[])
    console.log(newCourses);

var html = newCourses.map(function(course){
    return `
    <div>
        <h2>${course.title}</h2>
        <p>ID: ${course.id} </p>
    </div>
    `;
});
    console.log(html.join(''));
// Sring/ Array includes ()method
var courses = ['Javascript', 'PHP', 'Dart'];
console.log(courses.includes('Javascript'));



/*

Math object
- Math.PI  (số pi)
- Math.round() (làm tròn)
- Math.abs() (trị tuyệt đối)
- Math.ceil() (Làm tròn trên)
- Math.floor() (Làm tròn dưới)
- Math.random()
- Math.min()
- Math.max()

*/

var random = Math.floor(Math.random() * 100);
// var bonus = [
//     '10 coins',
//     '20 coins',
//     '30 coins',
//     '40 coins',
//     '50 coins',
// ];
// console.log(bonus[random]);

if (random < 5){
    console.log('Cương hóa cấp 1 thành công!')
}
if (5 <random< 30){
    console.log('Cường hóa cấp 2 thành công!')
}
else{
    console.log('Cường hóa cấp 1 thành công')
}
