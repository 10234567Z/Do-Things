import './style.css';
import UIMaker from './addToUI.js'
import TaskMaker, { projectLibrary } from './project';

export default function () {
    if (document.querySelector('.formBG') === undefined || document.querySelector('.formBG') === null) {
        let formBG = document.createElement('div');
        formBG.classList.add('formBG');
        document.querySelector('body').append(formBG);
    }
    let formBG = document.querySelector('.formBG');

    let nameLabel = document.createElement('label');
    nameLabel.setAttribute('for', 'title');
    nameLabel.innerHTML = 'Project Name';
    let projectName = document.createElement('input');
    projectName.type = 'text';
    projectName.setAttribute('id', 'title')
    projectName.classList.add('title');
    projectName.maxLength = '20'

    let submitButton = document.createElement('button');
    submitButton.classList.add('submit');
    submitButton.innerHTML = 'Submit';

    let formArea = document.createElement('div');
    formArea.classList.add('formArea');
    formBG.append(formArea);
    formArea.append(nameLabel, projectName, submitButton);
}

function NameValidation(name) {
    let validate = true;
    for (let i = 0; i < projectLibrary.length; i++) {
        if (projectLibrary[i].name.toUpperCase() === name.toUpperCase()) {
            validate = false;
            break;
        }
    }
    return validate;
}

export function addProject(name) {
    let validation = NameValidation(name.value);
    if (name.value.trim() !== '' && validation) {
        new TaskMaker(name.value, 'No').AddToLibrary();
        document.querySelector('.formBG').remove();
        UIMaker();
    }
    else {
        document.querySelector('.formBG').remove();
    }
}