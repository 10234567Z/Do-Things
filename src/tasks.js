
export let projectLibrary = [];

export default function Project(name,status) {
    this.status = status;
    this.name = name;
    this.AddToLibrary = () => {
        let project = { name , status};
        projectLibrary.push(project);
    }
}