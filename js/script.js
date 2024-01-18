{

    let taskList = [
        {
            content: "zrobić zakupy 🛍️",
            done: true,
        },
        {
            content: "wstawić zmywarkę 🍽️",
            done: false,
        },
        {
            content: "umyć samochód 🚙",
            done: false,
        },
        {
            content: "zabookować bilety 🎟️",
            done: false,
        },
    ]

    const addNewTask = (newTaskContent) => {
        taskList = [
            ...taskList,
            { content: newTaskContent },
        ];
        render();
    };

    const removeTask = (taskIndex) => {
        taskList.splice(taskIndex, 1);
        render();
    };

    const toggleDoneTask = (taskIndex) => {
        taskList[taskIndex].done = !taskList[taskIndex].done;
        render();
    };

    const bindRemoveEvents = () => {
        const removeButtons = document.querySelectorAll(".js-remove");

        removeButtons.forEach((removeButton, taskIndex) => {
            removeButton.addEventListener("click", () => {
                removeTask(taskIndex);
            });
        });
    }

    const bindToggleDoneEvents = () => {

        const toggleDoneButtons = document.querySelectorAll(".js-done");

        toggleDoneButtons.forEach((toggleDoneButton, taskIndex) => {
            toggleDoneButton.addEventListener("click", () => {
                toggleDoneTask(taskIndex);
            });
        });
    }

    const render = () => {

        let taskListHTMLContent = "";

        for (const task of taskList) {
            taskListHTMLContent += `
            <li 
              class= "taskList__task js-task"
              >
              <button class="taskList__button taskList__button--toggleDone js-done">
               ${task.done ? "✓" : ""}
              </button>
              <span class=" 
               ${task.done ? "taskList__task--done" : ""}">${task.content}
              </span>
              <button class="taskList__button taskList__button--remove js-remove">
               🗑️
              </button>
            </li>`
        }

        document.querySelector(".js-tasks").innerHTML = taskListHTMLContent;
        bindRemoveEvents();
        bindToggleDoneEvents();
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        const newTaskElement = document.querySelector(".js-input")
        const newTaskContent = newTaskElement.value.trim();

        if (newTaskContent !== "") {
            addNewTask(newTaskContent);
            newTaskElement.value = "";
        }
        newTaskElement.focus();
    };

    const init = () => {
        render();

        const form = document.querySelector(".js-form");

        form.addEventListener("submit", onFormSubmit);

    };

    init();
}