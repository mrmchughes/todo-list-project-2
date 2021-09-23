import {contentDiv} from "./index.js";
import {createNewProject, createNewTODO} from './todoNewDisplay.js';
//import {projectsArray} from "./todoNewDisplay.js";

export let userInterfaceDiv = document.createElement("div");
userInterfaceDiv.id = "userInterfaceDiv";

export function userInterface() {
    

    let titleInputDiv = document.createElement("div");

    let titleInputLabel = document.createElement("label");
    titleInputLabel.textContent = "Todo Name: "
    titleInputLabel.setAttribute("for", "titleInput");

    let titleInput = document.createElement("input");
    titleInput.setAttribute("type", "text");
    titleInput.setAttribute("id", "titleInput");
    titleInput.setAttribute("name", "titleInput")
    titleInput.setAttribute("placeholder", "Enter a name for your TODO");
    titleInput.setAttribute("require", "");

    titleInputDiv.appendChild(titleInputLabel);
    titleInputDiv.appendChild(titleInput);
    userInterfaceDiv.appendChild(titleInputDiv);

    let descriptionInputDiv = document.createElement("div");
    
    let descriptionInputLabel = document.createElement("label");
    descriptionInputLabel.textContent = "Todo Description: ";
    descriptionInputLabel.setAttribute("for", "descriptionInput");

    let descriptionInput = document.createElement("input");
    descriptionInput.setAttribute("type", "text");
    descriptionInput.setAttribute("id", "descriptionInput");
    descriptionInput.setAttribute("name", "descriptionInput")
    descriptionInput.setAttribute("placeholder", "Enter a description for your TODO");
    descriptionInput.setAttribute("require", "");

    descriptionInputDiv.appendChild(descriptionInputLabel);
    descriptionInputDiv.appendChild(descriptionInput);
    userInterfaceDiv.appendChild(descriptionInputDiv);

    let dueDateInputDiv = document.createElement("div");

    let dueDateInputLabel = document.createElement("label");
    dueDateInputLabel.textContent = "Todo Due Date: ";
    dueDateInputLabel.setAttribute("for", "dueDateInput");

    let dueDateInput = document.createElement("input");
    dueDateInput.setAttribute("type", "text");
    dueDateInput.setAttribute("id", "dueDateInput");
    dueDateInput.setAttribute("name", "dueDateInput")
    dueDateInput.setAttribute("placeholder", "Enter a dueDate for your TODO");
    dueDateInput.setAttribute("require", "");

    userInterfaceDiv.appendChild(dueDateInputLabel);
    userInterfaceDiv.appendChild(dueDateInput);

    let priorityInputLabel = document.createElement("label");
    priorityInputLabel.textContent = "Todo Priority: "
    priorityInputLabel.setAttribute("for", "priorityInput");

    let priorityInput = document.createElement("input");
    priorityInput.setAttribute("type", "text");
    priorityInput.setAttribute("id", "priorityInput");
    priorityInput.setAttribute("name", "priorityInput")
    priorityInput.setAttribute("placeholder", "Enter a priority for your TODO");
    priorityInput.setAttribute("require", "");

    dueDateInputDiv.appendChild(priorityInputLabel);
    dueDateInputDiv.appendChild(priorityInput);
    userInterfaceDiv.appendChild(dueDateInputDiv);

    let notesInputDiv = document.createElement("div");

    let notesInputLabel = document.createElement("label");
    notesInputLabel.textContent = "Todo Notes: ";
    notesInputLabel.setAttribute("for", "notesInput");

    let notesInput = document.createElement("input");
    notesInput.setAttribute("type", "text");
    notesInput.setAttribute("id", "notesInput");
    notesInput.setAttribute("name", "notesInput")
    notesInput.setAttribute("placeholder", "Enter any notes for your TODO");
    notesInput.setAttribute("require", "");

    notesInputDiv.appendChild(notesInputLabel);
    notesInputDiv.appendChild(notesInput);
    userInterfaceDiv.appendChild(notesInputDiv);

    let projectInputDiv = document.createElement("div");
    projectInputDiv.setAttribute("id", "projectInputDiv");

    let projectInputLabel = document.createElement("label");
    projectInputLabel.textContent = "New Todo Project: ";
    projectInputLabel.setAttribute("for", "projectInput");

    let projectInput = document.createElement("input");
    projectInput.setAttribute("type", "text");
    projectInput.setAttribute("id", "projectInput");
    projectInput.setAttribute("name", "projectInput")
    projectInput.setAttribute("placeholder", "Enter the name of your new project: ");
    projectInput.setAttribute("require", "");

    projectInputDiv.appendChild(projectInputLabel);
    projectInputDiv.appendChild(projectInput);
    userInterfaceDiv.appendChild(projectInputDiv);


    let createNewTODOButton = document.createElement("button");
    createNewTODOButton.innerText = "Add a new Todo";
    createNewTODOButton.setAttribute("id", "createNewTODOButton");

    let createNewProjectButton = document.createElement("button");
    createNewProjectButton.innerText = "Create a new project";
    createNewProjectButton.setAttribute("id", "createNewProjectButton")

    let todoDisplayButton = document.createElement("button");
    todoDisplayButton.innerText = "Display Current Todos";
    todoDisplayButton.setAttribute("id", "todoDisplayButton");
    
    userInterfaceDiv.appendChild(createNewTODOButton);
    userInterfaceDiv.appendChild(createNewProjectButton);
    userInterfaceDiv.appendChild(todoDisplayButton);

    contentDiv.appendChild(userInterfaceDiv);

    let projectContainer = document.createElement("div");
    projectContainer.setAttribute("id", "projectContainer");

    //createNewTODOButton runs the createNewTODO() function
    document.getElementById("createNewTODOButton").addEventListener('click', createNewTODO);
    
    //createNewProjectButton runs the createNewProject() function
    document.getElementById("createNewProjectButton").addEventListener('click', createNewProject);

    //todoDisplayButton runs the todoDisplay() function
        //document.getElementById("todoDisplayButton").addEventListener('click', todoDisplay);
}