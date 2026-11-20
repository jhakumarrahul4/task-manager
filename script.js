function addTask() {
    const input = document.getElementById("taskInput");
    const task = input.value;

    if (task.trim() === "") {
        return;
    }

    const li = document.createElement("li");
    li.textContent = task;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";

    deleteButton.onclick = function () {
        li.remove();
    };

    li.appendChild(deleteButton);

    document.getElementById("taskList").appendChild(li);

    input.value = "";
}