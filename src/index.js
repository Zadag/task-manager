import { newProject } from './newProjectModal'


const content = document.querySelector('#content');



const newProjectButton = document.querySelector('.new-project');

newProjectButton.addEventListener('click', newProject);