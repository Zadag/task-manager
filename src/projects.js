

const projectArr = [];

const projectFactory = (title, desc, projId) => {
    return {projId,  
            title, 
            desc, 
            selected: false, 
            todoArr: [] 
        };
}

const addProjToArr = (title, desc, projId) => {
    projectArr.push(projectFactory(title, desc, projId));
}

const addTodoToProj = (proj, todoId, title, desc, date, completed) => {
    proj.todoArr.push({ todoId, title, desc, date, completed });
}

const removeTodoFromTodoArr = (proj, todoId) => {
    let index = proj.todoArr.find(todo => {
        todo.todoId === todoId;
    }).indexOf();

    console.log(index);

    //proj.todoArr.splice(index, 1);
}

const updateProjectSelect = (projectId) => {
    projectArr.forEach(project => {
        if(project.projId === projectId){
            project.selected = true;
        }else {
            project.selected = false
        }
    })
}

const generateUniqueId = () => {
    return '_' + Math.random().toString(36).substr(2, 9);
}


const getProjectDetails = (projectId) => {
    let projectObject = {};
    projectArr.forEach(proj => {
        if(proj.projId === projectId){
            projectObject = proj;
        }
    })
    return projectObject;
}


export { removeTodoFromTodoArr, getProjectDetails, addProjToArr, addTodoToProj, generateUniqueId, updateProjectSelect, projectArr };

