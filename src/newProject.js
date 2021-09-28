import { contentDiv } from "./index.js";
import {createNewProject} from "./todoFactory.js";

export function newProjectAndTodoInput(){
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

    let createNewProjectButton = document.createElement("button");
    createNewProjectButton.setAttribute("class", "createNewProjectButton");
    createNewProjectButton.innerText = "Create a new project";
    createNewProjectButton.setAttribute("id", "createNewProjectButton")

    //createNewProjectButton runs the createNewProject() function
    createNewProjectButton.addEventListener('click', createNewProject);

    projectInputDiv.appendChild(projectInputLabel);
    projectInputDiv.appendChild(projectInput);
    projectInputDiv.appendChild(createNewProjectButton);

    contentDiv.appendChild(projectInputDiv);

    let newTodoDiv = document.createElement("div");
    newTodoDiv.setAttribute("id", "newTodoDiv");

    let newTodoLabel = document.createElement("label");
    newTodoLabel.textContent = "New Todo: ";
    newTodoLabel.setAttribute("for", "newTODOScreenButton");
    
    let newTODOScreenButton = document.createElement("button");
    newTODOScreenButton.setAttribute("class", "newTODOScreenButton");
    newTODOScreenButton.innerText = "New Todo";
    newTODOScreenButton.setAttribute("id", "newTODOScreenButton");

    newTODOScreenButton.addEventListener("click", function(){
        userInterfaceDiv.style.display = "block";
    })

    newTodoDiv.appendChild(newTodoLabel);
    newTodoDiv.appendChild(newTODOScreenButton);

    contentDiv.appendChild(newTodoDiv);
};