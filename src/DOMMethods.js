import { addProjToArr, updateProjectSelect, projectArr, generateProjectId } from './projects'

const newProjectModal = () => {
    const content = document.querySelector('#content');
    const newProjectButton = document.querySelector('.new-project');

    newProjectButton.removeEventListener

    console.log('running');
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
        addProjToArr(title.value, description.value, generateProjectId());
        renderProjects();
        removeModal();
    });
    cancel.addEventListener('click', removeModal);
};

const selectProject = (e) => {
    if(e.target.getAttribute('class') === 'project-button'){
        updateProjectSelect(e.target.getAttribute('data-id'));
        renderProjects();
        
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
        console.log(projectArr);
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

const renderProjectContent = () => {
    //Get project title and desc
    //Get todos from project
    //Create Dom elements for all of this
    //Add new task button
    //Add event listener to new task button
    //Add event listeners to todo edit and delete buttons
    //

}

const createTodoElements = (title, desc, date, completed) => {
    const todo = document.createElement('div');
    const todoLeft = document.createElement('div');
    const todoRight = document.createElement('div');
    const checkItOff = docuemnt.createElement('div');
    const todoTitle = document.createElement('p');
    const dueDate = document.createElement('p');
    const todoIconEdit = document.createElement('img');
    const todoIconDelete = document.createElement('img');

    todo.classList.add('todo');
    todoLeft.classList.add('todo-left');
    todoRight.classList.add('todo-right');

    if(completed === true){
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

    todoTitle.textContent = title;
    dueDate.textContent = date;

    todoIconEdit.addEventListener('click', () => {
        //launch modal
    })

    todoIconDelete.addEventListener('click', () => {
        //Remove this todo from project.todos
        //Re-render todos
    })
}

export {newProjectModal, renderProjects} ;