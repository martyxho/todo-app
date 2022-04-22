import { changeList } from ".";

const autorun = (() => {
  const taskBtn = document.getElementById('taskBtn');
  taskBtn.addEventListener('click', openForm.bind(null, 'task-form'));
  const listBtn = document.getElementById('listBtn');
  listBtn.addEventListener('click', openForm.bind(null, 'list-form'));
  const taskCancel = document.getElementById('task-cancel');
  taskCancel.addEventListener('click', closeForm.bind(null, 'task-form'));
  const listCancel = document.getElementById('list-cancel');
  listCancel.addEventListener('click', closeForm.bind(null, 'list-form'));
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
  changeIndex(i);
  openForm('task-form'); 
}

function changeIndex(i) {
  const del = document.getElementById('task-delete');
  del.dataset.i = i;
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

function resetForm(id) {
  const div = document.getElementById(id);
  const form = div.firstElementChild;
  form.reset();
}

function clear(div) {
  while(div.firstChild) {
    div.removeChild(div.firstChild);
  }
}



export { displayTasks, displayLists, notifyRequired, removeRequired, closeForm };