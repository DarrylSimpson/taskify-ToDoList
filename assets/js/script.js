//var buttonEl = document.querySelector("#save-task");

var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");


var createTaskHandler = function(event) {

    event.preventDefault();

    var taskNameInput = document.querySelector("input[name= 'task-name']").value;
    var taskTypeInput = document.querySelector("select[name='task-type']").value;

    //create list item
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    //create div to hold task info and add to list item
    var taskInfoEl = document.createElement("div");
    //give it a class name
    taskInfoEl.className = "task-info";
    //add HTML content to div
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskNameInput + "</span>";

    listItemEl.appendChild(taskInfoEl);

    //add entire list item to list
    tasksToDoEl.appendChild(listItemEl);


    
};

formEl.addEventListener ("submit", createTaskHandler);




//key in dynamically creating elements witht the DOM
//create a new task item/ style the new task item/ add the text/ append this element to the task list
//buttonEl.addEventListener("click", createTaskHandler);

