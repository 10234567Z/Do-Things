import { taskLibrary } from "./tasks";
import { todoTask } from "./index.js";


export default function Todo(title , date , name){
    this.title = title;
    this.date = date;
    this.AddToDo = () =>{
        let bookIndex = taskLibrary.findIndex(t => t.name === name);
        let todo = { title , date}
        taskLibrary[bookIndex].push(todo)
    }
}


export function buildTodo(name){
    let title = document.createElement('div');
    title.classList.add('todo' , 'title');
    title.innerHTML = "Your new task for this project";

    let checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.classList.add('todo' , "check");

    let todoContainer = document.createElement('div');
    todoContainer.classList.add('todoContainer');

    todoTask.append(todoContainer);
    todoContainer.append(checkbox , title)
}