var buttonEl = document.querySelector("#save-task");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var createTaskHandler = function() {
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    listItemEl.textContent = "This is a new task.";
    tasksToDoEl.appendChild(listItemEl);
}

//key in dynamically creating elements witht the DOM
//create a new task item/ style the new task item/ add the text/ append this element to the task list
buttonEl.addEventListener("click", createTaskHandler); 

