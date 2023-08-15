import jQuery from "jquery";
import { projectLibrary,currentProject, SetLibraryStorage } from "./project";
window.$ = window.jQuery = jQuery;


export let dateSet = '';

/** On change of date of task , it will pass an event to change the value inside local storage, project library and UI */
export default function DateSelector(input) {
    let index = projectLibrary.findIndex(e => currentProject.name === e.name)
    let innerIndex = projectLibrary[index].todoArea.findIndex(x => x.date === input.value);
    $(".dateInput").on('change', function () { 
        dateSet = this.value;
        input.style.display = 'none';
        input.parentNode.getElementsByTagName('p')[0].innerHTML = input.value;
        input.parentNode.getElementsByTagName('p')[0].style.display = 'block';
        projectLibrary[index].todoArea[innerIndex].date = input.value;
        SetLibraryStorage();
    });
}
