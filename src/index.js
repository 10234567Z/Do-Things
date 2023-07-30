import './style.css';
import addProjectUI,{addProject} from './addProject.js'
import deleteProject from './deleteProject.js'
import changePName from './changeName.js'

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

let taskHead = document.createElement('h1');
taskHead.classList.add('taskHead');
taskHead.innerHTML = 'Tasks'

let addTask = document.createElement('button');
addTask.classList.add('addProject' , 'addTask');
addTask.innerHTML = "Add Task"

let taskContainer = document.createElement('div');
taskContainer.classList.add('taskContainer');

let taskArea = document.createElement('div');
taskArea.classList.add('taskArea');
taskArea.append(addTask,taskContainer)
sideBar.append(addButton,projectContainer)
container.append(sideHead,sideBar,taskHead,taskArea)

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
    if(e.target.classList.contains('delProject')){
        let projectName = e.target.parentNode.getElementsByTagName('div')[0].innerHTML;
        deleteProject(projectName);
        e.target.parentNode.remove();
    }
    if(e.target.classList.contains('genTitle')){
        e.target.parentNode.getElementsByTagName('p')[0].style.display = 'none';
        let inputEL = e.target.parentNode.getElementsByTagName('input')[0];
        inputEL.style.display = 'block';
        changePName(inputEL);
    }
})

document.addEventListener('keypress' , e=>{
    if(e.key === 'Enter'){
        e.preventDefault();
    }
})
