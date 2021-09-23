//todo Factory Function page, will make new todo items
export function TODOProject(projectName){
    this.projectName = projectName;
    this.todos = new Array();     
}

export function TODO(title, description, dueDate, priority, notes){
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;   
}