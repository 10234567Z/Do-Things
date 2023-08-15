import UIUpdater from "./addToUI"
import updateTaskUI from "./updateTask";

export let projectLibrary = [];
export let currentProject = {
    name: ''
};

/** A constructor function for making a new project */
export default function Project(name, status) {
    this.status = status;
    this.name = name;
    this.AddToLibrary = () => {
        let todoArea = [];
        let project = { name, status, todoArea };
        projectLibrary.push(project);
        currentProject.name = name;
    }
}

/** Putting projectLibrary array inside local library */
export function SetLibraryStorage(){
    localStorage.setItem("projectLibrary" , JSON.stringify(projectLibrary));
}

export function GetLibraryStorage(){
    let localLibrary = localStorage.getItem("projectLibrary");

    /** if localLibrary dont exist , make an empty library in name of it */
    if(!localLibrary){
        localLibrary = localStorage.setItem("projectLibrary", JSON.stringify([]))
    }
    projectLibrary = JSON.parse(localLibrary);

    /** basically start synching if library has any project inside it */
    if(projectLibrary.length > 0){
        currentProject.name = projectLibrary[0].name;
        updateTaskUI();
    }
    /** At last update UI after adding the data inside project library*/
    UIUpdater();
}
