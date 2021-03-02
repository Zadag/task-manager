import { addProjToArr, getProjectDetails, updateProjectSelect, projectArr, generateUniqueId } from './projects'


const selectProject = (e) => {
    if(e.target.getAttribute('class') === 'project-button'){
        updateProjectSelect(e.target.getAttribute('data-id'));
        renderProjects();
        renderProjectContent(e.target.getAttribute('data-id'));
    }
}

const addProjectsToDom = () => {
    for(let i=0; i<projectArr.length; i++ ){
        const projectsContainer = document.querySelector('#projects-container');
        const projectDiv = document.createElement('div');
        const projectButton = document.createElement('button');

        projectButton.setAttribute('data-id', projectArr[i].projId);
        projectDiv.classList.add('project');
        
        if(projectArr[i].selected === true){
            projectButton.classList.add('project-button-selected');
        }else {
            projectButton.classList.add('project-button');
        }

        projectsContainer.appendChild(projectDiv);
        projectDiv.appendChild(projectButton);
        
        projectButton.textContent = projectArr[i].title;
    
        projectButton.addEventListener('click', selectProject);
    }
}

const removeProjectsFromDom = () => {
    const projectsList = document.querySelectorAll('.project');
    const projectsContainer = document.querySelector('#projects-container');
    
    projectsList.forEach(element => {
        projectsContainer.removeChild(element);
    })

}

const renderProjects = () => {
    removeProjectsFromDom();
    addProjectsToDom();
}

const renderProjectContent = (projectId) => {
    removeTodoContentFromDom();
    //Get project title and desc
    
    if(getProjectDetails(projectId)){
        const projectDetails = getProjectDetails(projectId);
        const projectTitle = projectDetails.title;
        const projectDesc = projectDetails.desc;
        //Get todos from project
        const projectTodoArr = projectDetails.todoArr;
        //Add new task button and project info
        addProjectTitleAndDesc(projectTitle, projectDesc);
        //Add todos to DOM
        createTodoElements(projectTodoArr);
        
        
       
    }

}

const createTodoElements = (todoArr) => {
    todoArr.forEach(todoObject => {
        const todosContainer = document.querySelector('#todos-container');
        const todo = document.createElement('div');
        const todoLeft = document.createElement('div');
        const todoRight = document.createElement('div');
        const checkItOff = document.createElement('div');
        const todoTitle = document.createElement('p');
        const dueDate = document.createElement('p');
        const todoIconEdit = document.createElement('img');
        const todoIconDelete = document.createElement('img');
    
        todo.classList.add('todo');
        todoLeft.classList.add('todo-left');
        todoRight.classList.add('todo-right');
    
        if(todoObject.completed === true){
            checkItOff.classList.add('checked-off');
        }else{
            checkItOff.classList.add('check-it-off');
        }
    
        todoTitle.classList.add('todo-title');
        dueDate.classList.add('due-date');
        todoIconEdit.classList.add('todo-icon');
        todoIconDelete.classList.add('todo-icon');
    
        todoIconEdit.src = 'icons/edit.png';
        todoIconDelete.src = 'icons/trash.png';
    
        todoTitle.textContent = todoObject.title;
        dueDate.textContent = todoObject.date;
    
        todosContainer.appendChild(todo);
        todo.appendChild(todoLeft);
        todo.appendChild(todoRight);
        todoLeft.appendChild(checkItOff);
        todoLeft.appendChild(todoTitle);
        todoRight.appendChild(dueDate);
        todoRight.appendChild(todoIconEdit);
        todoRight.appendChild(todoIconDelete);
    
        todoIconEdit.addEventListener('click', () => {
            //launch modal
            console.log('test');
        })
    
        todoIconDelete.addEventListener('click', () => {
            //Remove this todo from project.todos
            //Render todos
        })
    })

}

const removeTodoContentFromDom = () => {
    const todosContainer = document.querySelector('#todos-container');
    while(todosContainer.firstChild){
        todosContainer.removeChild(todosContainer.firstChild);
    }
}

const addProjectTitleAndDesc = (projectTitle, projectDesc) => {
    const todosContainer = document.querySelector('#todos-container');

    const todoProjectDetails = document.createElement('div');
    const todoProjectHeader = document.createElement('p');
    const todoProjectAbout = document.createElement('p');
    const newTodoButton = document.createElement('button');

    todoProjectDetails.classList.add('todo-project-details');
    todoProjectHeader.classList.add('todo-project-header');
    todoProjectAbout.classList.add('todo-project-about');
    newTodoButton.classList.add('new-todo-button');

    todosContainer.appendChild(todoProjectDetails);
    todosContainer.appendChild(newTodoButton);
    todoProjectDetails.appendChild(todoProjectHeader);
    todoProjectDetails.appendChild(todoProjectAbout);

    todoProjectHeader.textContent = projectTitle;
    todoProjectAbout.textContent = projectDesc;
    newTodoButton.textContent = 'Add a task';
}

export { renderProjects } ;