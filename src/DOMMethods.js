import { addProjToArr, projectArr } from './projects'

const newProjectModal = () => {
    const content = document.querySelector('#content');

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

    submit.addEventListener('click', () => {
        //function to make new project
        addProjToArr(title.value, description.value);
        addProjectToDOM(title.value);
        removeModal();
        console.log(projectArr);
    });
    cancel.addEventListener('click', removeModal);
};

const addProjectToDOM = (projectTitle) => {
    const projectsContainer = document.querySelector('#projects-container');
    const projectDiv = document.createElement('div');
    const projectButton = document.createElement('button');
    projectDiv.classList.add('project');
    projectButton.classList.add('project-button');

    projectsContainer.appendChild(projectDiv);
    projectDiv.appendChild(projectButton);
    console.log(projectTitle);
    projectButton.textContent = projectTitle;
}

export {newProjectModal} ;