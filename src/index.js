import './style.css';
import { displayTasks , displayLists, notifyRequired, removeRequired, closeForm, setListName } from './dom';

const lists = (() => {
  const listObj = {};
  listObj['default'] = list('default');
  let currentList = listObj['default'];
  setListName('default');
  const getList = () => listObj;
  const addList = (name, list) => {
    listObj[name] = list;
  };
  const getCurrent = () => currentList;
  const changeCurrent = (name) => {
    currentList = listObj[name];
  };
  function changeListName(name, newName) {
    delete Object.assign(listObj, {[newName]: listObj[name]})[name];
    console.log(listObj);
  }
  return {getList, addList, getCurrent, changeCurrent, changeListName};
})();

const calls = (() => {
  function dLists() {
    displayLists(lists.getList());
  }
  function dTasks() {
    displayTasks(lists.getCurrent().getArr());
  }
  return { dLists, dTasks };
})();

const autorun = (() => {
  const taskCreate = document.getElementById('task-create');
  taskCreate.onclick = addTask;
  const listCreate = document.getElementById('list-create');
  listCreate.onclick = addList;
  const taskDelete = document.getElementById('task-delete');
  taskDelete.addEventListener('click', deleteTask);
  const task1 = task('laundry', 'notes', '2022-12-23', 'normal');
  const task2 = task('sushi', 'notes', '2022-06-27', 'high');
  lists.getCurrent().addTask(task1);
  lists.getCurrent().addTask(task2);
  const newList = list('sushi');
  lists.addList('sushi', newList);
  calls.dLists();
  calls.dTasks();
})();


function task(title, notes, dueDate, priority) {
  return {title, notes, dueDate, priority}
}

function list(name) {
  const arr = [];
  function addTask(task) {
    arr.push(task);
  }
  function getArr() {
    return arr;
  }
  function delTask(i) {
    arr.splice(i, 1);
  }
  return {addTask, getArr, delTask};
}

function changeList(prop) {
  lists.changeCurrent(prop);
  calls.dTasks();
}

function addList() {
  const name = getValue('list-name').trim();
  if(!name) {
    notifyRequired('list-name');
    return;
  }
  const newList = list(name);
  lists.addList(name, newList);
  calls.callDLists();
  changeList(name);
  removeRequired();
  closeForm('list-form');
}

function addTask() {
  const title = getValue('title').trim();
  if (!title) {
    notifyRequired('title');
    return;
  }
  const notes = getValue('notes');
  const dueDate = getValue('due-date');
  const priority = getValue('priority');
  const newTask = task(title, notes, dueDate, priority);
  lists.getCurrent().addTask(newTask);
  resetTasks();
}

function deleteTask(e) {
  const i = e.target.dataset.i;
  lists.getCurrent().delTask(i);
  resetTasks();
}

function resetTasks() {
  calls.dTasks();
  removeRequired();
  closeForm('task-form');
}

function getValue(id) {
  return document.getElementById(id).value;
}

function changeListName(name, newName) {
  lists.changeListName(name, newName);
  calls.dLists();
}


export { changeList, changeListName };