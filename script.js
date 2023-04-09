var tasks = [];
let taskadd = document.getElementById("add");

function addTask() {
  var inputValue = document.getElementById("taskInput").value;
  tasks.push(inputValue);
}
console.log(tasks);

function showTasks() {
  var list = document.getElementById("list");
  list.innerHTML = "";
  for (var i = 0; i < tasks.length; i++) {
    var item = document.createElement("li");
    item.innerHTML = tasks[i];
    list.appendChild(item);
  }
}
taskadd.addEventListener("click", function () {
  addTask();
  showTasks();
});
console.log(taskadd);
console.log(taskInput.value);
