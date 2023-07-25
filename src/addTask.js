import './style.css';
import { addButton,addName,taskContainer } from './index.js';
import TaskMaker ,{ taskLibrary} from './tasks.js';
import deleteIcon from './Content/delete.svg'
import plus from './Content/plus.svg';

let reClick = false;

/** Change display then add book name and book to task library */
export default function addTask(){
    ChangeDisplay();
    if(reClick && addName.value.trim() !== ''){
        new TaskMaker(addName.value , '', '').AddToLibrary();
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
                 title = document.createElement('div')
    for(let i = 1 ;i <=taskLibrary.length ;i++){
        if(i === taskLibrary.length){
            newTaskElement.classList.add('task' , i);
            indvContainer.classList.add('indv' , 'taskContainer' , i);
        }
    }


    let delIcon = new Image();
    delIcon.src = deleteIcon;
    delIcon.width = 55;
    delIcon.height = 55;
    delIcon.classList.add('deleteIcon');

    let plusIcon = new Image();
    plusIcon.src = plus;
    plusIcon.width = 55;
    plusIcon.height = 55;
    plusIcon.classList.add('plusIcon');

    let iconContainer = document.createElement('div');
    iconContainer.classList.add('iconCont');
    iconContainer.append(plusIcon,delIcon);

    title.classList.add('title');
    title.innerHTML = taskName;
    checkbox.type = 'checkbox';
    taskContainer.append(indvContainer);
    indvContainer.append(newTaskElement);
    newTaskElement.append(checkbox , title,iconContainer);
}