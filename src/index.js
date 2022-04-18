import './style.css';

const autorun = (() => {
  const taskBtn = document.getElementById('taskBtn');
  taskBtn.onclick = openTaskForm;
})();

function task(title, description, dueDate, priority) {
  return {title, description, dueDate, priority}
}

function project(name) {
  const arr = [];
  function addTask(task) {
    arr.push(task);
  }
  function getArr() {
    return arr;
  }
  return {addTask, getArr};
}

function openTaskForm() {
  const tint = document.querySelector('.tint');
  tint.classList.toggle('dim');
  const form = document.querySelector('.form');
  form.classList.toggle('hideform');
}