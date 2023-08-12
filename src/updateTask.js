import { currentProject } from "./tasks";
import { taskArea,taskHead } from ".";


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