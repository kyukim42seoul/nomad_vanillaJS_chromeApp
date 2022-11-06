const toDoForm = document.querySelector(".toDoForm");
const toDoInput = document.querySelector(".toDoInput");
const toDoList = document.querySelector(".todo-list");
let toDos = JSON.parse(localStorage.getItem("todos"));

function paintToDo(newToDo) {
    console.log("paintToDo", newToDo);
    const li = document.createElement("li");
    li.id = newToDo.id;
    const span = document.createElement("span");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    li.appendChild(checkbox);
    li.appendChild(span);
    span.innerText = newToDo.text;
    toDoList.appendChild(li);
}

function addToDoList(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;
    if (newToDo !== "") {
        const newToDoObject = {
            text: newToDo,
            id: Date.now(),
        };
        console.log("addToDoList:newToDoObject ", newToDoObject);
        toDos.push(newToDoObject);
        saveToDos(toDos);
        paintToDo(newToDoObject);
        toDoInput.value = "";
    } else {
        alert("Need something to do");
    }
}

function removeToDo(event) {
    console.log(event.target);
    if (event.target.type === "checkbox") {
        const li = event.target.parentElement;
        toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
        saveToDos(toDos);
        li.remove();
    }
}

function saveToDos(toDos) {
    localStorage.setItem("todos", JSON.stringify(toDos));
}

toDoForm.addEventListener("submit", addToDoList);
toDoList.addEventListener("click", removeToDo);

if (toDos !== null) {
    console.log("check: toDos", toDos);
    toDos.forEach(paintToDo);
}