class Task {
    constructor() {
        this.taskList = []; // usando o this é a mesma coisa que estancias fora um atributo fora do construtor, e para fazer refêrencia é a mesma coisa
        console.log("Tarefa Criado !");
    }

    adicionar(task) {
        this.taskList.push(task);
    }
    remover(id) {
        this.taskList.splice(id, 1);
    }
    listar() {
        console.log(this.taskList);
    }
    editar() {}
}
