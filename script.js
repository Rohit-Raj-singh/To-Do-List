// Function to add a new task
function addTask() {
    var taskInput = document.getElementById("taskInput");
    var prioritySelect = document.getElementById("prioritySelect");
    var deadlineInput = document.getElementById("deadlineInput");
    var taskList = document.getElementById("taskList");
    var taskText = taskInput.value.trim();
    var priority = prioritySelect.value;
    var deadline = deadlineInput.value;

    if (taskText !== "") {
      var li = document.createElement("li");
      li.textContent = taskText + " - Priority: " + priority + ", Deadline: " + deadline;

      var deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.className = "delete-btn";

      deleteButton.onclick = function() {
        taskList.removeChild(li);
      };

      li.appendChild(deleteButton);
      taskList.appendChild(li);

      taskInput.value = "";
      prioritySelect.value = "high";
      deadlineInput.value = "";
    } else {
      alert("Please enter a task!");
    }
  }