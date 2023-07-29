export default function (input) {
    input.select();
    input.addEventListener('keypress', e => {
        if (e.key === 'Enter') {
            input.style.display = 'none';
            input.parentNode.getElementsByTagName('p')[0].innerHTML = input.value;
            input.parentNode.getElementsByTagName('p')[0].style.display = 'block';
        }
    })
}