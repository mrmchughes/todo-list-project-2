import {contentDiv} from "./index.js";
import {createNewTODO} from './todoFactory.js';
import {selectProjectDiv} from "./projectSelectList.js";

export let userInterfaceDiv = document.createElement("div");
userInterfaceDiv.id = "userInterfaceDiv";
userInterfaceDiv.className = "userInterfaceDiv";

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
    dueDateInput.setAttribute("placeholder", "Select Due Date");

    dueDateInputDiv.appendChild(dueDateInputLabel);
    dueDateInputDiv.appendChild(dueDateInput);
    userInterfaceDiv.appendChild(dueDateInputDiv);

    let priorityInputDiv = document.createElement("div");

    let priorityInputLabel = document.createElement("label");
    priorityInputLabel.textContent = "Todo Priority: "
    priorityInputLabel.setAttribute("for", "priorityInput");

    let priorityInput = document.createElement("select");
    priorityInput.setAttribute("id", "priorityInput");
    priorityInput.setAttribute("name", "priorityInput")

    for(let i = 1; i < 4; i++) {
        let opt = document.createElement("option");
        opt.value = i;
        opt.textContent = i;
        opt.innerHTML = i;
        priorityInput.appendChild(opt);
    }

    priorityInputDiv.appendChild(priorityInputLabel);
    priorityInputDiv.appendChild(priorityInput);
    userInterfaceDiv.appendChild(priorityInputDiv);

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

    userInterfaceDiv.appendChild(selectProjectDiv);

    let createNewTODOButton = document.createElement("button");
    createNewTODOButton.innerText = "Update Todo";
    createNewTODOButton.setAttribute("id", "createNewTODOButton");
    
    userInterfaceDiv.appendChild(createNewTODOButton);

    contentDiv.appendChild(userInterfaceDiv);

    //createNewTODOButton runs the createNewTODO() function
    document.getElementById("createNewTODOButton").addEventListener('click', createNewTODO);
    
    let closeButton = document.createElement("button");
    closeButton.textContent = "Close";

    closeButton.addEventListener("click", function(){
        userInterfaceDiv.style.display = "none";
        userInterfaceDiv.style.backgroundColor = "grey";

        titleInput.value = '';
        descriptionInput.value = '';
        dueDateInput.value = '';
        notesInput.value = '';

        titleInput.setAttribute("placeholder", "Enter a name for your TODO");
        descriptionInput.setAttribute("placeholder", "Enter a description for your TODO");
        dueDateInput.setAttribute("placeholder", "Select Due Date");
        notesInput.setAttribute("placeholder", "Enter any notes for your TODO");
    });

    userInterfaceDiv.appendChild(closeButton);
}