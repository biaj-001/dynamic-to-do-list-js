// 1. Select DOM Elements
const addButton = document.getElementById('add-button');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list'); // This refers to the <ul> element

// 2. Define the addTask Function
function addTask() {
    // Retrieve and trim the value from the task input field
    const taskText = taskInput.value.trim();

    // Check if taskText is not empty
    if (taskText === "") {
        alert("Please enter a task!");
        return; // Stop the function if input is empty
    }

    // 3. Task Creation
    // Create a new li element
    const li = document.createElement('li');
    li.textContent = taskText; // Set the text content of the li to the task text

    // Create a new button element for removing the task
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.className = 'remove-btn'; // Assign a class for styling

    // Assign an onclick event to the remove button
    removeButton.onclick = function() {
        taskList.removeChild(li); // Remove the li element from the taskList
    };

    // Append the remove button to the li element
    li.appendChild(removeButton);

    // Append the li element to the taskList (the <ul>)
    taskList.appendChild(li);

    // Clear the task input field
    taskInput.value = '';
}

// Add an event listener to the "Add Task" button
addButton.addEventListener('click', addTask);

// Optional: Allow adding tasks by pressing Enter key in the input field
taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});


