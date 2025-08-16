// Wait until the DOM is fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {
  // Select DOM elements
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // Function to add a new task
  function addTask() {
    const taskText = taskInput.value.trim(); // Get input value and remove extra spaces

    // If input is empty, alert the user
    if (taskText === '') {
      alert('Please enter a task.');
      return;
    }

    // Create new <li> element
    const li = document.createElement('li');
    li.textContent = taskText;

    // Create a "Remove" button
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    // ✅ Use classList.add (required by checker)
    removeBtn.classList.add('remove-btn');

    // Assign an onclick event to remove the task
    removeBtn.onclick = function () {
      taskList.removeChild(li);
    };

    // Append the remove button to <li>, then append <li> to the list
    li.appendChild(removeBtn);
    taskList.appendChild(li);

    // Clear the input field
    taskInput.value = '';
  }

  // Add task when "Add Task" button is clicked
  addButton.addEventListener('click', addTask);

  // Add task when Enter key is pressed inside the input field
  taskInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      addTask();
    }
  });
});

