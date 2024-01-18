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
    ];

    let hideDoneTasks = false;

    const addNewTask = (newTaskContent) => {
        taskList = [
            ...taskList,
            { content: newTaskContent },
        ];
        render();
    };

    const removeTask = (taskIndex) => {
        taskList = [
            ...taskList.slice(0, taskIndex),
            ...taskList.slice(taskIndex + 1),
        ];
        render();
    };

    const toggleDoneTask = (taskIndex) => {
        taskList = [
            ...taskList.slice(0, taskIndex),
            {
                ...taskList[taskIndex],
                done: !taskList[taskIndex].done,
            },
            ...taskList.slice(taskIndex + 1),
        ];
        render();
    };

    const bindRemoveEvents = () => {
        const removeButtons = document.querySelectorAll(".js-remove");

        removeButtons.forEach((removeButton, taskIndex) => {
            removeButton.addEventListener("click", () => {
                removeTask(taskIndex);
            });
        });
    };

    const bindToggleDoneEvents = () => {

        const toggleDoneButtons = document.querySelectorAll(".js-done");

        toggleDoneButtons.forEach((toggleDoneButton, taskIndex) => {
            toggleDoneButton.addEventListener("click", () => {
                toggleDoneTask(taskIndex);
            });
        });
    };

    const bindButtonsEvents = () => {

        const hideDoneTasksButton = document.querySelector(".js-hideDone");

        if (hideDoneTasksButton) {
            hideDoneTasksButton.addEventListener("click", (toggleHideDoneTasks));
        };

        const finishAllTasksButton = document.querySelector(".js-finishAll");

        if (finishAllTasksButton) {
            finishAllTasksButton.addEventListener("click", (finishAllTasks));
        };
    };

    const finishAllTasks = () => {
        taskList = taskList.map((task) => ({
            ...task,
            done: true,
        }));
        render();
    };

    const toggleHideDoneTasks = () => {
        hideDoneTasks = !hideDoneTasks;
        render();
    };

    const renderTaskList = () => {

        let taskListHTMLContent = "";

        for (const task of taskList) {
            taskListHTMLContent += `
            <li class= "taskList__task ${task.done && hideDoneTasks ? "taskList__task--hidden" : ""} js-task">
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
        };

        document.querySelector(".js-tasks").innerHTML = taskListHTMLContent;
    };

    const render = () => {
        renderTaskList();
        bindRemoveEvents();
        bindToggleDoneEvents();
        renderButtons();
        bindButtonsEvents();
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
};