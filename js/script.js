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

    const render = () => {

        let htmlString = "";

        for (const task of taskList) {
            htmlString += `
            <li class= "listItem ${task.done ? "listItem--done" : ""}">
            ${task.content}
            </li>`
        }

        document.querySelector(".js-tasks").innerHTML = htmlString;
    }

    const addNewTask = (newTaskContent) => {

        taskList.push({
            content: newTaskContent
        })

        render();

    }

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