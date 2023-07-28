import {projectLibrary} from "./tasks";
import { projectContainer } from "./index.js";


export default function(){
    projectContainer.innerHTML = ''
    for(let i = 0; i < projectLibrary.length;i++){
        let newProject = document.createElement('div')
        newProject.classList.add('projectDIV');
        let projectName = document.createElement('div');
        projectName.classList.add('projectName');
        projectName.innerHTML = projectLibrary[i].name;
        let deleteDIV = document.createElement('div')
        deleteDIV.classList.add('delProject');
        deleteDIV.innerHTML = 'X';
        newProject.append(projectName,deleteDIV)
        projectContainer.append(newProject);
    }
}