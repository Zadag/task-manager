import { newProjectModal } from './DOMMethods'
import { projectArr, init } from './projects';

const content = document.querySelector('#content');

const newProjectButton = document.querySelector('.new-project');

newProjectButton.addEventListener('click', () => {
    if(!document.querySelector('.new-project-modal')){
        newProjectModal();
    }
});

init();