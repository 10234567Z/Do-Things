import jQuery from "jquery";
import { projectLibrary,currentProject } from "./tasks";
window.$ = window.jQuery = jQuery;


export let dateSet = '';
export default function DateSelector(input) {
    let index = projectLibrary.findIndex(e => currentProject.name === e.name)
    let innerIndex = projectLibrary[index].todoArea.findIndex(x => x.date === input.value);
    $(".dateInput").on('change', function () { 
        dateSet = this.value;
        input.style.display = 'none';
        input.parentNode.getElementsByTagName('p')[0].innerHTML = input.value;
        input.parentNode.getElementsByTagName('p')[0].style.display = 'block';
        projectLibrary[index].todoArea[innerIndex].date = input.value;
    });
}
