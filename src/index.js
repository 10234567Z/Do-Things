import './style.css';
import addTask from './addTask.js'
import Todo from './todoAdd';
import { buildTodo } from './todoAdd';

let container = document.createElement('div');
container.classList.add('container');
document.querySelector('body').appendChild(container);

let headBar = document.createElement('div');
headBar.classList.add('headBar');
let header = document.createElement('h1');
header.innerHTML = "Do-Things";
headBar.append(header);

let addBar = document.createElement('div');
addBar.classList.add('addBar');
export let addButton = document.createElement('button');
addButton.classList.add('addButton');
addButton.innerHTML = "Add";

export let addName = document.createElement('input');
addName.type = 'text';
addName.classList.add('addName');
addName.placeholder = 'Click on [ADD] button after naming task';
addName.maxLength = 20;

let projectHeadBar = document.createElement('div');
projectHeadBar.classList.add('project','headBar');
let projectHeader = document.createElement('div');
projectHeader.innerHTML = "Projects";
projectHeadBar.append(projectHeader);

export let taskContainer = document.createElement('div');
taskContainer.classList.add('taskContainer');
taskContainer.classList.con

addButton.addEventListener('click' , e =>{
    addTask();
})

export let todoTask

document.addEventListener('click' , e => {
    if(e.target.classList.contains('plusIcon')){
        let taskNode = e.target.parentNode.parentNode;
        let name = taskNode.getElementsByTagName('div')[0].innerHTML
        todoTask = taskNode;
        buildTodo(name);
    }
})

addBar.append(addButton,addName);

container.append(headBar,addBar,projectHeadBar,taskContainer);
