import {createProjectList} from "./projectSelectList.js";
export const projectsArray = JSON.parse(localStorage.getItem('projectsArray')) || [{"projectName": "defaultProject","todos": []},];

//todo Project Factory Function, makes new todo projects
function TODOProject(projectName){
    this.projectName = projectName;
    this.todos = new Array();     
}

//todo Factory Function, makes new todo items
function TODO(title, description, dueDate, priority, notes){
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;   
}

export function createNewProject(){
    let duplicateFound = false;
        
    for (const project of projectsArray){
        console.log('projectInput.value ' + projectInput.value);
        console.log('project.projectName ' + project.projectName);

        if (projectInput.value == project.projectName){
            duplicateFound = true;        
            break;
        }
    }  

    if (duplicateFound){
        console.log("createNewProject, project already exists");
        alert('This Project already exists.');
        projectInput.value = '';
    } else {
        console.log('createNewProject. new project made');
        projectsArray.push(new TODOProject(projectInput.value));
        projectInput.value = '';
      
        let jsonProjectsArray = JSON.stringify(projectsArray);
      
        localStorage.setItem('projectsArray', jsonProjectsArray);

        document.getElementById('selectProjectDiv').innerHTML = "";

        createProjectList();
    }
    duplicateFound = false;
}

export function createNewTODO(){
    //makes new todo object
    let title = document.getElementById('titleInput').value;
    let description = document.getElementById('descriptionInput').value;
    let dueDate = document.getElementById('dueDateInput').value;
    let priority = document.getElementById('priorityInput').value;
    let notes = document.getElementById('notesInput').value;
    
    let todoProjectSelector = document.getElementById('selectProject').value;
  
    if (title === '' || description === '' || dueDate === '' || priority === '' || notes === ''){
        alert('Please input a value into each field before submitting your book!');
        document.getElementById('titleInput').value = '';
        document.getElementById('descriptionInput').value = '';
        document.getElementById('dueDateInput').value = '';
        document.getElementById('priorityInput').value = '';
        document.getElementById('notesInput').value = '';
    } else {
        let todo = new TODO(
            title,
            description,
            dueDate,
            priority,
            notes,
        );
  
        let doesProjectExist = false;

        for (let i = 0; i < projectsArray.length; i++) {
            console.log('projectSelector ' + todoProjectSelector + ' comparing to: ' + projectsArray[i].projectName);
    
            if (todoProjectSelector == projectsArray[i].projectName){  
                console.log('This project selection exists!');
                doesProjectExist = true;
            } 
            
            if (doesProjectExist){
                alert(todo.title + ' added to ' + projectsArray[i].projectName);
                
                projectsArray[i].todos.push(todo);
                
    
                let jsonProjectsArray = JSON.stringify(projectsArray);
                localStorage.setItem('projectsArray', jsonProjectsArray); 

                break;
    
            } 
            doesProjectExist = false;
        }  
        
        document.getElementById('titleInput').value = '';
        document.getElementById('descriptionInput').value = '';
        document.getElementById('dueDateInput').value = '';
        document.getElementById('priorityInput').value = '';
        document.getElementById('notesInput').value = '';
        //document.getElementById('todoProjectSelector').value = '';
    }
}