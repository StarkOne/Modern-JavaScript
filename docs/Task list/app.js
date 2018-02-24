const input = document.querySelector("#task");
const form = document.querySelector("#task-form");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");

loadEventListeners();

function loadEventListeners() {
  document.addEventListener('DOMContentLoaded', lock);
  taskList.addEventListener('click', del);
  form.addEventListener('submit', addTask);
  clearBtn.addEventListener('click', delAll);
  filter.addEventListener('keyup',filterTask);
}

function lock() {
  let string;
  if (localStorage.getItem("tasks") === null) {
    string = [];
  } else {
    string = JSON.parse(localStorage.getItem("tasks"));
  }
    string.forEach(element => {
      let li = document.createElement("li");
      li.className = "collection-item";
      li.appendChild(document.createTextNode(element));
      let a = document.createElement("a");
      a.className = "delete-item secondary-content";
      a.innerHTML = '<i class="fa fa-remove"></i>';
      li.appendChild(a);
      taskList.appendChild(li);
  });
}


function addTask(e) {
  let arr;
  if (localStorage.getItem("tasks") === null) {
    arr = [];
  } else {
    arr = JSON.parse(localStorage.getItem("tasks"));
  }
  if (input.value != "") {
      let str = input.value;
      arr.push(str);
      localStorage.setItem("tasks", JSON.stringify(arr));
      let li = document.createElement("li");
      li.className = "collection-item";
      li.appendChild(document.createTextNode(str));
      let a = document.createElement("a");
      a.className = "delete-item secondary-content";
      a.innerHTML = '<i class="fa fa-remove"></i>';
      li.appendChild(a);
      taskList.appendChild(li);
      input.value = "";
    }
  e.preventDefault();
}

function del(e) {
  e.preventDefault();
  //console.log(e.target);
  if(e.target.classList.contains('fa')) {
    e.target.parentElement.parentElement.remove();

    removeFromLock(e.target.parentElement.parentElement);
  }
}

function delAll(e) {
  // Варик
  // while(taskList.firstChild) {
  //   taskList.removeChild(taskList.firstChild);
  // }
  e.preventDefault();
  let allLi = document.querySelectorAll(".collection li");
  allLi.forEach((list) => {
    list.remove();
  });
  localStorage.clear();
}
function filterTask(e) {
  const text = e.target.value.toLowerCase();
  document.querySelectorAll(".collection-item").forEach(function(task){
    const item = task.firstChild.textContent;
    if (item.toLowerCase().indexOf(text) != -1) {
      task.style.display = "block";
    } else {
      task.style.display = "none";
    }
  });
}

function removeFromLock(tackItem) {
  let arr;
  if (localStorage.getItem("tasks") === null) {
    arr = [];
  } else {
    arr = JSON.parse(localStorage.getItem("tasks"));
  }

  arr.forEach((task, index) => {
    if (tackItem.textContent === task) {
      arr.splice(index, 1);
    }
  });
  localStorage.setItem("tasks", JSON.stringify(arr));
}