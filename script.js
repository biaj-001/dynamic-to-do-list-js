// Ensure the script runs only after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Select necessary elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a task
    function addTask() {
        const taskText = taskInput.value.trim();

        // Alert if input is empty
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Create a new list item
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create a remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = "Remove";
        removeBtn.className = 'remove-btn';

        // Add click event to remove the task
        removeBtn.onclick = function () {
            taskList.removeChild(li);
        };

        // Add the button to the list item and the item to the list
        li.appendChild(removeBtn);
        taskList.appendChild(li);

        // Clear input field
        taskInput.value = "";
    }

    // Click event for the add button
    addButton.addEventListener('click', addTask);

    // Enter key functionality
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});


