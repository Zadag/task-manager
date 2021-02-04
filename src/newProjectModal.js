const newProject = () => {
    const content = document.querySelector('#content');

    console.log('running');
    const modal = document.createElement('div');
    //const title = document.createElement('input');
    //const description = document.createElement('input');
    //const buttonsContainer = document.createElement('div');
    //const submit = document.createElement('button');
    //const cancel = document.createElement('button');

    modal.classList.add('.new-project-modal');

    content.appendChild(modal);

};

export {newProject} ;