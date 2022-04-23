let form = document.querySelector('#task_form');
let taskInput = document.querySelector('#new_task');
let taskFilter = document.querySelector('#task_filter');
let taskList = document.querySelector('ul');
let clearBtn = document.querySelector('#clear_task_btn');


form.addEventListener('submit', addTask);



function addTask(e){
    if(taskInput.value === ''){
        alert('Add Your Task');
    }else{
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(taskInput.value + ' '));
        taskList.appendChild(li);
        taskInput.value = '';
    }
    e.preventDefault();
}