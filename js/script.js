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
            <li>
            ${task.content}
            </li>`
        }
        
        document.querySelector(".js-tasks").innerHTML = htmlString;
    }


    const init = () => {
        render();
    };

    init();
}