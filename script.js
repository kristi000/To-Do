var tasks = [];
let taskadd = document.getElementById("add");

function addTask() {
  var inputValue = document.getElementById("taskInput").value;
  tasks.push({
    task: inputValue,
    id: 1,
  });
  taskInput.value = "";
}

const f = ["do home wordk", ""];
const v = [
  {
    task: "do homeowrk",
    id: 1,
  },
  {},
  {},
  {},
];

function showTasks() {
  var list = document.getElementById("list");
  list.innerHTML = "";
  for (var i = 0; i < tasks.length; i++) {
    const btnCont = document.createElement("div");
    var item = document.createElement("li");
    var button = document.createElement("button");
    button.innerHTML = "Remove";
    button.addEventListener("click", removeTask.bind(item));
    var todoText = document.createElement("input");
    todoText.setAttribute("type", "text");
    todoText.setAttribute("value", tasks[i].task);
    todoText.setAttribute("id", "todoText");
    todoText.setAttribute("disabled", "true");

    const editButton = document.createElement("button");
    editButton.innerHTML = "Edit";
    editButton.addEventListener("click", function () {
      todoText.removeAttribute("disabled");
      todoText.focus();
      todoText.addEventListener("blur", function () {
        todoText.setAttribute("disabled", "true");
      });
    });

    todoText.innerHTML = tasks[i].task;
    item.appendChild(todoText);
    btnCont.appendChild(editButton);
    btnCont.appendChild(button);
    list.appendChild(item);
    item.appendChild(btnCont);
  }
}
taskadd.addEventListener("click", function (event) {
  addTask();
  showTasks();

  event.preventDefault();
});

console.log(list.length);

console.log(taskInput.value);

function removeTask() {
  var index = tasks.indexOf(this.innerHTML);
  console.log();

  tasks.splice(index, 1);
  this.remove();

  console.log(this);
  // tasks = [];
}
