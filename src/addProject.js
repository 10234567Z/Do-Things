import './style.css';
import { projectContainer } from './index.js';
import TaskMaker ,{ projectLibrary} from './tasks.js';
import deleteIcon from './Content/delete.svg'
import plus from './Content/plus.svg';
import Task from './tasks.js';


export default function(){
    let formBG = document.createElement('div');
    formBG.classList.add('formBG');
    document.querySelector('body').append(formBG);

    let nameLabel = document.createElement('label');
    nameLabel.setAttribute('for' , 'title');
    nameLabel.innerHTML = 'Project Name';
    let projectName = document.createElement('input');
    projectName.type = 'text';
    projectName.setAttribute('id','title')
    projectName.maxLength = '20'

    let submitButton = document.createElement('button');
    submitButton.classList.add('submit');
    submitButton.innerHTML = 'Submit';

    let formArea = document.createElement('div');
    formArea.classList.add('formArea');
    formBG.append(formArea);
    formArea.append(nameLabel,projectName,submitButton);
}


export function addProject(name){
    if(name.value.trim() !== ''){
        new TaskMaker(name.value , 'No').AddToLibrary();
        document.querySelector('.formBG').remove();
    }
    else{
        document.querySelector('.formBG').remove();
    }
    console.log(projectLibrary);
}