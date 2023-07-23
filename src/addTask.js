import './style.css';
import { addButton,addName } from './index.js';

export default function AddMethod(){
    ChangeDisplay();
}

function ChangeDisplay(){
    if(addName.style.visibility === 'visible'){
        addName.style.visibility = 'hidden';
        addName.style.opacity = '0';
    }
    else{
        addName.style.visibility = 'visible';
        addName.style.opacity = '1';
    }
}