import { changeList, changeListName } from ".";
import catImg from './assets/cat.jpg';
import pencil from './assets/pencil-outline.svg';

const autorun = (() => {
  const taskBtn = document.getElementById('taskBtn');
  taskBtn.addEventListener('click', openTaskForm);
  const listBtn = document.getElementById('listBtn');
  listBtn.addEventListener('click', callOpen);
  const taskCancel = document.getElementById('task-cancel');
  taskCancel.addEventListener('click', closeForm.bind(null, 'task-form'));
  const listCancel = document.getElementById('list-cancel');
  listCancel.addEventListener('click', closeForm.bind(null, 'list-form'));
  const listName = document.getElementById('list-name-info');
  listName.addEventListener('input', updateListName);
  const body = document.querySelector('body');
  body.addEventListener('keydown', preventEnter);
})();

function preventEnter(e) {
  if (e.target.id == 'notes') {
    return;
  } else if (e.keyCode == 13) {
    e.preventDefault();
  }
}

const loadImg = (() => {
  const cat = document.querySelector('.cat');
  cat.src = catImg;
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
    div.classList = 'list';
    div.addEventListener('click', function(e) {listClick(e, prop)});
    const p = document.createElement('p');
    p.textContent = prop;
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.classList = 'editBtn';
    btn.addEventListener('click', function(e) {editClick(e, prop)});
    const img = document.createElement('img');
    img.src = pencil;
    img.classList = 'pencil';
    btn.appendChild(img);
    div.appendChild(p);
    div.appendChild(btn);
    li.appendChild(div);
    ul.appendChild(li);
  }
}

function displayTasks(arr) {
  const taskUl = document.getElementById('task-ul');
  clear(taskUl);
  arr.forEach((e, i) => {
    const li = document.createElement('li');
    const div = document.createElement('div');
    div.classList = 'task';
    div.addEventListener('click', function(event) {displayDetails(event, e, i)});
    const title = document.createElement('p');
    title.textContent = e.title;
    title.classList = 'title';
    const date = document.createElement('p');
    date.textContent = e.dueDate;
    date.classList = 'date';
    div.appendChild(title);
    div.appendChild(date);
    li.appendChild(div);
    taskUl.appendChild(li);
  });
}

function displayDetails(event, e, i) {
  changeValue('title', e.title);
  changeValue('notes', e.notes);
  changeValue('due-date', e.dueDate);
  changeValue('priority', e.priority);
  changeTaskIndex(i);
  openForm('task-form'); 
  event.stopPropagation();
}

function changeTaskIndex(i) {
  const del = document.getElementById('task-delete');
  del.dataset.i = i;
}
function changeValue(id, value) {
  const input = document.getElementById(id);
  input.value = value;
}

function openTaskForm(e) {
  const del = document.getElementById('task-delete');
  del.classList.toggle('hide');
  unhideForm('task-form');
  setHide();
  e.stopPropagation();
}

function callOpen(e) {
  openForm('list-form');
  e.stopPropagation();
}

function openForm(id) {
  unhideForm(id);
  setHide();
}

function setHide() {
  const container = document.querySelector('#container');
  container.addEventListener('click', closeAllForms);
}

function unsetHide() {
  const container = document.querySelector('#container');
  container.removeEventListener('click', closeAllForms);
}

function closeAllForms(e) {
  if(e.path.some(includesForm)) {
    return;
  } else {
    hideForm();
  }
}

function includesForm(e) {
  if(e.className) {
    return e.className.includes('form');
  } else {
    return false;
  }
}

function closeForm(id) {
  unhideForm(id);
  resetForm();
  removeRequired();
}

function hideForm() {
  const tint = document.querySelector('.tint');
  tint.classList.toggle('dim');
  const hide = document.querySelector('.x');
  hide.classList.toggle('hide');
  hide.classList.toggle('x');
  resetForm();
  removeRequired();
  unsetHide();
}

function unhideForm(id) {
  const tint = document.querySelector('.tint');
  tint.classList.toggle('dim');
  const form = document.getElementById(id);
  form.classList.toggle('hide');
  form.classList.toggle('x');
}

function resetForm() {
  const forms = document.querySelectorAll('form');
  forms.forEach(e => {
    if (e.id == 'display') {
      return;
    }
    e.reset()
  });
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



function listClick(e, prop) {
  setListName(prop, 'list-name-info');
  changeList(prop);
  e.stopPropagation();
}

function editClick(e, prop) {
  setListName(prop, 'edit-list-name');
  openForm('edit-form');
  e.stopPropagation();
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