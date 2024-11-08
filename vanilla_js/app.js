document.addEventListener("DOMContentLoaded", () => {
    const todoForm = document.getElementById("todoForm");
    const todoList = document.getElementById("todoList");
    const clearCompletedButton = document.getElementById("clearCompleted");

    // Load tasks from localStorage
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(task => renderTask(task));

    // Add new task
    todoForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const taskText = document.getElementById("newTodo").value.trim();
        if (taskText !== "") {
            const task = { id: Date.now(), text: taskText, completed: false };
            tasks.push(task);
            renderTask(task);
            saveTasks();
            todoForm.reset();
        }
    });

    // Render task in the list
    function renderTask(task) {
        const listItem = document.createElement("li");
        listItem.className = "todo-item";
        listItem.dataset.id = task.id;
        listItem.innerHTML = `
            <span class="${task.completed ? "completed" : ""}">${task.text}</span>
            <button class="toggle-complete">✔</button>
            <button class="delete-task">✖</button>
        `;
        todoList.appendChild(listItem);
    }

    // Toggle complete or delete task
    todoList.addEventListener("click", (e) => {
        const taskId = e.target.parentElement.dataset.id;
        if (e.target.classList.contains("toggle-complete")) {
            toggleComplete(taskId);
        } else if (e.target.classList.contains("delete-task")) {
            deleteTask(taskId);
        }
    });

    // Toggle completion status
    function toggleComplete(id) {
        const task = tasks.find(task => task.id == id);
        task.completed = !task.completed;
        saveTasks();
        updateUI();
    }

    // Delete task
    function deleteTask(id) {
        const taskIndex = tasks.findIndex(task => task.id == id);
        tasks.splice(taskIndex, 1);
        saveTasks();
        updateUI();
    }

    // Save tasks to localStorage
    function saveTasks() {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    // Update UI
    function updateUI() {
        todoList.innerHTML = "";
        tasks.forEach(task => renderTask(task));
    }

    // Clear completed tasks
    clearCompletedButton.addEventListener("click", () => {
        tasks = tasks.filter(task => !task.completed);
        saveTasks();
        updateUI();
    });
});
