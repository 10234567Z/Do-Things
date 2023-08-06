import './style.css';
import addProjectUI, { addProject } from './addProject.js'
import deleteProject from './deleteProject.js'
import changePName from './changeName.js'
import TodoForm from './todoAdd';
import { currentProject, projectLibrary } from './tasks';
import updateTaskUI from './updateTask';

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

export let taskHead = document.createElement('h1');
taskHead.classList.add('taskHead');
taskHead.innerHTML = 'Tasks'

let addTask = document.createElement('button');
addTask.classList.add('addProject', 'addTask');
addTask.innerHTML = "Add Task"

let taskContainer = document.createElement('div');
taskContainer.classList.add('taskContainer');

export let taskArea = document.createElement('div');
taskArea.classList.add('taskArea');
taskArea.append(addTask, taskContainer)
sideBar.append(addButton, projectContainer)
container.append(sideHead, sideBar, taskHead, taskArea)
taskArea.style.display = 'none';
taskHead.style.display = 'none';

document.addEventListener('click', e => {
    if (e.target.classList.contains('addProject') && !(e.target.classList.contains('addTask'))) {
        addProjectUI();
    }
    if (e.target.classList.contains('submit')) {
        addProject(document.querySelector('.title'));
    }
    if (e.target.classList.contains('formBG')) {
        e.target.remove();
    }
    if (e.target.classList.contains('delProject')) {
        let projectName = e.target.parentNode.getElementsByTagName('div')[0].innerHTML;
        deleteProject(projectName);
        e.target.parentNode.remove();
    }
    if (e.target.classList.contains('genTitle')) {
        e.target.parentNode.getElementsByTagName('p')[0].style.display = 'none';
        let inputEL = e.target.parentNode.getElementsByTagName('input')[0];
        inputEL.style.display = 'block';
        changePName(inputEL);
    }
    if (e.target.classList.contains('projectDIV')) {
        currentProject.name = e.target.getElementsByTagName('div')[0].getElementsByTagName('p')[0].innerHTML;
        console.log(currentProject)
    }
    if (e.target.classList.contains('addTask')) {
        TodoForm(currentProject.name)
    }
    updateTaskUI();
})

document.addEventListener('keypress', e => {
    if (e.key === 'Enter') {
        e.preventDefault();
    }
})