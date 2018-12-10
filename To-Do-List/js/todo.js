const todoForm = document.querySelector('#todo-form');
const todoInput = document.querySelector('#task');
const todoList = document.querySelector('#todo-list');
const inputBtn = document.querySelector('.ipt-btn');
const removeBtn = document.querySelectorAll('.rmv-btn');
const clrBtn = document.querySelector('.clr-btn');

loadEventListeners();

function loadEventListeners() {
  inputBtn.addEventListener('click', lister);
}

function markDone(e) {
  const el = e.target.parentElement;
  el.style.setProperty("text-decoration", "line-through");
}

function removeItem(e) {
  e.target.parentNode.remove(e.target);
}

function clearTasks() {
  location.reload();
}

function lister(e) {

  if (todoInput.value === '') {
    alert('Add a task');
  }

  const doneBtn = document.createElement('input')
  doneBtn.type = 'button';
  doneBtn.value = 'Done!';
  doneBtn.className = 'dn-btn';
  doneBtn.addEventListener('click', markDone);

  const rmvBtn = document.createElement('input')
  rmvBtn.type = 'button';
  rmvBtn.value = 'Remove!';
  rmvBtn.className = 'rmv-btn';
  rmvBtn.addEventListener('click', removeItem);

  const item = todoInput.value;
  const text = document.createTextNode(item);
  const li = document.createElement('li');

  li.appendChild(text);
  li.appendChild(doneBtn);
  li.appendChild(rmvBtn);
  todoList.appendChild(li);

  e.preventDefault();
}
