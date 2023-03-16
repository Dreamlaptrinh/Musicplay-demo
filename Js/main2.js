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

if (0<= random && random <=5){
    console.log('Chúc mừng bạn đã nhận được legend!');
    console.log(random);
}
if (5<random && random<=25){
    console.log('Chúc mừng bạn đã nhận được epic!');
    console.log(random);
}
if(25<random && random<=55){
    console.log('Chúc mừng bạn đã nhận được rare')
    console.log(random);
}
if(55<random && random<=90){
    console.log('Chúc mừng bạn đã nhận được comon')
    console.log(random);
}
if(90<random && random<=100){
    console.log('Mở thẻ thất bại')
    console.log(random);
}

//Call Back?
//Là hàm function() được truyền qua đối số
//Khi gọi hàm khác
//1. Là Hàm
//2. Được truyền qua đối số.
//3. Được gọi lại (trong hàm nhận đói sốs)

function myFunction(param){
    if (typeof param ==='function'){
    param('Hello');}
}
function myCallback(value){
    console.log('Value',value);
}
myFunction(myCallback);

//call Back phần 2?
Array.prototype.map2 = function(callback){
    var output =[], arrayLength = this.length;
    for (var i= 0; i < arrayLength; ++i){
       var result = callback(this[i],i);
       output. push(result);
       console.log(result);
    }
    return output;
}
var courses = [
    'Javascript',
    'PHP',
    'Ruby'
];
var html = courses.map2(function(course){
    return `<h2>${course}</h2>`;
});
console.log(html.join(''));

// C1
// var html =courses.map(function(course){
//     return `<h2>${course}</h2>`;
// });
// console.log(html.join(''));
Array.prototype.forEach2 = function(callback){
    for(var index in this){      //For in duyệt qua cả element của proto
        if(this.hasOwnProperty(index)){
            callback(this[index],index,this );
        }
    }
}
var courses = [
    'Javascript',
    'PHP',
    'Ruby'
];
console.log(courses);
 courses.forEach2(function(course,index,array){  //foreach không care tới thuộc tính length
        console.log(course,index,array);
    })
//c1
// courses.forEach(function(course,index,array){  //foreach không care tới thuộc tính length
//     console.log(course,index,array);
// }) 
// Ôn lại object prototype và forin, phương thức mới hasOwnProperty
Array.prototype.filter2 = function(callback){
    var output = [];
    for(var index in this){      //For in duyệt qua cả element của proto
        if(this.hasOwnProperty(index)){
            var result = callback(this[index],index,this );
            if(result){
                 output.push(this[index]);
            }
        }
    }
    return output;
}
var courses = [
    {
        name:'javascript',
        coin: 680,
    },
    {
        name:'PHP',
        coin: 860,
    },
    {
        name:'Ruby',
        coin: 980,
    }
];
var filterCourses = courses.filter2(function(course, index, array){
    return course.coin > 700;
});
console.log(filterCourses);

// C1 :
// var filterCourses = courses.filter(function(course, index, array){
//     return course.coin > 700;
// });
// console.log(filterCourses);



Array.prototype.some2 = function(callback){
    for(var index in this){      //For in duyệt qua cả element của proto
        if(this.hasOwnProperty(index)){
            var result = callback(this[index],index,this );
            if(result){
                 return true;
            }
        }
    }
    return false;
}
var courses = [
    {
        name:'javascript',
        coin: 680,
        isFinish: false,
    },
    {
        name:'PHP',
        coin: 860,
        isFinish:false,
    },
    {
        name:'Ruby',
        coin: 980,
        isFinish: true,
    }
];
var someCourses = courses.some2(function(course, index, array){
    return course.isFinish ;
});
console.log(someCourses);

// var someCourses = courses.some(function(course, index, array){
//     return course.isFinish ===true;
// });
// console.log(someCourses);


// Array.prototype.every2 = function(callback){
//     for(var index in this){      //For in duyệt qua cả element của proto
//         if(this.hasOwnProperty(index)){
//             var result = callback(this[index],index,this );
//             if(result){
//                  return true;
//             }
//         }
//     }
//     return false;
// }
Array.prototype.every2 = function(callback){
    var output=true;
    for(var index in this){      //For in duyệt qua cả element của proto
        if(this.hasOwnProperty(index)){
            var result = callback(this[index],index,this );
            if(!result){
                 output = false;
                 break;
            }
        }
    }
    return output;
}
var courses = [
    {
        name:'javascript',
        coin: 680,
        isFinish: false,
    },
    {
        name:'PHP',
        coin: 860,
        isFinish:true,
    },
    {
        name:'Ruby',
        coin: 980,
        isFinish: true,
    }
];
var everyCourses = courses.every2(function(course, index, array){
    return course.coin > 700 ;
});
console.log(everyCourses);

// var everyCourses = courses.every(function(course, index, array){
//     return course.isFinish ;
// });
// console.log(everyCourses);

// Đệ quy
//  1 Xác định điểm dừng
//  2 là Logic handle => Tạo ra điểm dừng
// Đếm ngược mà không dùng hàm logic
function countDown(num){
    if(num>0){
        console.log(num)
        return countDown(num-1);
    }
    return num;
}
countDown(10);

//
function loop(start, end, cb){
    if(start < end){
        cb(start);
        return loop(start + 1,end,cb);
    }
}
var array = ['Javascript','PHP','Ruby'];
loop(0,array.length, function(index){
    console.log(array[index]);
});

//bài toán giai thừa
function giaiThua(number){
    var output = 1;
    for (var i = number; i >0; i--){
        output = output*i;
    }
    return output;
}
console.log(giaiThua(3));

//C2
function giaiThua(number){
    if (number >0 ){
        return number * giaiThua(number -1);
    }
    return 1;
}
console.log(giaiThua(3));
