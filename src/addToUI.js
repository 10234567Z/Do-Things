import {projectLibrary} from "./tasks";
import { projectContainer } from "./index.js";


export default function(){
    projectContainer.innerHTML = ''
    for(let i = 0; i < projectLibrary.length;i++){
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

        projectName.append(title,editName);

        let deleteDIV = document.createElement('div');
        deleteDIV.classList.add('delProject');
        deleteDIV.innerHTML = 'X';
        newProject.append(projectName,deleteDIV)
        projectContainer.append(newProject);
    }
}