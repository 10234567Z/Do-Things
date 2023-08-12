import { currentProject, projectLibrary } from "./tasks";
import { taskArea,taskHead } from "./index.js";



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


export function delTask(input){
    let index = projectLibrary.findIndex(e => currentProject.name === e.name)
    let innerIndex = projectLibrary[index].todoArea.findIndex(x => x.title === input.value);
    projectLibrary[index].todoArea.splice(innerIndex , 1);
}