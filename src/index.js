import './style.css';
import { displayTasks } from './dom';

const autorun = (() => {
  const submit = document.getElementById('submit');
  submit.onclick = addTask;
  const currentProject = project('default');
  const task1 = task('laundry', 'notes', '2022-12-23', 'normal');
  const task2 = task('sushi', 'notes', '2022-06-27', 'high');
  currentProject.addTask(task1);
  currentProject.addTask(task2);
  displayTasks(currentProject.getArr());
  return {currentProject};
})();

function task(title, notes, dueDate, priority) {
  return {title, notes, dueDate, priority}
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

function addTask() {
  const title = getValue('title');
  const notes = getValue('notes');
  const dueDate = getValue('due-date');
  const priority = getValue('priority');
  const newTask = task(title, notes, dueDate, priority);
  autorun.currentProject.addTask(newTask);
  displayTasks(autorun.currentProject.getArr());
}

function getValue(id) {
  return document.getElementById(id).value;
}
