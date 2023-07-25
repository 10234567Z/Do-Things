
export let taskLibrary = [];

export default function Task(name, description, duedate) {
    this.name = name;
    this.description = description;
    this.duedate = duedate;
    this.AddToLibrary = () => {
        let task = { name , description , duedate};
        taskLibrary.push(task);
    }
}