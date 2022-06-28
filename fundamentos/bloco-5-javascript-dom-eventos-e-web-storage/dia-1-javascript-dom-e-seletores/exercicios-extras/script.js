let titulo = document.querySelector("h1")
titulo.style.backgroundColor = 'limegreen'
let tasks = document.querySelector('.emergency-tasks')
tasks.style.backgroundColor = 'pink'
let tasks2 = document.querySelectorAll(".emergency-tasks h3")
for(let task of tasks2) {
  task.style.backgroundColor = "purple"
}
let noTasks = document.querySelector('.no-emergency-tasks')
noTasks.style.backgroundColor ='yellow'
let noTasksH3 = document.querySelectorAll('.no-emergency-tasks h3')
for(let task of noTasksH3) {
  task.style.backgroundColor ='black'
}
let footer = document.querySelector('#footer-container')
footer.style.backgroundColor = 'darkslategray'