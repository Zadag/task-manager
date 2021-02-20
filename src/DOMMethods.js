import { addProjToArr, projectArr } from './projects'

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

    submit.addEventListener('click', () => {
        //function to store new project in projects.js
        addProjToArr(title.value, description.value);
        removeProjectsFromDom();
        addProjectsToDom();
        removeModal();
    });
    cancel.addEventListener('click', removeModal);
};

const selectProject = (e) => {
    console.log(`This is ${e.target.textContent}`);


    //e.target.classList.toggle('project-button');
    e.target.classList.toggle('project-button-selected');
}

const addProjectsToDom = () => {
    for(let i=0; i<projectArr.length; i++ ){
        const projectsContainer = document.querySelector('#projects-container');
        const projectDiv = document.createElement('div');
        const projectButton = document.createElement('button');
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
        console.log(`This is the element : ${element}`);
        projectsContainer.removeChild(element);
    })
}

export {newProjectModal} ;