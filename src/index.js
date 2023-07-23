import './style.css';

let container = document.createElement('div');
container.classList.add('container');
document.querySelector('body').appendChild(container);

let headBar = document.createElement('div');
headBar.classList.add('headBar');
let header = document.createElement('div');
header.innerHTML = "Do-Things";
headBar.append(header);
container.append(headBar);