import { SetLibraryStorage, currentProject, projectLibrary } from "./project.js";
import { taskArea,taskHead } from "./index.js";

/** Basically just switch between visible and non visible task area */
export default function updateTaskUI(){
    if(currentProject.name.trim() !== ''){
        taskArea.style.display = 'grid';
        taskHead.style.display = 'block'
    }
    else{
        taskArea.style.display = 'none';
        taskHead.style.display = 'none'
    }
}

/** Simply delete the task from project library,local storage and UI */
export function delTask(input){
    let index = projectLibrary.findIndex(e => currentProject.name === e.name)
    let innerIndex = projectLibrary[index].todoArea.findIndex(x => x.title === input.value);
    projectLibrary[index].todoArea.splice(innerIndex , 1);
    SetLibraryStorage();
}