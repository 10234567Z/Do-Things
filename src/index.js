import './style.css';
import addTask from './addTask.js'

let container = document.createElement('div');
container.classList.add('container');
document.querySelector('body').appendChild(container);

let headBar = document.createElement('div');
headBar.classList.add('headBar');
let header = document.createElement('div');
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

addButton.addEventListener('click' , e =>{
    addTask();
})


addBar.append(addButton,addName);

container.append(headBar,addBar);
