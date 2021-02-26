import { addProjToArr, getProjectDetails, updateProjectSelect, projectArr, generateUniqueId } from './projects'

const newProjectModal = () => {
    const content = document.querySelector('#content');
    const newProjectButton = document.querySelector('.new-project');

    newProjectButton.removeEventListener

    
    const modal = document.createElement('div');
    const title = document.createElement('input');
    const description = document.createElement('textarea');
    const buttonsContainer = document.createElement('div');
    const submit = document.createElement('button');
    const cancel = document.createElement('button');

    modal.classList.add('new-project-modal');
    title.classList.add('new-project-modal-title');
    description.classList.add('new-project-modal-description');
    buttonsContainer.classList.add('new-project-modal-buttons');
    submit.classList.add('new-project-modal-submit');
    cancel.classList.add('new-project-modal-cancel');

    title.setAttribute('placeholder', 'Project Name');
    description.setAttribute('placeholder', 'Project Description');
    submit.textContent = 'Submit';
    cancel.textContent = 'Cancel';

    content.appendChild(modal);
    modal.appendChild(title);
    modal.appendChild(description);
    modal.appendChild(buttonsContainer);
    buttonsContainer.appendChild(submit);
    buttonsContainer.appendChild(cancel);

    const removeModal = () => {
        while(modal.firstChild) {
            modal.removeChild(modal.lastChild);
        }
        content.removeChild(modal);
    }

    //Adds project to projects.js and updates DOM
    submit.addEventListener('click', () => {
        addProjToArr(title.value, description.value, generateUniqueId());
        renderProjects();
        removeModal();
    });
    cancel.addEventListener('click', removeModal);
};

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

const renderProjectContent = (project) => {
    removeTodoContentFromDom();
    //Get project title and desc
    
    if(getProjectDetails(project)){
        const projectDetails = getProjectDetails(project);
        const projectTitle = projectDetails.title;
        const projectDesc = projectDetails.desc;
        //Get todos from project
        const projectTodoArr = projectDetails.todoArr;
        console.log(projectTodoArr);
        createTodoElements(projectTodoArr);
        //Add new task button
        //Add event listener to new task button
        //Add event listeners to todo edit and delete buttons
        //        
    }

}

const createTodoElements = (todoArr) => {
    console.log(todoArr);
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
        })
    
        todoIconDelete.addEventListener('click', () => {
            //Remove this todo from project.todos
            //Render todos
        })
    })

}

const editTodoModal = () => {
    const content = document.querySelector('#content');

    const modalContainer = document.createElement('div');
    const titleInput = document.createElement('input');
    const descInput = document.createElement('input');
    const dateInput = document.createElement('input');
    const submit = document.createElement('button');
    const cancel = document.createElement('button');

    modalContainer.classList.add('todo-modal-container');
    titleInput.classList.add('todo-modal-title');
    descInput.classList.add('todo-modal-desc');
    dateInput.classList.add('todo-modal-date');
    submit.classList.add('todo-modal-submit');
    cancel.classList.add('todo-modal-cancel');

    titleInput.type = 'text';
    descInput.type = 'text';
    dateInput.type = 'date';

    content.appendChild(modalContainer);
    modalContainer.appendChild(titleInput);
    modalContainer.appendChild(descInput);
    modalContainer.appendChild(dateInput);
    modalContainer.appendChild(submit);
    modalContainer.appendChild(cancel);

    submit.addEventListener('click', () => {
        //update project.todo
        //render todos
    })
    cancel.addEventListener('click', () => {
        content.removeChild(modalContainer);
    })

}

const removeTodoContentFromDom = () => {
    const todosContainer = document.querySelector('#todos-container');
    while(todosContainer.firstChild){
        todosContainer.removeChild(todosContainer.firstChild);
    }
    console.log('content removed');
}

export {newProjectModal, renderProjects} ;