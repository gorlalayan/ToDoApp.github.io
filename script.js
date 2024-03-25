function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskList = document.getElementById("taskList");
  
    if (taskInput.value.trim() === "") {
      alert("Please enter a task!");
      return;
    }
  
    let listItem = document.createElement("li");
    listItem.textContent = taskInput.value;
    taskList.appendChild(listItem);
  
    taskInput.value = "";

    listItem.addEventListener("click", function () {
      this.remove();
    });
  }
  