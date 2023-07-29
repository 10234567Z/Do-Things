export default function(input){
    input.select();
    input.addEventListener('keypress' , e => {
        input.style.display = 'none';
        input.parentNode.getElementsByTagName('p')[0].style.display = 'block';
    })
}