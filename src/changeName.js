import { projectLibrary, currentProject, SetLibraryStorage } from "./project";

export default function (input) {
    input.select();
    let index = projectLibrary.findIndex(e => input.value === e.name);
    input.addEventListener('keypress', e => {
        if (e.key === 'Enter') {
            input.style.display = 'none';
            input.parentNode.getElementsByTagName('p')[0].innerHTML = input.value;
            input.parentNode.getElementsByTagName('p')[0].style.display = 'block';
            projectLibrary[index].name = input.value
            currentProject.name = input.value;
            SetLibraryStorage();
        }
    })
}

export function taskName(input){
    input.select();
    let index = projectLibrary.findIndex(e => currentProject.name === e.name)
    let innerIndex = projectLibrary[index].todoArea.findIndex(x => x.title === input.value);
    input.addEventListener('keypress', e => {
        if (e.key === 'Enter') {
            input.style.display = 'none';
            input.parentNode.getElementsByTagName('p')[0].innerHTML = input.value;
            input.parentNode.getElementsByTagName('p')[0].style.display = 'block';
            projectLibrary[index].todoArea[innerIndex].title = input.value;
            SetLibraryStorage();
        }
    })
}