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

const addTodoToProj = (proj, title, desc, date, prio) => {
    proj.todoArr.push({ title, desc, date, prio });
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

const generateProjectId = () => {
    return '_' + Math.random().toString(36).substr(2, 9);
}

const init = () => {
    addProjToArr('Default', 'This is a default project', generateProjectId());
    renderProjects();
}



export { init, addProjToArr, addTodoToProj, generateProjectId, updateProjectSelect, projectArr };

