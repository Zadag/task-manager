import { addProjToArr, getTodo, editTodo, getProjectDetails, generateUniqueId, removeTodoFromTodoArr, addTodoToProj } from './projects'
import { renderProjects, renderProjectContent } from './render'


const newProjectModal = (edit) => {
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

const editTodoModal = (projId, todoId) => {
    const proj = getProjectDetails(projId);
    const todo = getTodo(proj, todoId);

    const content = document.querySelector('#content');

    const modalContainer = document.createElement('div');
    const titleInput = document.createElement('input');
    const descInput = document.createElement('textarea');
    const dateInput = document.createElement('input');
    const submit = document.createElement('button');
    const cancel = document.createElement('button');
    const buttonsContainer = document.createElement('div');

    modalContainer.classList.add('todo-modal-container');
    titleInput.classList.add('todo-modal-title');
    descInput.classList.add('todo-modal-desc');
    dateInput.classList.add('todo-modal-date');
    submit.classList.add('todo-modal-submit');
    cancel.classList.add('todo-modal-cancel');
    buttonsContainer.classList.add('todo-modal-buttons');

    titleInput.type = 'text';
    dateInput.type = 'date';

    titleInput.value = todo.title;
    todo.description ? descInput.value = todo.description : descInput.placeholder = "description";

    submit.textContent = "Submit";
    cancel.textContent = "Cancel";

    content.appendChild(modalContainer);
    modalContainer.appendChild(titleInput);
    modalContainer.appendChild(descInput);
    modalContainer.appendChild(dateInput);
    modalContainer.appendChild(buttonsContainer);
    buttonsContainer.appendChild(submit);
    buttonsContainer.appendChild(cancel);

    submit.addEventListener('click', () => {
        //update project.todo
        console.log(projId);
        editTodo(proj, todoId, titleInput.value, descInput.value, dateInput.value);
        renderProjectContent(projId);
        //render todos
        content.removeChild(modalContainer);
    })
    cancel.addEventListener('click', () => {
        content.removeChild(modalContainer);
    })

}

const createTodoModal = (projectId) => {
    const newTodoButton = document.querySelector('.new-todo-button');
    const todosContainer = document.querySelector('#todos-container');
    
    const modalContainer = document.createElement('div');
    const titleInput = document.createElement('input');
    const descInput = document.createElement('textarea');
    const dateInput = document.createElement('input');
    const submit = document.createElement('button');
    const cancel = document.createElement('button');
    const buttonsContainer = document.createElement('div');

    modalContainer.classList.add('todo-modal-container');
    titleInput.classList.add('todo-modal-title');
    descInput.classList.add('todo-modal-desc');
    dateInput.classList.add('todo-modal-date');
    submit.classList.add('todo-modal-submit');
    cancel.classList.add('todo-modal-cancel');
    buttonsContainer.classList.add('.todo-modal-buttons');

    titleInput.type = 'text';
    dateInput.type = 'date';

    titleInput.placeholder = "title";
    descInput.placeholder = "description";
    submit.textContent = "Submit";
    cancel.textContent = "Cancel";


    newTodoButton.parentNode.insertBefore(modalContainer, newTodoButton.nextSibling);
    modalContainer.appendChild(titleInput);
    modalContainer.appendChild(descInput);
    modalContainer.appendChild(dateInput);
    modalContainer.appendChild(buttonsContainer);
    buttonsContainer.appendChild(submit);
    buttonsContainer.appendChild(cancel);

    submit.addEventListener('click', () => {
        if(titleInput.value.trim() === "") return alert('Please enter a title');
        const project = getProjectDetails(projectId);
        //update project.todo
        addTodoToProj(project, projectId, titleInput.value, descInput.value, dateInput.value);
        //render todos
        renderProjectContent(projectId);
    })
    cancel.addEventListener('click', () => {
        todosContainer.removeChild(modalContainer);
    })
}

export { newProjectModal, editTodoModal, createTodoModal }