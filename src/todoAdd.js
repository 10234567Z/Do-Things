import { projectLibrary, currentProject } from "./tasks";
import DateSelector, { dateSet } from "./jquery";


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
    projectName.maxLength = '40'

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