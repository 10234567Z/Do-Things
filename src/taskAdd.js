import { projectLibrary, currentProject } from "./project";
import UIMaker from "./addToUI"


export function Todo(title, date) {
    this.title = title;
    this.date = date;
    this.AddToDo = () => {
        let bookIndex = projectLibrary.findIndex(t => currentProject.name === t.name);
        let todo = { title, date }
        projectLibrary[bookIndex].todoArea.push(todo)
    }
}


export default function TodoForm(name) {
    if (document.querySelector('.formBG') === undefined || document.querySelector('.formBG') === null) {
        let formBG = document.createElement('div');
        formBG.classList.add('formBG', 'taskForm');
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
    projectName.maxLength = '50'

    let dateLabel = document.createElement('label');
    dateLabel.setAttribute('for', 'dueDate');
    dateLabel.innerHTML = 'Due Date';
    let dueDate = document.createElement('input');
    dueDate.type = 'date';
    dueDate.setAttribute('id', 'dueDate');
    dueDate.classList.add('dueDate');

    let submitButton = document.createElement('button');
    submitButton.classList.add('submitTask');
    submitButton.innerHTML = 'Submit';

    let formArea = document.createElement('div');
    formArea.classList.add('formArea');
    formBG.append(formArea);
    formArea.append(nameLabel, projectName, dateLabel, dueDate, submitButton);
}
function NameValidation(name) {
    let validate = true;
    let index = projectLibrary.findIndex(e => currentProject.name === e.name)
    for (let i = 0; i < projectLibrary[index].todoArea.length; i++) {
        if (projectLibrary[index].todoArea[i].title.toUpperCase() === name.toUpperCase()) {
            validate = false;
            break;
        }
    }
    return validate;
}

export function TaskMaker(name , date){
    let validation = NameValidation(name)
    if(date.trim() !== '' && name.trim() !== '' && validation){
        new Todo(name, date).AddToDo();
        UIMaker();
    }
}