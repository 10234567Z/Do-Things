import { projectLibrary , currentProject } from "./tasks";


export default function(name){
    let index = projectLibrary.findIndex(e => e.name === name);
    projectLibrary.splice(index , 1);
    currentProject.name = '';
}