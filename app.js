// Get elements from the DOM
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const obj1= document.getElementById("body");
const obj2= document.getElementById("btn");


function mode() {
    obj1.classList.toggle("body-dark");
    if (obj2.innerHTML== "Dark mode"){
        obj2.innerHTML="light mode";
    }
    else{
        obj2.innerHTML="Dark mode"
    }
}
// Function to add a new task
function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const li = document.createElement("li");
        li.innerHTML = `${taskText} <button onclick="removeTask(this)">Delete</button>`;
        taskList.appendChild(li);
        taskInput.value = "";
    }
}

// Function to remove a task
function removeTask(button) {
    const li = button.parentElement;
    taskList.removeChild(li);
}
