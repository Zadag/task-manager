

const projectArr = [
   {
        title: 'Default',
        desc: '',
        selected: true,
        todoArr: [],
    }
];

const projectFactory = (title, desc) => {
    return { title, desc, selected: false, todoArr: [] };
}

const addProjToArr = (title, desc) => {
    projectArr.push(projectFactory(title, desc));
}

const addTodoToProj = (proj, title, desc, date, prio) => {
    proj.todoArr.push({ title, desc, date, prio });
}

const updateProjectSelect = (projectName) => {
    projectArr.forEach(project => {
        if(project.title === projectName){
            project.selected = true;
        }else {
            project.selected = false
        }
    })
}


export { addProjToArr, addTodoToProj, updateProjectSelect, projectArr };

