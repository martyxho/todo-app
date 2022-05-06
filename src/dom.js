import { changeList, changeListName } from ".";
import catImg from './assets/cat.jpg';
import pencil from './assets/pencil-outline.svg';

const autorun = (() => {
  const taskBtn = document.getElementById('taskBtn');
  taskBtn.addEventListener('click', openForm.bind(null, 'task-form'));
  const listBtn = document.getElementById('listBtn');
  listBtn.addEventListener('click', openForm.bind(null, 'list-form'));
  const taskCancel = document.getElementById('task-cancel');
  taskCancel.addEventListener('click', closeForm.bind(null, 'task-form'));
  const eTaskCancel = document.getElementById('e-task-cancel');
  eTaskCancel.addEventListener('click', closeForm.bind(null, 'e-task-form'));
  const doneClose = document.getElementById('close');
  doneClose.addEventListener('click', closeForm.bind(null, 'd-task-form'));
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
    div.addEventListener('click', listClick.bind(null, prop));
    const p = document.createElement('p');
    p.textContent = prop;
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.classList = 'editBtn';
    btn.addEventListener('click', editClick.bind(null, prop));
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

function displayTasks(arr, id, a) {
  const taskUl = document.getElementById(id);
  clear(taskUl);
  arr.forEach((e, i) => {
    const li = document.createElement('li');
    const div = document.createElement('div');
    div.classList = 'task';
    div.addEventListener('click', displayDetails.bind(null, e, i, a));
    const title = document.createElement('p');
    title.textContent = e.title;
    if (e.priority == 'high') {
      title.classList = 'title high';
    } else {
      title.classList = 'title';
    }
    const date = document.createElement('p');
    date.textContent = e.dueDate;
    date.classList = 'date';
    div.appendChild(title);
    div.appendChild(date);
    li.appendChild(div);
    taskUl.appendChild(li);
  });
}

function displayDetails(e, i, a) {
  changeValue(`${a}-title`, e.title);
  changeValue(`${a}-notes`, e.notes);
  changeValue(`${a}-due-date`, e.dueDate);
  changeValue(`${a}-priority`, e.priority);
  changeTaskIndex(i);
  openForm(`${a}-task-form`); 
}

function changeTaskIndex(i) {
  const del = document.getElementById('e-task-delete');
  del.dataset.i = i;
  const save = document.getElementById('e-task-save');
  save.dataset.i = i;
  const done = document.getElementById('e-task-done');
  done.dataset.i = i;
  const unmark = document.getElementById('unmark');
  unmark.dataset.i = i;
  const doneDel = document.getElementById('d-delete');
  doneDel.dataset.i = i;
}

function changeValue(id, value) {
  const input = document.getElementById(id);
  input.value = value;
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
  input.classList.add('red');
  const div = input.parentElement;
  div.classList.add('required');
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