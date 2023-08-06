class Task {
    constructor() {
        this.taskList = [];
        this.localStorage = new LocalStorage();
        console.log("Tarefa Criada!");
    }

    adicionar(task) {
        this.taskList.push(task);
        this.localStorage.SaveInLocalStorage(this.taskList);
    }

    remover(id) {
        if (id >= 0 && id < this.taskList.length) {
            this.taskList.splice(id, 1);
            this.localStorage.SaveInLocalStorage(this.taskList); // Atualizar o LocalStorage após remover
        }
    }

    listar() {
        this.taskList = this.localStorage.ListLocalStorage();
        return this.taskList;
    }

    editar(id, novaDescricao) {
        if (id >= 0 && id < this.taskList.length) {
            this.taskList[id] = novaDescricao;
            this.localStorage.SaveInLocalStorage(this.taskList); // Atualizar o LocalStorage após editar
        }
    }
}

class LocalStorage {
    SaveInLocalStorage(tasks) {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    ListLocalStorage() {
        return JSON.parse(localStorage.getItem("tasks")) || [];
    }
}
