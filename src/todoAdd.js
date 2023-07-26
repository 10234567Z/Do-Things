import { taskLibrary } from "./tasks";


export default function Todo(title , date , name){
    this.title = title;
    this.date = date;
    this.AddToDo = () =>{
        let bookIndex = taskLibrary.findIndex(t => t.name === name);
        let todo = { title , date}
        taskLibrary[bookIndex].push(todo)
    }
}