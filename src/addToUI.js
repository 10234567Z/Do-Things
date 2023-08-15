import { currentProject, projectLibrary } from "./project";
import { projectContainer, taskContainer } from "./index.js";


export default function () {
    taskContainer.innerHTML = '';
    projectContainer.innerHTML = ''

    /** Basically just synchs the whole UI while taking data from the projectlibrary array after any change to array */
    for (let i = 0; i < projectLibrary.length; i++) {
        let newProject = document.createElement('div');
        newProject.classList.add('projectDIV');
        let projectName = document.createElement('div');
        projectName.classList.add('projectName');

        let title = document.createElement('p');
        title.classList.add('genTitle');
        title.innerHTML = projectLibrary[i].name;

        let editName = document.createElement('input');
        editName.type = 'text';
        editName.value = projectLibrary[i].name;
        editName.style.display = 'none';
        editName.maxLength = 20;

        projectName.append(title, editName);

        let deleteDIV = document.createElement('div');
        deleteDIV.classList.add('delProject');
        deleteDIV.innerHTML = 'X';
        newProject.append(projectName, deleteDIV);
        projectContainer.append(newProject);
        for (let j = 0; j < projectLibrary[i].todoArea.length; j++) {
            if (currentProject.name === projectLibrary[i].name) {
                let newTask = document.createElement('div');
                newTask.classList.add('taskDIV');
                let taskName = document.createElement('div');
                taskName.classList.add('taskName')

                let taskTitle = document.createElement('p');
                taskTitle.classList.add('taskTitle');
                taskTitle.innerHTML = projectLibrary[i].todoArea[j].title;

                let editTaskName = document.createElement('input');
                editTaskName.type = 'text';
                editTaskName.value = projectLibrary[i].todoArea[j].title;
                editTaskName.style.display = 'none';
                editTaskName.maxLength = 50;

                let delTask = document.createElement('div');
                delTask.classList.add('delTask');
                delTask.innerHTML = 'X';

                let dateCont = document.createElement('div')
                dateCont.classList.add('dateCont')
            
                let dateText = document.createElement('p')
                dateText.classList.add('dateText');
                dateText.innerHTML = projectLibrary[i].todoArea[j].date;
            
                let dateInput = document.createElement('input')
                dateInput.classList.add('dateInput');
                dateInput.type = 'date'
                dateInput.value = dateText.innerHTML;

                dateCont.append(dateText,dateInput);

                dateInput.style.display = 'none';

                let dataContainer = document.createElement('div');
                dataContainer.classList.add('dataCont');


                taskName.append(taskTitle, editTaskName);
                dataContainer.append(dateCont, delTask)
                newTask.append(taskName, dataContainer);
                taskContainer.append(newTask)
            }
        }
    }
}