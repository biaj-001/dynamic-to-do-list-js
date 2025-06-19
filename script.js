// Setup Event Listener for Page Load
document.addEventListener('DOMContentLoaded', function () {
    // Select DOM Elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Define the function to add a new task
    function addTask() {
        // Retrieve and trim input value
        const taskText = taskInput.value.trim();

        // Check if input is empty
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Create new list item element
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create a new Remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = "Remove";
        removeBtn.className = 'remove-btn';

        // Set onclick event for removing the task
        removeBtn.onclick = function () {
            taskList.removeChild(li);
        };

        // Append remove button to list item
        li.appendChild(removeBtn);

        // Append list item to the task list
        taskList.appendChild(li);

        // Clear the input field
        taskInput.value = "";
    }

    // Attach click event listener to the Add Task button
    addButton.addEventListener('click', addTask);

    // Attach keypress event listener for Enter key
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    // Invoke addTask on DOMContentLoaded if needed (optional here, but stated in your instructions)
    // This could be for an initial load or test case setup
    // Example: addTask(); // Uncomment only if needed to pre-fill a task on load
});
