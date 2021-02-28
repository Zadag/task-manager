import { newProjectModal, renderProjects } from './DOMMethods'
import { projectArr, addProjToArr, addTodoToProj, generateUniqueId } from './projects';

const content = document.querySelector('#content');

const newProjectButton = document.querySelector('.new-project');

newProjectButton.addEventListener('click', () => {
    if(!document.querySelector('.new-project-modal')){
        newProjectModal();
    }
});

const init = () => {
    addProjToArr('Default', 'This is a default project', generateUniqueId());
    addTodoToProj(projectArr[0], '_yilklj', 'test', 'testing', 'date', false);
    renderProjects();
}

init();