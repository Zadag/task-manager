

const projectArr = [];

const projectFactory = (title, desc) => {
    return { title, desc, todoArr: [] };
}

const addProjToArr = (title, desc) => {
    projectArr.push(projectFactory(title, desc));
}

const addTodoToProj = (proj, title, desc, date, prio) => {
    proj.todoArr = { title, desc, date, prio };
}


export { addProjToArr, addTodoToProj, projectArr };

