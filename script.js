function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    // Create new list item
    var li = document.createElement("li");
    li.textContent = taskInput.value;

    // Add new task to list
    taskList.appendChild(li);

    // Clear input field
    taskInput.value = "";
}
