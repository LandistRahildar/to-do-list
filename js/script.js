{
    //na podstawie tej tablicy będzie renderowany widok
    const tasks = [
        {
            content: "pouczyć się frontendu",
            done: false,
        },
        {
            content: "zjeść śniadanie",
            done: true,
        },
    ];

    const render = () => {
        let htmlString = "";

        for (const task of tasks) {
            htmlString += `
            <li>
               ${task.content}
            </li>
            `;
        }

        document.querySelector(".js-tasks").innerHTML = htmlString;
    };

    const init = () => {
        render();
    };

    init();
}