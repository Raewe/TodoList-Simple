// Variáveis globais
var inputTask = document.querySelector("#task");
var btnAddTask = document.querySelector("#btnAddTask");

// Instanciar classe
var task = new Task();

// Adicionar
btnAddTask.addEventListener("click", () => {
    task.adicionar(inputTask.value);
    inputTask.value = "";
    updateList();
});

inputTask.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        task.adicionar(inputTask.value);
        inputTask.value = "";
        updateList();
    }
});

// Remover

function removeTask(id) {
    task.remover(id);
    updateList();
}

// Editar
function updateList() {
    let getBoxList = document.querySelector(".task__list");
    let getList = task.listar();
    getBoxList.innerHTML = ""; // Limpar o conteúdo anterior da lista
    getList.forEach(function (elemento, id) {
        getBoxList.innerHTML += `
        <li class="task__item">
            <p>${elemento}</p>
            <div class="task__deleteItem"  onclick="removeTask(${id})">X</div>
        </li>
    `;
    });
}

// Inicialização da lista
updateList();
