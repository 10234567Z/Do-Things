import UIUpdater from "./addToUI"
import updateTaskUI from "./updateTask";

export let projectLibrary = [];
export let currentProject = {
    name: ''
};

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

export function SetLibraryStorage(){
    localStorage.setItem("projectLibrary" , JSON.stringify(projectLibrary));
}

export function GetLibraryStorage(){
    let localLibrary = localStorage.getItem("projectLibrary");
    if(!localLibrary){
        localLibrary = localStorage.setItem("projectLibrary", JSON.stringify([]))
    }
    projectLibrary = JSON.parse(localLibrary);
    if(projectLibrary.length > 0){
        currentProject.name = projectLibrary[0].name;
        updateTaskUI();
    }
    UIUpdater();
}
