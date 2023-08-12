import { currentProject } from "./tasks";
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


export function updateDate(input){

}