var menuIcon = document.querySelector(".menu-icon");
var sidebar = document.querySelector(".sidebar");
var container = document.querySelector(".container");


// create the onclikck event, 
menuIcon.onclick = function(){
    sidebar.classList.toggle("small-sidebar");
    container.classList.toggle("large-container");  
}


//<!-----------Tasklist------------> 
//This task list was inspired and taught based on the knowledge I have learned from this unit and 
// some external online coding learning plarforms, for example youtube channel 
//CodingNepal. (2022, February 21). Create A Todo List App in HTML CSS & JavaScript | Todo App in JavaScript. Retrieved from www.youtube.com website: https://www.youtube.com/watch?v=2QIMUBilooc
// But I have clearly understood the code that they taught 
const taskInput = document.querySelector(".task-input input"),
filters = document.querySelectorAll(".filters span"),
clearAll = document.querySelector(".clear-btn"),
taskBox = document.querySelector(".task-box");
// getting localstorage task list
let editId,
isEditTask = false,
todos = JSON.parse(localStorage.getItem("todo-list"));

filters.forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelector("span.active").classList.remove("active");
        btn.classList.add("active");
        showTodo(btn.id);
    });
});
// set the priority selection, choose from the high to low from the array (for this priority funtion, I was trying to 
// use th priority queue implementation like this, to acheive one of the secondary features of task management:Users should be able to view tasks 
//based on urgency and importance (calculated by system). However, it was not working well in my code, thus I deleted, but just
// want to clarify that I was trying to achieved it. )
//enqueue(item, priority = 0) {
//     priority = Math.max(Number(priority), 0);
//     const element = { item, priority };

//     if (
//       this.isEmpty ||
//       element.priority <= this.#list[this.size - 1].priority
//     ) {
//       this.#list.push(element);
//     } else {
//       for (let index in this.#list) {
//         if (element.priority > this.#list[index].priority) {
//           this.#list.splice(index, 0, element);
//           break;
//         }
//       }
//     }

//     return this.size;
//   }

//   dequeue() {
//     return this.isEmpty ? null : this.#list.shift().item;
//   }

//   toString() {
//     return this.#list.map((el) => el.item).toString();
//   }
// }


$('.priority-select').on('change', function() {
  var $el = $(this);
  var selectedPriority = $el.val();
  $el.attr('data-priority', selectedPriority);
});
// if the todo list status is completed, set the isCompelted value to be checked
function showTodo(filter) {
    let liTag = "";
    if(todos) {
        todos.forEach((todo, id) => {
            let completed = todo.status == "completed" ? "checked" : ""; //the check box of the completion status
            if(filter == todo.status || filter == "all") { 
                liTag += `<li class="task">
                            <label for="${id}">
                                <input onclick="updateStatus(this)" type="checkbox" id="${id}" ${completed}>
                                <p class="${completed}">${todo.name}</p>
                            </label>

                           <div class="settings"> 
                           <select class="priority-select">
                           <option value="">Select a Priority</option>
                           <option value="high">high</option>
                           <option value="low">low</option>
                           <option value="medium">medium</option>
                           </select>                              
                           <i onclick="showMenu(this)" class="fa-solid fa-ellipsis"></i>
                           <ul class="task-menu">
                          <li onclick='editTask(${id}, "${todo.name}")'><i class="fa-solid fa-pen-to-square"></i>Edit</li>
                          <li onclick='deleteTask(${id}, "${filter}")'><i class="fa-solid fa-trash-can"></i>Delete</li>

                         </ul>
                         </div>
                        </li>`;
            }// put the priority selection box besides the menu, inside the menu, is the edit and delete function
        });
    }
  // if li isn't empty, insert this value inside the taskBox, else insert span
    taskBox.innerHTML = liTag || `<span>You don't have any task here</span>`;
    let checkTask = taskBox.querySelectorAll(".task");
    !checkTask.length ? clearAll.classList.remove("active") : clearAll.classList.add("active");
    taskBox.offsetHeight >= 300 ? taskBox.classList.add("overflow") : taskBox.classList.remove("overflow");
}
showTodo("all");
// getting task meue div
function showMenu(selectedTask) {
    let menuDiv = selectedTask.parentElement.lastElementChild;
    menuDiv.classList.add("show");
    document.addEventListener("click", e => {
      // removing the show class from the task menu on the document click
        if(e.target.tagName != "I" || e.target != selectedTask) {
            menuDiv.classList.remove("show");
        }
    });
}
//getting the paragraph that contains the task name
function updateStatus(selectedTask) {
    let taskName = selectedTask.parentElement.lastElementChild;
    if(selectedTask.checked) {
        taskName.classList.add("checked");//updating the status of the selected task to completed
        todos[selectedTask.id].status = "completed";
    } else {
        taskName.classList.remove("checked");
        todos[selectedTask.id].status = "pending";
    }
    localStorage.setItem("todo-list", JSON.stringify(todos)) // localStorage of the completeion status of the todo list, so the 
    // the status remain the same after refresh
}
// create the edittask function so users could edit the task name that they selected
function editTask(taskId, textName) {
    editId = taskId;
    isEditTask = true;
    taskInput.value = textName;
    taskInput.focus();
    taskInput.classList.add("active");
}
//removing delete task from the array(todos)
function deleteTask(deleteId, filter) {
    isEditTask = false;
    todos.splice(deleteId, 1);
    localStorage.setItem("todo-list", JSON.stringify(todos));
    showTodo(filter);
}
//removing all task from the array(todos)
clearAll.addEventListener("click", () => {
    isEditTask = false;
    todos.splice(0, todos.length);
    localStorage.setItem("todo-list", JSON.stringify(todos));//loaclStorage of the clear all btn
    showTodo()
});

taskInput.addEventListener("keyup", e => {
    let userTask = taskInput.value.trim();
    if(e.key == "Enter" && userTask) {
      //if isEditTask isn't true, 
        if(!isEditTask) {
          //if the todos isn't exist, pass an empty array
            todos = !todos ? [] : todos;
            let taskInfo = {name: userTask, status: "pending"};
            todos.push(taskInfo);//adding new tasks to todos
        } else {
            isEditTask = false;
            todos[editId].name = userTask;
        }
        taskInput.value = "";
        localStorage.setItem("todo-list", JSON.stringify(todos));//set the localStorage, so the tasks 
        //that we added on could remain on the list after we refresh
        showTodo(document.querySelector("span.active").id);
    }
});