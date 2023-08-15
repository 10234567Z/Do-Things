import { projectLibrary , currentProject, SetLibraryStorage } from "./project";


/** Simply just deleting the project while removing it from local storage too */
export default function(name){
    let index = projectLibrary.findIndex(e => e.name === name);
    projectLibrary.splice(index , 1);
    currentProject.name = '';
    SetLibraryStorage();
}