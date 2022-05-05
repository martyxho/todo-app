import './style.css';
import { displayTasks , displayLists, notifyRequired, removeRequired, closeForm, setListName } from './dom';

const lists = (() => {
  let listObj = {};
  listObj['default'] = list('default');
  let currentList = listObj['default'];
  setListName('default', 'list-name-info');
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
  function listDel(name) {
    delete listObj[name];
  }
  function load(obj) {
    listObj = obj;
    for (const prop in listObj) {
      currentList = listObj[prop];
      setListName(prop, 'list-name-info');
      break;
    }
  }

  return {getList, addList, getCurrent, changeCurrent, changeListName, listDel, load };
})();

const storage = (() => {
  function storageAvailable(type) {
    var storage;
    try {
        storage = window[type];
        var x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch(e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            (storage && storage.length !== 0);
    }
  }
  function save() {
    if(storageAvailable('localStorage')) {
      const listObj = lists.getList();
      const newObj = {};
      for (const prop in listObj) {
        const obj = [];
        obj.push(listObj[prop].getArr());
        obj.push(listObj[prop].getDoneArr());
        newObj[prop] = obj;
      }
      localStorage.setItem('listObj', JSON.stringify(newObj));
    } else {
      console.log('local storage unavailable');
    }
  }
  function load() {
    const listObj = JSON.parse(localStorage.getItem('listObj'));
    if(!listObj) {
      return;
    }
    const newObj = {};
    for (const prop in listObj) {
      const newList = list(prop);
      listObj[prop][0].forEach(e => {
        const newTask = task(e.title, e.notes, e.dueDate, e.priority);
        newList.addTask(newTask);
      });
      listObj[prop][1].forEach(e => {
        const newTask = task(e.title, e.notes, e.dueDate, e.priority);
        newList.addDone(newTask);
      });
      newObj[prop] = newList;
    }
    lists.load(newObj);
  }

  return {save, load};
})();

const calls = (() => {
  function dLists() {
    displayLists(lists.getList());
    storage.save();
  }
  function dTasks() {
    displayTasks(lists.getCurrent().getArr(), 'task-ul', 'e');
    displayTasks(lists.getCurrent().getDoneArr(), 'done-ul', 'd');
    storage.save();
  }
  return { dLists, dTasks };
})();

const autorun = (() => {
  const taskCreate = document.getElementById('task-create');
  taskCreate.onclick = addTask;
  const eTaskSave = document.getElementById('e-task-save');
  eTaskSave.onclick = saveTask;
  const taskDone = document.getElementById('e-task-done');
  taskDone.onclick = markDone;
  const listCreate = document.getElementById('list-create');
  listCreate.onclick = addList;
  const taskDelete = document.getElementById('e-task-delete');
  taskDelete.addEventListener('click', deleteTask);
  const editSave = document.getElementById('edit-save');
  editSave.addEventListener('click', saveEdit);
  const editDelete = document.getElementById('edit-delete');
  editDelete.addEventListener('click', listDel);
  const doneUnmark = document.getElementById('unmark');
  doneUnmark.addEventListener('click', unmarkDone);
  storage.load();
  calls.dLists();
  calls.dTasks();
})();

function task(title, notes, dueDate, priority) {
  return {title, notes, dueDate, priority}
}

function list(name) {
  const taskArr = [];
  const doneArr = [];
  function addTask(task) {
    taskArr.push(task);
    sort(taskArr);
  }
  function addDone(task) {
    doneArr.push(task);
    sort(doneArr);
  }
  function saveTask(i, task) {
    taskArr.splice(i, 1, task);
    sort(taskArr);
  }
  function sort(arr) {
    arr.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
  }
  function getArr() {
    return taskArr;
  }
  function getDoneArr() {
    return doneArr;
  }
  function delTask(i) {
    taskArr.splice(i, 1);
  }
  function markDone(i) {
    doneArr.push(taskArr[i]);
    delTask(i);
    sort(doneArr);
  }
  function unmark(i) {
    taskArr.push(doneArr[i]);
    doneArr.splice(i, 1);
    sort(taskArr);
    sort(doneArr);
  }

  return {addTask, getArr, delTask, saveTask, getDoneArr, addDone, markDone, unmark};
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
  calls.dLists();
  changeList(name);
  removeRequired();
  closeForm('list-form');
}

function addTask() {
  const newTask = createNewTask(true);
  if(newTask) {
    lists.getCurrent().addTask(newTask);
    resetTasks('task-form');
  }
}

function createNewTask(add) {
  let t, n, d, p;
  if (add) {
    t = 'title', n = 'notes', d = 'due-date', p = 'priority';
  } else {
    t = 'e-title', n = 'e-notes', d = 'e-due-date', p = 'e-priority';
  }

  const title = getValue(t).trim();
  if (!title) {
    notifyRequired(t);
    return false;
  }
  const notes = getValue(n);
  const dueDate = getValue(d);
  const priority = getValue(p);
  return task(title, notes, dueDate, priority);
}

function saveTask(e) {
  const i = e.target.dataset.i;
  const newTask = createNewTask(false);
  lists.getCurrent().saveTask(i, newTask);
  resetTasks('e-task-form');
}

function deleteTask(e) {
  const i = e.target.dataset.i;
  lists.getCurrent().delTask(i);
  resetTasks('e-task-form');
}

function markDone(e) {
  const i = e.target.dataset.i;
  lists.getCurrent().markDone(i);
  resetTasks('e-task-form');
}

function unmarkDone(e) {
  const i = e.target.dataset.i;
  lists.getCurrent().unmark(i);
  resetTasks('d-task-form');
}

function resetTasks(id) {
  calls.dTasks();
  removeRequired();
  closeForm(id);
}

function getValue(id) {
  return document.getElementById(id).value;
}

function changeListName(name, newName) {
  if (name == newName) {
    return;
  }
  lists.changeListName(name, newName);
  calls.dLists();
}

function saveEdit() {
  const input = document.getElementById('edit-list-name');
  const name = input.dataset.name;
  const newName = input.value;
  changeListName(name, newName);
  closeForm('edit-form');
}

function listDel() {
  const input = document.getElementById('edit-list-name');
  const name = input.dataset.name;
  lists.listDel(name);
  calls.dLists();
  closeForm('edit-form');
}

export { changeList, changeListName };