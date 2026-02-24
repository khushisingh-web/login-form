function addTask() {
  var input = document.getElementById("taskinput");
  var task = input.value;

  if (task === "") {
    alert("please enter a task!");
    return;
  }
  var li = document.createElement("li");
  li.textContent = task;

  document.getElementById("taskList").appendChild(li);

  input.value = "";
}
