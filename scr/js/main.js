//Variable global
var inputTask = document.querySelector("#task");
var btnAddTask = document.querySelector("#btnAddTask");
//Estanciar class
var task = new Task();

// Adicionar
btnAddTask.addEventListener("click", () => {
    task.adicionar(inputTask.value);
    inputTask.value = "";
});

inputTask.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        task.adicionar(inputTask.value);
        inputTask.value = "";
    }
});
// Remover

// Editar
