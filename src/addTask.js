import './style.css';
import { addButton,addName,taskContainer } from './index.js';
import TaskMaker ,{ taskLibrary} from './tasks.js';

let reClick = false;

/** Change display then add book name and book to task library */
export default function addTask(){
    ChangeDisplay();
    if(reClick && addName.value.trim() !== ''){
        new TaskMaker(addName.value , '', '' , '').AddToLibrary();
        createTaskElement(addName.value);
    }
    addName.value = '';
}

/** Change display of the input element of HTML from hidden to visible and vice versa */
function ChangeDisplay(){
    if(addName.style.visibility === 'visible'){
        addName.style.visibility = 'hidden';
        addName.style.opacity = '0';
        addButton.style.backgroundColor = '#EFEFEF'
        reClick = true;
    }
    else{
        addName.style.visibility = 'visible';
        addName.style.opacity = '1';
        addButton.style.backgroundColor = '#7091A4'
        reClick = false
    }
}


function createTaskElement(taskName){
    let newTaskElement = document.createElement('div'),
         indvContainer = document.createElement('div'),
              checkbox = document.createElement('input'),
                 title = document.createElement('div'),
              priority = document.createElement('select'),
                  todo = document.createElement('div');   
    for(let i = 1 ;i <=taskLibrary.length ;i++){
        if(i === taskLibrary.length){
            newTaskElement.classList.add('task' , i);
            indvContainer.classList.add('indv' , 'taskContainer' , i);
        }
    }

    title.classList.add('title');
    title.innerHTML = taskName;
    todo.classList.add('todoList');
    checkbox.type = 'checkbox';
    taskContainer.append(indvContainer);
    indvContainer.append(newTaskElement);
    newTaskElement.append(checkbox , title);
}