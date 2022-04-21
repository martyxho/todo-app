import './style.css';
import { displayTasks , displayLists } from './dom';

const lists = (() => {
  const listObj = {};
  listObj['default'] = list('default');
  let currentList = listObj['default'];

  const getList = () => listObj;
  const addList = (name, list) => {
    listObj[name] = list;
  };
  const getCurrent = () => currentList;
  const changeCurrent = (name) => {
    currentList = listObj[name];
  };
  return {getList, addList, getCurrent, changeCurrent};
})();

const calls = (() => {
  function callDLists() {
    displayLists(lists.getList());
  }
  function callDTasks() {
    displayTasks(lists.getCurrent().getArr());
  }
  return { callDLists, callDTasks };
})();

const autorun = (() => {
  const submit = document.getElementById('submit');
  submit.onclick = addTask;
  const create = document.getElementById('list-create');
  create.onclick = addList;
  const task1 = task('laundry', 'notes', '2022-12-23', 'normal');
  const task2 = task('sushi', 'notes', '2022-06-27', 'high');
  lists.getCurrent().addTask(task1);
  lists.getCurrent().addTask(task2);
  const newList = list('sushi');
  lists.addList('sushi', newList);
  calls.callDLists();
  calls.callDTasks();
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
  return {addTask, getArr};
}

function changeList(prop) {
  lists.changeCurrent(prop);
  calls.callDTasks();
}

function addList() {
  const name = getValue('list-name');
  const newList = list(name);
  lists.addList(name, newList);
  calls.callDLists();
}

function addTask() {
  const title = getValue('title');
  const notes = getValue('notes');
  const dueDate = getValue('due-date');
  const priority = getValue('priority');
  const newTask = task(title, notes, dueDate, priority);
  lists.getCurrent().addTask(newTask);
  calls.callDTasks();
}

function getValue(id) {
  return document.getElementById(id).value;
}



export { changeList };