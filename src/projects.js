import { renderProjects } from './DOMMethods'

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

const init = () => {
    addProjToArr('Default', 'This is a default project', generateUniqueId());
    addTodoToProj(projectArr[0], '_yilklj', 'test', 'testing', 'date', false);
    renderProjects();
}

const getProjectDetails = (project) => {
    console.log('this' + project);
    console.log(projectArr);
    let projectObject = {};
    projectArr.forEach(proj => {
        if(proj.projId === project){
            projectObject = proj;
            console.log(projectObject);
        }
    })
    return projectObject;
}


export { init, getProjectDetails, addProjToArr, addTodoToProj, generateUniqueId, updateProjectSelect, projectArr };

