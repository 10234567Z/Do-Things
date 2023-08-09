
export let projectLibrary = [];
export let currentProject = {
    name: ''
};

export default function Project(name,status) {
    this.status = status;
    this.name = name;
    this.AddToLibrary = () => {
        let todoArea = [];
        let project = { name , status , todoArea };
        projectLibrary.push(project);
        currentProject.name = name;
    }
}