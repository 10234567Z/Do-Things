import './style.css';
import { addButton,addName,taskContainer } from './index.js';
import TaskMaker ,{ taskLibrary} from './tasks.js';

let reClick = false;
let name = '';

/** Change display then add book name and book to task library */
export default function addTask(){
    ChangeDisplay();
    if(reClick){
        let task = new TaskMaker(addName.value , '', '' , '').AddToLibrary();
        createTaskElement();
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


function createTaskElement(){
    let newTaskElement = document.createElement('div');
    for(let i = 1 ;i <=taskLibrary.length ;i++){
        if(i === taskLibrary.length){
            newTaskElement.classList.add('task' , i);
        }
    }
    taskContainer.append(newTaskElement);
}