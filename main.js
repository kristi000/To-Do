const form = document.querySelector("#task-form")
const input = document.querySelector("#task-input")
const list = document.querySelector("#tasks")

form.addEventListener("submit", (e) => {
  e.preventDefault()
  const task = input.value
  if (!task) {
    return
  }

  const task_div = document.createElement("div")
  task_div.classList.add("task")
  list.appendChild(task_div)

  const task_content_div = document.createElement("div")
  task_content_div.classList.add("content")
  task_div.appendChild(task_content_div)

  const task_input = document.createElement("input")
  task_input.classList.add("text")
  task_input.type = "text"
  task_input.value = task
  task_input.setAttribute("readonly", "readonly")
  task_content_div.appendChild(task_input)

  const task_actions = document.createElement("div")
  task_actions.classList.add("actions")
  task_div.appendChild(task_actions)

  const editbtn = document.createElement("button")
  editbtn.classList.add("edit")
  editbtn.innerHTML = "Edit"

  const delbtn = document.createElement("button")
  delbtn.classList.add("delete")
  delbtn.innerHTML = "Delete"

  const completebtn = document.createElement("button")
  completebtn.classList.add("complete")
  completebtn.innerHTML = "Complete"
  task_actions.appendChild(editbtn)
  task_actions.appendChild(delbtn)
  task_actions.appendChild(completebtn)

  delbtn.addEventListener("click", () => {
    task_div.remove()
  })

  editbtn.addEventListener("click", () => {
    if (editbtn.innerHTML == "Edit") {
      editbtn.innerHTML = "Save"
      task_input.focus()
      task_input.removeAttribute("readonly")
    } else {
      editbtn.innerHTML = "Edit"
      task_input.setAttribute("readonly", "readonly")
    }
  })
  completebtn.addEventListener("click", () => {
    task_input.style.textDecoration = "line-through"
    task_input.setAttribute("readonly", "readonly")
  })

  input.value = ""
})
