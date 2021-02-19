import { newProjectModal } from './DOMMethods'
import { projectArr } from './projects';

const content = document.querySelector('#content');


const newProjectButton = document.querySelector('.new-project');
newProjectButton.addEventListener('click', newProjectModal);