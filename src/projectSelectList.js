import {projectsArray} from "./todoFactory.js";

export let selectProjectDiv = document.createElement("div");
selectProjectDiv.setAttribute("id", 'selectProjectDiv');

export function createProjectList(){

    let selectProjectLabel = document.createElement("label");
    selectProjectLabel.textContent = "Todo Project Selector: ";
    selectProjectLabel.setAttribute("for", "selectProject");
   
    selectProjectDiv.appendChild(selectProjectLabel);

    let selectProject = document.createElement("select");
    selectProject.setAttribute("id", 'selectProject');

    for (let i = 0; i < projectsArray.length; i++) {
        let option = projectsArray[i].projectName;
        let el = document.createElement("option");
        el.textContent = option;
        el.value = option;
        selectProject.appendChild(el);
    }
    
    selectProjectDiv.appendChild(selectProject);
};