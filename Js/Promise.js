var users = [
    {
        id: 1,
        name: 'John Doe'
    },
    {
        id: 2,
        name: 'John Moeller'
    },
    {
        id: 3,
        name: 'John T'
    },
];
var comments = [
    {
        id: 1,
        user_id:1,
        content: 'This is a comment 1'
    },
    {
        id: 2,
        user_id:2,
        content: 'This is a comment 2'
    },
    {
        id: 3,
        user_id:1,
        content: 'OKe'
    }
];

//1.Lấy comments
//2.Từ comments lấy ra user_id
//3.Từ user_id lấy ra user tương ứng

function getComments(){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve(comments);
        },1000);
});
}
function getUserByIds(userIds){
    return new Promise(function(resolve){
        var results = users.filter(function(user){  //mảng
            return userIds.includes(user.id);       //mảng
        });
        setTimeout (function(){
            resolve(results);
        }, 1000);
    },1000);
}
//Callbacks hell
//Promise hell
//Async / Await

getComments()
    .then(function(comments){                       //promise
        var userIds = comments.map(function(comment){  //mảng
            return comment.user_id;
        })
    return getUserByIds(userIds)
        .then(function(users){                  //promise
            return {
                users: users,
                comments: comments,
            };
        });
    })
    .then(function(data){
        var commentBlock = document.getElementById('comment-block'); //dom
        var html ='';
        data.comments.forEach(function(comment){
            var user = data.users.find(function(user){  //mảng
                return user.id === comment.user_id;
            });
            html += `<li>${user.name}: ${comment.content}</li>`  //chuỗi
        });
        commentBlock.innerHTML = html;

    });


 