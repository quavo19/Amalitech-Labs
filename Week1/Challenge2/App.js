let todoList = [];

function createTodoItem(title, description, dueDate) {
    return {
        id: Date.now(),
        title: title,
        description: description,
        dueDate: new Date(dueDate),
        completed: false
    };
}

function renderTodoList() {
    const todoListContainer = document.getElementById('todo-list');
    todoListContainer.innerHTML = '';

    todoList.forEach(todo => {
        const todoItem = document.createElement('li');
        todoItem.classList.add('todo-item');
        if (todo.completed) {
            todoItem.classList.add('completed');
        }

        todoItem.innerHTML = `
            <div>
                <strong>${todo.title}</strong>
                <p>${todo.description || ''}</p>
                <small>Due: ${todo.dueDate.toLocaleString()}</small>
            </div>
            <div class="todo-buttons">
                <button onclick="markAsComplete(${todo.id})">${todo.completed ? 'Undo' : 'Complete'}</button>
                <button onclick="editTodoItem(${todo.id})">Edit</button>
                <button onclick="deleteTodoItem(${todo.id})">Delete</button>
            </div>

        `;

        todoListContainer.appendChild(todoItem);
    });
}

function addTodoItem() {
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const dueDate = document.getElementById('due-date').value;
    const sort = document.querySelector('.sort-buttons');

    if (title && dueDate) {
        if (editingTodoId) {
            const todo = todoList.find(todo => todo.id === editingTodoId);
            if (todo) {
                todo.title = title;
                todo.description = description;
                todo.dueDate = new Date(dueDate);
            }
            editingTodoId = null;
            document.getElementById('add-button').textContent = 'Add To-Do';
        } else {
            const newTodo = createTodoItem(title, description, dueDate);
            todoList.push(newTodo);
        }

        renderTodoList();
        clearInputFields();
    } else {
        alert('Please enter a title and a due date.');
    }

    if (sort) {
        sort.style.display = (todoList.length < 1 ? "" : "block");
    }
}

let editingTodoId = null;

function editTodoItem(id) {
    const todo = todoList.find(todo => todo.id === id);
    if (todo) {
        document.getElementById('title').value = todo.title;
        document.getElementById('description').value = todo.description;
        document.getElementById('due-date').value = todo.dueDate.toISOString().slice(0, 16); 
        editingTodoId = id; 
        document.getElementById('add-button').textContent = 'Save Changes';
    }
}

function markAsComplete(id) {
    const todo = todoList.find(todo => todo.id === id);
    if (todo) {
        todo.completed = !todo.completed;
        renderTodoList();
    }
}

function deleteTodoItem(id) {
    todoList = todoList.filter(todo => todo.id !== id);
    renderTodoList();
}

function sortTodoList(order) {
    todoList.sort((a, b) => {
        return order === 'asc' ? a.dueDate - b.dueDate : b.dueDate - a.dueDate;
    });
    renderTodoList();
}

function clearInputFields() {
    document.getElementById('title').value = '';
    document.getElementById('description').value = '';
    document.getElementById('due-date').value = '';
}




document.getElementById('add-button').addEventListener('click', addTodoItem);
document.getElementById('sort-asc').addEventListener('click', () => sortTodoList('asc'));
document.getElementById('sort-desc').addEventListener('click', () => sortTodoList('desc'));

renderTodoList();
