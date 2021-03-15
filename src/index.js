import { renderProjects, selectProject} from './render'
import { projectArr, addProjToArr, addTodoToProj, generateUniqueId } from './projects';
import { newProjectModal } from './modals'

const content = document.querySelector('#content');

const newProjectButton = document.querySelector('.new-project');

newProjectButton.addEventListener('click', () => {
    if(!document.querySelector('.new-project-modal')){
        newProjectModal();
    }
});

const init = () => {
    addProjToArr('Default', 'This is a default project', generateUniqueId());
    addTodoToProj(projectArr[0], projectArr[0].projId, 'test', 'testing', 'date', false);
    console.log(`this is projectId ${projectArr[0].projId}`);
    renderProjects();
}

init();