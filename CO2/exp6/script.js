// ======================================
// SMART TODO LIST
// ======================================

let todos = JSON.parse(localStorage.getItem("todos")) || [];

let currentFilter = "all";
let editingId = null;

// ===================
// Elements
// ===================

const input = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");

const itemsLeft = document.getElementById("items-left");

const clearBtn = document.getElementById("clear-completed");

const dateDisplay = document.getElementById("date-display");

const searchInput = document.getElementById("search-input");

const priorityInput = document.getElementById("priority");

const dueDateInput = document.getElementById("due-date");

const progressFill = document.getElementById("progress-fill");

const progressText = document.getElementById("progress-text");

const totalCount = document.getElementById("total-count");

const completedCount = document.getElementById("completed-count");

const pendingCount = document.getElementById("pending-count");

const themeToggle = document.getElementById("theme-toggle");

// ===================
// Date & Time
// ===================

function updateDate(){

dateDisplay.innerHTML =
new Date().toLocaleString("en-US",{

weekday:"long",

year:"numeric",

month:"long",

day:"numeric",

hour:"2-digit",

minute:"2-digit",

second:"2-digit"

});

}

setInterval(updateDate,1000);

updateDate();

// ===================
// Save Data
// ===================

function saveTodos(){

localStorage.setItem(

"todos",

JSON.stringify(todos)

);

}

// ===================
// Add Task
// ===================

function addTodo(){

const text=input.value.trim();

if(text===""){

alert("Please enter a task!");

return;

}

todos.push({

id:Date.now(),

text:text,

completed:false,

priority:priorityInput.value,

dueDate:dueDateInput.value

});

input.value="";

dueDateInput.value="";

priorityInput.value="Medium";

saveTodos();

render();

}
// ===================
// Render Tasks
// ===================

function render(){

let filtered=[...todos];

// Search
const keyword=searchInput.value.toLowerCase();

if(keyword!==""){

filtered=filtered.filter(todo=>

todo.text.toLowerCase().includes(keyword)

);

}

// Filter

if(currentFilter==="pending"){

filtered=filtered.filter(todo=>!todo.completed);

}

if(currentFilter==="completed"){

filtered=filtered.filter(todo=>todo.completed);

}

todoList.innerHTML="";

filtered.forEach(todo=>{

const li=document.createElement("li");

li.className=`todo-item ${todo.completed ? "completed":""}`;

li.innerHTML=`

<input type="checkbox"

${todo.completed?"checked":""}

onchange="toggleTodo(${todo.id})">

<div style="flex:1;">

<div style="font-weight:600;font-size:17px;">

${todo.text}

</div>

<div style="margin-top:6px;">

<span style="padding:4px 10px;
border-radius:20px;
background:${
todo.priority==="High"
?"#ef4444":
todo.priority==="Medium"
?"#f59e0b"
:"#22c55e"
};
color:white;
font-size:12px;">

${todo.priority}

</span>

${todo.dueDate ?
`<span style="margin-left:10px;
font-size:13px;
color:#666;">
📅 ${todo.dueDate}
</span>`:""}

</div>

</div>

<div class="actions">

<button
class="btn-edit"
onclick="openEdit(${todo.id})">

Edit

</button>

<button
class="btn-delete"
onclick="deleteTodo(${todo.id})">

Delete

</button>

</div>

`;

todoList.appendChild(li);

});

updateDashboard();

}

// ===================
// Dashboard
// ===================

function updateDashboard(){

const total=todos.length;

const completed=todos.filter(t=>t.completed).length;

const pending=total-completed;

totalCount.innerText=total;

completedCount.innerText=completed;

pendingCount.innerText=pending;

itemsLeft.innerText=`${pending} item${pending!=1?"s":""} left`;

let percent=0;

if(total>0){

percent=Math.round((completed/total)*100);

}

progressFill.style.width=percent+"%";

progressText.innerText=percent+"% Completed";

// Congratulations

if(total>0 && completed===total){

document.getElementById("complete-popup").style.display="flex";

}

}
// ===================
// Toggle Complete
// ===================

function toggleTodo(id){

    todos = todos.map(todo =>

        todo.id === id

            ? { ...todo, completed: !todo.completed }

            : todo

    );

    saveTodos();

    render();

}

// ===================
// Delete Task
// ===================

function deleteTodo(id){

    if(confirm("Delete this task?")){

        todos = todos.filter(todo => todo.id !== id);

        saveTodos();

        render();

    }

}

// ===================
// Edit Task
// ===================

function openEdit(id){

    editingId = id;

    const task = todos.find(todo => todo.id === id);

    document.getElementById("edit-input").value = task.text;

    document.getElementById("edit-modal").style.display = "flex";

}

function saveEdit(){

    const newText = document.getElementById("edit-input").value.trim();

    if(newText==="") return;

    todos = todos.map(todo =>

        todo.id === editingId

            ? { ...todo, text:newText }

            : todo

    );

    saveTodos();

    closeEdit();

    render();

}

function closeEdit(){

    editingId = null;

    document.getElementById("edit-modal").style.display = "none";

}

// ===================
// Search
// ===================

searchInput.addEventListener("input", render);

// ===================
// Filter Buttons
// ===================

document.querySelectorAll(".filter-btn").forEach(button=>{

    button.addEventListener("click",(e)=>{

        document.querySelector(".filter-btn.active").classList.remove("active");

        e.target.classList.add("active");

        currentFilter = e.target.dataset.filter;

        render();

    });

});

// ===================
// Clear Completed
// ===================

clearBtn.addEventListener("click",()=>{

    todos = todos.filter(todo=>!todo.completed);

    saveTodos();

    render();

});

// ===================
// Theme Toggle
// ===================

if(localStorage.getItem("theme")==="dark"){

    document.body.classList.add("dark");

    themeToggle.innerHTML="☀ Light Mode";

}

themeToggle.addEventListener("click",()=>{

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){

        localStorage.setItem("theme","dark");

        themeToggle.innerHTML="☀ Light Mode";

    }

    else{

        localStorage.setItem("theme","light");

        themeToggle.innerHTML="🌙 Dark Mode";

    }

});

// ===================
// Buttons
// ===================

addBtn.addEventListener("click",addTodo);

input.addEventListener("keypress",(e)=>{

    if(e.key==="Enter"){

        addTodo();

    }

});

document.getElementById("save-edit").addEventListener("click",saveEdit);

document.getElementById("cancel-edit").addEventListener("click",closeEdit);

// ===================
// Initial Load
// ===================

render();