const autorun = (() => {
  const taskBtn = document.getElementById('taskBtn');
  taskBtn.onclick = openTaskForm;
})();

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
  const taskDetails = document.getElementById('task-details');
  clear(taskDetails);
  const dueDate = createDiv('Due Date: ', e, 'dueDate');
  const notes = createDiv('Notes: ', e, 'notes');
  const priority = createDiv('Priority: ', e, 'priority');
  taskDetails.appendChild(dueDate);
  taskDetails.appendChild(notes);
  taskDetails.appendChild(priority);
  taskDetails.classList.remove('hide');
}

function createDiv(title, e, key) {
  const div = document.createElement('div');
  const p = document.createElement('p');
  p.textContent = title + e[key];
  div.appendChild(p);
  return div;
}
function openTaskForm() {
  const tint = document.querySelector('.tint');
  tint.classList.toggle('dim');
  const form = document.querySelector('.form');
  form.classList.toggle('hide');
}

function clear(div) {
  while(div.firstChild) {
    div.removeChild(div.firstChild);
  }
}

export { displayTasks };