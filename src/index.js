import { newProjectModal } from './DOMMethods'
import { projectArr } from './projects';

const content = document.querySelector('#content');
console.log(projectArr);

const newProjectButton = document.querySelector('.new-project');

newProjectButton.addEventListener('click', () => {
    if(!document.querySelector('.new-project-modal')){
        newProjectModal();
    }
});