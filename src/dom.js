import { changeList } from ".";

const autorun = (() => {
  const taskBtn = document.getElementById('taskBtn');
  taskBtn.addEventListener('click', openForm.bind(null, 'task-form'));
  const listBtn = document.getElementById('listBtn');
  listBtn.addEventListener('click', openForm.bind(null, 'list-form'));
})();

function displayLists(obj) {
  const ul = document.getElementById('list-ul');
  clear(ul);
  for (const prop in obj) {
    const li = document.createElement('li');
    const div = document.createElement('div');
    div.id = prop;
    div.addEventListener('click', changeList.bind(null, prop));
    const p = document.createElement('p');
    p.textContent = prop;
    div.appendChild(p);
    li.appendChild(div);
    ul.appendChild(li);
  }
}

function displayTasks(arr) {
  const taskBox = document.getElementById('task-box');
  clear(taskBox);
  arr.forEach(e => {
    const div = document.createElement('div');
    div.classList.add('task');
    div.addEventListener('click', displayDetails.bind(null, e));
    const title = document.createElement('p');
    title.textContent = e.title;
    div.appendChild(title);
    taskBox.appendChild(div);
  });
}

function displayDetails(e) {
  changeValue('title', e.title);
  changeValue('notes', e.notes);
  changeValue('due-date', e.dueDate);
  changeValue('priority', e.priority);
  openTaskForm();
}

function changeValue(id, value) {
  const input = document.getElementById(id);
  input.value = value;
}
function openTaskForm() {
  const tint = document.querySelector('.tint');
  tint.classList.toggle('dim');
  const form = document.querySelector('.form');
  form.classList.toggle('hide');
}

function openForm(id) {
  const tint = document.querySelector('.tint');
  tint.classList.toggle('dim');
  const form = document.getElementById(id);
  form.classList.toggle('hide');
}

function clear(div) {
  while(div.firstChild) {
    div.removeChild(div.firstChild);
  }
}


export { displayTasks, displayLists };