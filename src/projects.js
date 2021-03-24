

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

const editProject = (projId, newTitle, newDesc) => {
    console.log('editing project object');
    const proj = getProjectDetails(projId);
    console.log(newTitle);
    console.log(proj);
    proj.title = newTitle;
    proj.desc = newDesc;
    console.log(proj);
}

const addTodoToProj = (proj, projId, title, desc, date) => {
    proj.todoArr.push({ todoId: generateUniqueId(), projId, title, desc, date, completed: false });
}

const removeTodoFromTodoArr = (projId, todoId) => {
    let proj = getProjectDetails(projId);
    
    let index = proj.todoArr.findIndex(todo => {
        return todo.todoId === todoId;
    })

    proj.todoArr.splice(index, 1);
}

const getTodo = (proj, todoId) => {
    return proj.todoArr.find(todoObj => todoObj.todoId === todoId);
}

const editTodo = (proj, todoId, title, desc, date) => {
    let todo = proj.todoArr.find(todoObj => todoObj.todoId === todoId);

    todo.title = title;
    todo.desc = desc;
    todo.date = date;
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

const deleteProject = (projId) => {
    let index = projectArr.findIndex(proj => proj.projId === projId);
    projectArr.splice(index, 1);
    console.log(projectArr);
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

const toggleTodoCompletion = (projId, todoId) => {
    let proj = getProjectDetails(projId);
    let todo = proj.todoArr.find(todoObj => todoObj.todoId === todoId);
    if(todo.completed === false){
        todo.completed = true;
    }else todo.completed = false;
}


export { editTodo, editProject, deleteProject, getTodo, toggleTodoCompletion, removeTodoFromTodoArr, getProjectDetails, addProjToArr, addTodoToProj, generateUniqueId, updateProjectSelect, projectArr };

