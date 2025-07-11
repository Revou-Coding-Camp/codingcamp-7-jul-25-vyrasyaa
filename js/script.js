const form = document.getElementById('todo-form');
const taskList = document.getElementById('task-list');
const deleteAllBtn = document.getElementById('delete-all-btn');
const filterBtn = document.getElementById('filter-btn');
const filterDate = document.getElementById('filter-date');

let todos = [];

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const task = document.getElementById('task-input').value;
  const date = document.getElementById('date-input').value;
  
  if (!task || !date) return alert("Isi tugas dan tanggalnya ya");

  todos.push({ task, date, status: "Belum"});
  renderTodos();
  form.reset();
});

function renderTodos() {
   if (todos.length === 0) {
    taskList.innerHTML = `<tr><td colspan="4" class="empty">🦄 No mission yet.</td></tr>`;
    return;
   }

   taskList.innerHTML = "";
   todos.forEach ((todo, index) => {
   const row = `
  <tr>
    <td>${todo.task}</td>
    <td>${todo.date}</td>
    <td>${todo.status}</td>
    <td>
      <button onclick="markDone(${index})">✅</button>
      <button onclick="deleteTask(${index})">💔</button>
    </td>
  </tr>
`;
  taskList.innerHTML += row;
   });
}

function markDone(index) {
    todos[index].status ="Done";
    renderTodos();
}

deleteAllBtn.onclick = () => {
    todos = []
    renderTodos ();
};