
export let taskLibrary = [];

export default function Task(name, description, duedate, priority) {
    this.name = name;
    this.description = description;
    this.duedate = duedate;
    this.priority = priority;
    this.AddToLibrary = () => {
        let task = { name , description , duedate, priority};
        taskLibrary.push(task);
    }
}