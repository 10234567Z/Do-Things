import { projectLibrary, currentProject, SetLibraryStorage } from "./project";

export default function (input) {
    input.select();
    /** Getting project index */
    let index = projectLibrary.findIndex(e => input.value === e.name);

    /** Upon pressing enter , if it passes the validation it will make a new project while also
     * storing in local storage otherwise it will simply close form */
    input.addEventListener('keypress', e => {
        if (e.key === 'Enter') {
            let validation = ProjectNameValidation(input.value);
            if(input.value.trim() !== '' && validation){
            input.parentNode.getElementsByTagName('p')[0].innerHTML = input.value;
            projectLibrary[index].name = input.value
            currentProject.name = input.value;
            SetLibraryStorage();
            }
            input.style.display = 'none';
            input.parentNode.getElementsByTagName('p')[0].style.display = 'block';
        }
    })
}

export function taskName(input){
    input.select();

    /** Getting task and project index */
    let index = projectLibrary.findIndex(e => currentProject.name === e.name)
    let innerIndex = projectLibrary[index].todoArea.findIndex(x => x.title === input.value);

    /** Upon pressing enter , if it passes the validation it will make a new task while also
     * storing in local storage otherwise it will simply close form */
    input.addEventListener('keypress', e => {
        if (e.key === 'Enter') {
            let validation = TaskNameValidation(input.value);
            if(input.value.trim() !== '' && validation){
            input.parentNode.getElementsByTagName('p')[0].innerHTML = input.value;
            projectLibrary[index].todoArea[innerIndex].title = input.value;
            SetLibraryStorage();
            }
            input.style.display = 'none';
            input.parentNode.getElementsByTagName('p')[0].style.display = 'block';
        }
    })
}


/**
 * Following two functions are for name invalidation of same names as the ones previously used
 * on other project or task
 */
function TaskNameValidation(name) {
    let validate = true;
    let index = projectLibrary.findIndex(e => currentProject.name === e.name)
    for (let i = 0; i < projectLibrary[index].todoArea.length; i++) {
        if (projectLibrary[index].todoArea[i].title.toUpperCase() === name.toUpperCase()) {
            validate = false;
            break;
        }
    }
    return validate;
}

function ProjectNameValidation(name) {
    let validate = true;
    for (let i = 0; i < projectLibrary.length; i++) {
        if (projectLibrary[i].name.toUpperCase() === name.toUpperCase()) {
            validate = false;
            break;
        }
    }
    return validate;
}