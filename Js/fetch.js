//1 .Front end: Xây dựng giao diện người dùng
//2. Back end: Xây dựng logic xử lý:
//+ Cơ sở dữ liệu
// API (URL): => Application programming interface
// Cổng giao tiếp giữa các phần mềm

// Back end: Trả 1 API => Fetch => Json/XML
// => JSON.parse => JavaScript types
//Render ra giao diện với HTML


//api = > rESponse => promise
var postAPI = 'http://localhost:3000/courses';

fetch(postAPI)
    .then(function(response){
        return response.json();  //JSON.parse => JavaScript.type
    })
    .then(function(courses){
        console.log(courses);
    })
    .catch(function(err){
        console.log('có lỗi!');
    });

// -Json sever: API server (Fake) / Mock API --> OK
// - CRUD:
//          - create: Tạo mới ->Post
//          - read: Lấy dữ liệu - get
//          - update: Sửa - put/patch
//          - delete: Xóa - delete
// - postman: API