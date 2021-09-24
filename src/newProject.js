import { contentDiv } from "./index.js";
import {createNewProject} from "./todoFactory.js";

export function newProjectInput(){
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
        createNewProjectButton.innerText = "Create a new project";
        createNewProjectButton.setAttribute("id", "createNewProjectButton")

        projectInputDiv.appendChild(projectInputLabel);
        projectInputDiv.appendChild(projectInput);
        projectInputDiv.appendChild(createNewProjectButton);

    //createNewProjectButton runs the createNewProject() function
    createNewProjectButton.addEventListener('click', createNewProject);

    contentDiv.appendChild(projectInputDiv);
};