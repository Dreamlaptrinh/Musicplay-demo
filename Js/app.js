
var courseApi = 'http://localhost:3000/courses';

function start(){
    getCourses(renderCourses);

    handleCreateForm();
}
start();

function getCourses(callback){
    fetch(courseApi)
    .then(function(response){
        return response.json();
    })
    .then(callback);
}

function renderCourses(courses){
    var listCoursesBlock = document.querySelector('#list-courses');
    var htmls =  courses.map(function(course){
        return `
        <li class="course-item-${course.id}">
        <h4>${course.name}</h4>
        <p>${course.description}</p>
        <p>${course.url}</p>
        <button onclick="handleDeleteCourse(${course.id})">Xóa</button>
        </li>`;
    });
    listCoursesBlock.innerHTML = htmls.join('');
}

function handleDeleteCourse(id){
    var options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
    };
    fetch(courseApi + '/' + id, options)
        .then(function(response){
            response.json();
        })
        .then(function(){
            var courseItem = document.querySelector('.course-item-' + id)
            if (courseItem) {
                courseItem.remove();
            }
        });
}


function createCourse(data, callback){
    var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };
    fetch(courseApi, options)
        .then(function(response){
            response.json();
        })
        .then(callback);
}

//function handle createCourse
function handleCreateForm(){
    var createBtn = document.querySelector('#create');
   
    createBtn.onclick = function(){
        var name = document.querySelector('input[name="name"]').value;
        var description = document.querySelector('input[name="description"]').value;
        var url = document.querySelector('input[name="url"]').value;

        console.log(name, description,url)
        var formData = {
            name: name,
            description: description,
            url: url,
        };
        createCourse(formData, function(){
            getCourses(renderCourses);
        });
    };
}