//2. Json

// Là 1 định dạng dữ liệu (chuỗi)
// Js Object Notation
// Json: Nunber, String, Boolean, Null, Array, Object

// Có 2 thao tác Mã hoá và giải mã (End  code  và  decode)
// Stringify/ Parse 

// var  json = '["Javascript","PHP"]'; // Array
// // var  json = '{"name": "Tai Phamm", "age":18}'; //Object

// var  a  = '1';   //parse từ JSON  sang  jS type
// console.log(JSON.stringify({
//     Name: 'Js',
//     Name2: 'html',
// }));

//3.Promise (Sync: Đồng bộ, Async: Không đồng bộ, nỗi đau, lý thuyết, cách hoạt động, thực hành)
//settimeout, setinterval,fetch,
//XMLHttlRequest, file reading,
//request animation frame
//call back
//sleep

// setTimeout(function(){ //bất đồng bộ
//     console.log(1);
// },1000);
// console.log(2);


// Callback hell
// setTimeout(function(){ //bất đồng bộ
//     console.log(1);
//     setTimeout(function(){ //bất đồng bộ
//         console.log(2);
//         setTimeout(function(){ //bất đồng bộ
//             console.log(3);
//             setTimeout(function(){ //bất đồng bộ
//                 console.log(4);
//             },1000);
//         },1000);
//     },1000);
// },1000);

// Pyramid of doom

// Lý thuyết Promise:
//b1: Khởi tạo  promisee
//b2: Tạo ra excutor

//memory



var promise = new Promise(  //ES6 //Objct constructor
    //Excutor
    function(resolve, reject){
        //Logic
        //Thành côngg: resolve()  //then 
        //Thất bại: reject()  //catch
        // KHi 1 trong 2 được gọi  thì finally được  gọi
        //Fake call API
        // them và  catch  đều  nhận  call  baclk  functionn
        resolve();
    }
    );

// //Tính chất chuỗi - Chain
// promise
//     // .then(function(){         //kết quả trả về của function trước bằng với kết quả đầu vào thằng sau
//     //     return new Promise(function(resolve){
//     //         setTimeout(resolve,3000);
//     //     });
//     // })
//     .then(function(data){
//         console.log(data);
//     })
//     .catch(function(){ //Bẫy bắt  (bắt  lỗi  , bẫy  lỗi)
//         console.log('Failure');
//     })
//     .finally(function(){
//         console.log('Done');
//     })

// function sleep(ms){
//     return new Promise(function(resolve){
//         setTimeout(resolve,ms);
//     });
// }
// sleep(1000)
//     .then(function(){
//         console.log(1);
//         return sleep(1000);
//     })
//     .then(function(){
//         console.log(2);
//         return new Promise(function(resolve,reject){
//             reject('có lỗi');
//         });
//     })
//     .then(function(){
//         console.log(3);
//         return sleep(1000);
//     })
//     .catch(function(err){ //Bẫy bắt  (bắt  lỗi  , bẫy  lỗi)
//                 console.log(err);
//             })

// 1.Promise.resolve
// 2.Promise.reject
// 3.Promise.all

var promise = new Promise(  
    function(resolve, reject){
    //    resolve('success!');
       reject('err!');
    });
    promise
        .then(function(success ){
            console.log('success:',success);
        })
        .catch(function(err){
            console.log('err:',err);
        })
        .finally(function(){
            console.log('Done');
        })

var promise1 = new Promise(  
    function(resolve){
        setTimeout(function(){
            resolve([1]);
        }, 2000);
    }  
); 
var promise2 = new Promise(  
    function(resolve){
        setTimeout(function(){
            resolve([2,3]);
        }, 5000);
    }  
);
Promise.all([promise1,promise2])
    .then(function([result1, result2]){
        console.log(result1.concat(result2));
    });

