import { taskLibrary,currentProject } from "./tasks";


function Todo(title , date , name){
    this.title = title;
    this.date = date;
    this.AddToDo = () =>{
        let bookIndex = taskLibrary.findIndex(t => t.name === name);
        let todo = { title , date}
        taskLibrary[bookIndex].push(todo)
    }
}


export default function TodoForm(name){
    if (document.querySelector('.formBG') === undefined || document.querySelector('.formBG') === null) {
        let formBG = document.createElement('div');
        formBG.classList.add('formBG' , 'taskForm');
        document.querySelector('body').append(formBG);
    }
    let formBG = document.querySelector('.formBG');

    let nameLabel = document.createElement('label');
    nameLabel.setAttribute('for', 'title');
    nameLabel.innerHTML = 'Task Name';
    let projectName = document.createElement('input');
    projectName.type = 'text';
    projectName.setAttribute('id', 'title')
    projectName.classList.add('title');
    projectName.maxLength = '40'

    let submitButton = document.createElement('button');
    submitButton.classList.add('submitTask');
    submitButton.innerHTML = 'Submit';

    let formArea = document.createElement('div');
    formArea.classList.add('formArea');
    formBG.append(formArea);
    formArea.append(nameLabel, projectName, submitButton);
}