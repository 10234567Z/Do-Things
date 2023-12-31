import './style.css';
import addProjectUI, { addProject } from './addProject.js'
import deleteProject from './deleteProject.js'
import changePName, { taskName } from './changeName.js'
import TodoForm, { TaskMaker, Todo } from './taskAdd.js';
import { currentProject , SetLibraryStorage , GetLibraryStorage} from './project';
import updateTaskUI, { delTask } from './updateTask.js';
import DateSelector from './jquery.js';
import UIMaker from './addToUI'

export let container = document.createElement('div');
container.classList.add('container');
document.querySelector('body').appendChild(container);

let projectHead = document.createElement('h1');
projectHead.classList.add('projectHead');
projectHead.innerHTML = 'Projects';

let projectNAV = document.createElement('div');
projectNAV.classList.add('projectbar');

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

export let taskContainer = document.createElement('div');
taskContainer.classList.add('taskContainer');

export let taskArea = document.createElement('div');
taskArea.classList.add('taskArea');
taskArea.append(addTask, taskContainer)
projectNAV.append(addButton, projectContainer)
container.append(projectHead, projectNAV, taskHead, taskArea)
taskArea.style.display = 'none';
taskHead.style.display = 'none';


/** All the event listeners needed in this project */
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
        let projectName = e.target.parentNode.getElementsByTagName('div')[0].getElementsByTagName('p')[0].innerHTML;
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
        UIMaker();
    }
    if (e.target.classList.contains('addTask')) {
        TodoForm(currentProject.name)
    }
    if (e.target.classList.contains('submitTask')) {
        let dueDate = e.target.parentNode.getElementsByTagName('input')[1].value;
        let taskName = e.target.parentNode.getElementsByTagName('input')[0].value;
        TaskMaker(taskName,dueDate);
        e.target.parentNode.parentNode.remove();
    }
    if(e.target.classList.contains('taskTitle')){
        e.target.parentNode.getElementsByTagName('p')[0].style.display = 'none';
        let inputEL = e.target.parentNode.getElementsByTagName('input')[0];
        inputEL.style.display = 'block';
        taskName(inputEL);
    }
    if(e.target.classList.contains('dateText')){
        e.target.parentNode.getElementsByTagName('p')[0].style.display = 'none';
        let inputEL = e.target.parentNode.getElementsByTagName('input')[0];
        inputEL.style.display = 'block';
        DateSelector(inputEL);
    }
    if(e.target.classList.contains('delTask')){
        let taskName = e.target.parentNode.parentNode.getElementsByTagName('div')[0].getElementsByTagName('p')[0].innerHTML;
        delTask(taskName);
        e.target.parentNode.parentNode.remove();
    }
    updateTaskUI();
})

/** For preventing any unexpected behaviour from enter presses */
document.addEventListener('keypress', e => {
    if (e.key === 'Enter') {
        e.preventDefault();
    }
})

/** After loading all UI , load data from library storage */
GetLibraryStorage();