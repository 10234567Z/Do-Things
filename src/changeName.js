import { projectLibrary } from "./tasks";

export default function (input) {
    input.select();
    let index = projectLibrary.findIndex(e => input.value === e.name);
    input.addEventListener('keypress', e => {
        if (e.key === 'Enter') {
            input.style.display = 'none';
            input.parentNode.getElementsByTagName('p')[0].innerHTML = input.value;
            input.parentNode.getElementsByTagName('p')[0].style.display = 'block';
            projectLibrary[index].name = input.value
        }
    })
}