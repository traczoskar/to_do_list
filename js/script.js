{

    const taskList = [
        {
            content: "zaparzyć herbatę",
            done: true,
        },
        {
            content: "zrobić zakupy",
            done: false,
        },
    ]

    const addNewTask = (newTaskContent) => {

        taskList.push({
            content: newTaskContent
        })

        render();

    };

    const removeTask = (taskIndex) => {
        taskList.splice(taskIndex, 1);
        render();
    };

    const render = () => {

        let htmlString = "";

        for (const task of taskList) {
            htmlString += `
            <li class= "listItem ${task.done ? "listItem--done" : ""}">
            ${task.content} <button class="js-remove">Usuń</button>
            </li>`
        }

        document.querySelector(".js-tasks").innerHTML = htmlString;

        const removeButtons = document.querySelectorAll(".js-remove");

        removeButtons.forEach((removeButton, index) => {
            removeButton.addEventListener("click", () => {
                removeTask(index);
            });
        });
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        const newTaskContent = document.querySelector(".js-input").value.trim();

        if (newTaskContent === "") {
            return;
        }

        addNewTask(newTaskContent);
    };

    const init = () => {
        render();

        const form = document.querySelector(".js-form");

        form.addEventListener("submit", onFormSubmit);

    };

    init();
}