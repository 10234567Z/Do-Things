import './style.css';
import addProjectUI,{addProject} from './addProject.js'

export let container = document.createElement('div');
container.classList.add('container');
document.querySelector('body').appendChild(container);

let sideHead = document.createElement('h1');
sideHead.classList.add('sideHead');
sideHead.innerHTML = 'Projects';

let sideBar = document.createElement('div');
sideBar.classList.add('sidebar');

export let projectContainer = document.createElement('div');
projectContainer.classList.add('projectContainer');

let addButton = document.createElement('button');
addButton.classList.add('addProject');
addButton.innerHTML = "Add"

sideBar.append(addButton,projectContainer)
container.append(sideHead,sideBar)

document.addEventListener('click' , e=>{
    if(e.target.classList.contains('addProject')){
        addProjectUI();
    }
    if(e.target.classList.contains('submit')){
        addProject(document.querySelector('.title'));
    }
    if(e.target.classList.contains('formBG')){
        e.target.remove();
    }
})

document.addEventListener('keypress' , e=>{
    if(e.key === 'Enter'){
        e.preventDefault();
    }
})
