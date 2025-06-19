// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function () {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask() {
        // Get and trim the task input
        const taskText = taskInput.value.trim();

        // Alert if input is empty
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Create new list item for the task
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create Remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = "Remove";
        removeBtn.className = 'remove-btn';

        // Set onclick event to remove task
        removeBtn.onclick = function () {
            taskList.removeChild(li);
        };

        // Append the remove button to the task
        li.appendChild(removeBtn);

        // Append the task to the list
        taskList.appendChild(li);

        // Clear the input field
        taskInput.value = "";
    }

    // Add event listener to the Add Task button
    addButton.addEventListener('click', addTask);

    // Add event listener for Enter key press in the input field
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});


