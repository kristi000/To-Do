var tasks = [];
let taskadd = document.getElementById("add");

function addTask() {
  var inputValue = document.getElementById("taskInput").value;
  tasks.push(inputValue);
  taskInput.value = "";
}
console.log(tasks);

function showTasks() {
  var list = document.getElementById("list");
  list.innerHTML = "kari ktu";
  for (var i = 0; i < tasks.length; i++) {
    var item = document.createElement("li");
    item.innerHTML = tasks[i];
    list.appendChild(item);
    setTimeout(function () {
      item.classList.add("show");
    }, 10);
  }
}
taskadd.addEventListener("click", function () {
  addTask();
  showTasks();
});
setTimeout(function () {}, 10);
