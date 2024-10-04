document.addEventListener('DOMContentLoaded', () => {
    const todoForm = document.getElementById('todo-form');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    todoForm.addEventListener('submit', function(event) {
        event.preventDefault();
        addTodoItem(todoInput.value);
        todoInput.value = '';
    });

    function addTodoItem(task) {
        const li = document.createElement('li');
        const span = document.createElement('span');
        span.textContent = task;
        li.appendChild(span);

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.classList.add('edit');
        editButton.addEventListener('click', function() {
            const newTask = prompt('Edit your task:', span.textContent);
            if (newTask) {
                span.textContent = newTask;
            }
        });

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function() {
            todoList.removeChild(li);
        });

        li.appendChild(editButton);
        li.appendChild(deleteButton);
        todoList.appendChild(li);
    }
});
