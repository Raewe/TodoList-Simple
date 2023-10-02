//Refatorar, remover comentários
//TODO: Adicionar addEventListener em todo os códigos
// Variáveis globais
const inputTask = document.querySelector("#task");
const btnAddTask = document.querySelector("#btnAddTask");
const btnEditTask = document.querySelectorAll("#btnEditTask");

// Instanciar classe
const task = new Task();

// Adicionar
btnAddTask.addEventListener("click", () => {
    if (inputTask.value != "") {
        task.adicionar(inputTask.value);
        inputTask.value = "";
        updateList();
    }
});

inputTask.addEventListener("keyup", function (event) {
    if (inputTask.value != "") {
        if (event.keyCode === 13) {
            task.adicionar(inputTask.value);
            inputTask.value = "";
            updateList();
        }
    }
});

// Remover

function removeTask(id) {
    task.remover(id);
    updateList();
}

// Editar

function editTask(id) {
    let editMode = true;
    const getTask = document.querySelectorAll(".task__item");

    console.log(getTask);

    getTask.forEach((element, value) => {
        // console.log(element + value)
    });

    // if(getTask[0] == id)

    // {

    //     getTask[0].innerHTML = `Pedro`
    // }

    if (editMode) {
    }

    // for (var i = Things.length - 1; i >= 0; i--) {
    //     Things[i]
    // }

    // task.editar(id, value);

    updateList();
}

//Update
function updateList() {
    let getBoxList = document.querySelector(".task__list");
    let getList = task.listar();
    getBoxList.innerHTML = ""; // Limpar o conteúdo anterior da lista
    //TODO:Mudar os nomes da váriaveis
    getList.forEach(function (elemento, id) {
        let taskElement;
        if (elemento.length <= 38) {
            taskElement = `<p title="${elemento}">${elemento}</p>`;
        } else {
            taskElement = `<p title="${elemento}">${elemento.slice(
                0,
                38
            )}...</p>`;
        }

        getBoxList.innerHTML += `
        <li class="task__item" tabindex="${id + 2}">
        <div>
        ${taskElement}
        </div>
        <div>
        <div class="task__deleteItem"  onclick="editTask(${id})" title="Editar tarefa"><i class="fa-solid fa-pen-to-square"></i></div>
        <div class="task__deleteItem"  onclick="removeTask(${id})" title="Deletar tarefa"><i class="fa-solid fa-trash"></i></div>
        </div>
        </li>
        `;
    });
}

// Inicialização da lista
updateList();
