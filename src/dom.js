import { changeList, changeListName } from ".";

const autorun = (() => {
  const taskBtn = document.getElementById('taskBtn');
  taskBtn.addEventListener('click', openTaskForm.bind(null, 'task-form'));
  const listBtn = document.getElementById('listBtn');
  listBtn.addEventListener('click', openForm.bind(null, 'list-form'));
  const taskCancel = document.getElementById('task-cancel');
  taskCancel.addEventListener('click', closeForm.bind(null, 'task-form'));
  const listCancel = document.getElementById('list-cancel');
  listCancel.addEventListener('click', closeForm.bind(null, 'list-form'));
  const listName = document.getElementById('list-name-info');
  listName.addEventListener('input', updateListName);
})();

function updateListName(e) {
  const name = e.target.dataset.name;
  const newName = e.target.value;
  changeListName(name, newName);
  setListName(newName, 'list-name-info');
}

function displayLists(obj) {
  const ul = document.getElementById('list-ul');
  clear(ul);
  for (const prop in obj) {
    const li = document.createElement('li');
    const div = document.createElement('div');
    div.id = prop;
    div.addEventListener('click', listClick.bind(null, prop));
    const p = document.createElement('p');
    p.textContent = prop;
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.textContent = 'Edit';
    btn.addEventListener('click', editClick.bind(null, prop));
    div.appendChild(p);
    div.appendChild(btn);
    li.appendChild(div);
    ul.appendChild(li);
  }
}

function displayTasks(arr) {
  const taskBox = document.getElementById('task-box');
  clear(taskBox);
  arr.forEach((e, i) => {
    const div = document.createElement('div');
    div.classList.add('task');
    div.addEventListener('click', displayDetails.bind(null, e, i));
    const title = document.createElement('p');
    title.textContent = e.title;
    div.appendChild(title);
    taskBox.appendChild(div);
  });
}

function displayDetails(e, i) {
  changeValue('title', e.title);
  changeValue('notes', e.notes);
  changeValue('due-date', e.dueDate);
  changeValue('priority', e.priority);
  changeTaskIndex(i);
  openForm('task-form'); 
}

function changeTaskIndex(i) {
  const del = document.getElementById('task-delete');
  del.dataset.i = i;
}
function changeValue(id, value) {
  const input = document.getElementById(id);
  input.value = value;
}

function openTaskForm(id) {
  const del = document.getElementById('task-delete');
  del.classList.toggle('hide');
  toggleForm(id);
}
function openForm(id) {
  toggleForm(id);
}

function closeForm(id) {
  toggleForm(id);
  resetForm(id);
  removeRequired();
}

function toggleForm(id) {
  const tint = document.querySelector('.tint');
  tint.classList.toggle('dim');
  const form = document.getElementById(id);
  form.classList.toggle('hide');
}

function resetForm(id) {
  const div = document.getElementById(id);
  const form = div.querySelector('form');
  form.reset();
}

function notifyRequired(inputId) {
  const input = document.getElementById(inputId);
  input.classList.toggle('red');
  const div = input.parentElement;
  div.classList.toggle('required');
}

function removeRequired() {
  const red = document.querySelector('.red');
  if(red) {
    red.classList.toggle('red');
  } else {
    return;
  }
  const div = document.querySelector('.required');
  div.classList.toggle('required');
}



function listClick(prop) {
  setListName(prop, 'list-name-info');
  changeList(prop);
}

function editClick(prop) {
  setListName(prop, 'edit-list-name');
  openForm('edit-form');
}


function setListName(name, id) {
  const input = document.getElementById(id);
  input.value = name;
  input.dataset.name = name;
}

function clear(div) {
  while(div.firstChild) {
    div.removeChild(div.firstChild);
  }
}



export { displayTasks, displayLists, notifyRequired, removeRequired, closeForm, setListName };