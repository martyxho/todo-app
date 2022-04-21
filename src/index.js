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

const autorun = (() => {
  const submit = document.getElementById('submit');
  submit.onclick = addTask;
  const create = document.getElementById('list-create');
  create.onclick = addList;
  const task1 = task('laundry', 'notes', '2022-12-23', 'normal');
  const task2 = task('sushi', 'notes', '2022-06-27', 'high');
  lists.getCurrent().addTask(task1);
  lists.getCurrent().addTask(task2);
  displayLists(lists.getList());
  displayTasks(lists.getCurrent().getArr());
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

function addList() {
  const name = getValue('list-name');
  const newList = list(name);
  lists.addList(name, newList);
  displayLists(lists.getList());
}

function addTask() {
  const title = getValue('title');
  const notes = getValue('notes');
  const dueDate = getValue('due-date');
  const priority = getValue('priority');
  const newTask = task(title, notes, dueDate, priority);
  lists.getCurrent().addTask(newTask);
  displayTasks(lists.getCurrent().getArr());
}

function getValue(id) {
  return document.getElementById(id).value;
}
