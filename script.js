alert("TO-DO-LIST BY CAIO RODRIGUES!")

window.addEventListener('load', () => {
    const form = document.querySelector("#Nova-Tarefa")
    const input = document.querySelector("#Nova-tarefa-input")
    const listar_element = document.querySelector("#tasks")

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const task = input.value;

        if (!task) {
            alert("Você deve escrever uma tarefa!")
            return;
        }

        const tarefa_element = document.createElement("div");
        tarefa_element.classList.add("task");

        const tarefa_content_element = document.createElement("div")
        tarefa_content_element.classList.add("content");


        tarefa_element.appendChild(tarefa_content_element);

        const tarefa_input = document.createElement("input");
        tarefa_input.classList.add("text")
        tarefa_input.type = "text";
        tarefa_input.value = task;
        tarefa_input.setAttribute("readonly", "readonly");

        tarefa_content_element.appendChild(tarefa_input);

        const tarefa_action = document.createElement("div");
        tarefa_action.classList.add("actions");

        const tarefa_edit = document.createElement("button");
        tarefa_edit.classList.add("editar");
        tarefa_edit.innerHTML = "Editar";

        const tarefa_delete = document.createElement("button");
        tarefa_delete.classList.add("deletar");
        tarefa_delete.innerHTML = "Deletar";

        tarefa_action.appendChild(tarefa_edit);
        tarefa_action.appendChild(tarefa_delete);

        tarefa_element.appendChild(tarefa_action);

        listar_element.appendChild(tarefa_element);

        input.value = " ";

        tarefa_edit.addEventListener('click', () => {
            if (tarefa_edit.innerText.toLowerCase() == "editar") {
                tarefa_input.removeAttribute("readonly");
                tarefa_input.focus();
                tarefa_edit.innerText = "Salvar";
            } else {
                tarefa_input.setAttribute("readonly", "readonly");
                tarefa_edit.innerText = "editar";
            }
        });

        tarefa_delete.addEventListener('click', () => {
            listar_element.removeChild(tarefa_element);

        });

    })
})