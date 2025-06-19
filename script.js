document.addEventListener('DOMContentLoaded', () => {
    // 1. Get references to our HTML elements
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    // 2. Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim(); // Get the input value and remove extra spaces

        // Check if the input is empty
        if (taskText === "") {
            alert("Please enter a task!");
            return; // Stop the function if input is empty
        }

        // Create new list item (<li>)
        const listItem = document.createElement('li');
        listItem.textContent = taskText; // Set its text content to the task

        // Create a remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.classList.add('remove-btn'); // Add a class for styling

        // Add event listener to the remove button
        removeButton.addEventListener('click', () => {
            taskList.removeChild(listItem); // Remove the parent <li> element from the <ul>
        });

        // Append the remove button to the list item
        listItem.appendChild(removeButton);

        // Append the new list item to the task list (<ul>)
        taskList.appendChild(listItem);

        // Clear the input field after adding the task
        taskInput.value = '';
    }

    // 3. Add event listeners for adding tasks
    addTaskBtn.addEventListener('click', addTask); // When the button is clicked

    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') { // When the Enter key is pressed in the input field
            addTask();
        }
    });
});
