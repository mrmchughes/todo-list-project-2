import {contentDiv} from "./index.js";

export let editFormDiv = document.createElement("div");
editFormDiv.setAttribute("id", "editFormDiv");

export function editTodos(){
let editForm = document.createElement("form");

let editTitleInputDiv = document.createElement("div");

        let editTitleInputLabel = document.createElement("label");
        editTitleInputLabel.textContent = "Todo Name: "
        editTitleInputLabel.setAttribute("for", "editTitleInput");

        let editTitleInput = document.createElement("input");
        editTitleInput.setAttribute("type", "text");
        editTitleInput.setAttribute("id", "editTitleInput");
        editTitleInput.setAttribute("name", "editTitleInput")
        editTitleInput.setAttribute("placeholder", "Enter a name for your TODO");
        editTitleInput.setAttribute("require", "");

        editTitleInputDiv.appendChild(editTitleInputLabel);
        editTitleInputDiv.appendChild(editTitleInput);
        editForm.appendChild(editTitleInputDiv);

        let editDescriptionInputDiv = document.createElement("div");
        
        let editDescriptionInputLabel = document.createElement("label");
        editDescriptionInputLabel.textContent = "Todo Description: ";
        editDescriptionInputLabel.setAttribute("for", "editDescriptionInput");

        let editDescriptionInput = document.createElement("input");
        editDescriptionInput.setAttribute("type", "text");
        editDescriptionInput.setAttribute("id", "editDescriptionInput");
        editDescriptionInput.setAttribute("name", "editDescriptionInput")
        editDescriptionInput.setAttribute("placeholder", "Enter a description for your TODO");
        editDescriptionInput.setAttribute("require", "");

        editDescriptionInputDiv.appendChild(editDescriptionInputLabel);
        editDescriptionInputDiv.appendChild(editDescriptionInput);
        editForm.appendChild(editDescriptionInputDiv);

        let editDueDateInputDiv = document.createElement("div");

        let editDueDateInputLabel = document.createElement("label");
        editDueDateInputLabel.textContent = "Todo Due Date: ";
        editDueDateInputLabel.setAttribute("for", "editDueDateInput");

        let editDueDateInput = document.createElement("input");
        editDueDateInput.setAttribute("type", "text");
        editDueDateInput.setAttribute("id", "editDueDateInput");
        editDueDateInput.setAttribute("placeholder", "Popup");

        editDueDateInputDiv.appendChild(editDueDateInputLabel);
        editDueDateInputDiv.appendChild(editDueDateInput);
        editForm.appendChild(editDueDateInputDiv);

        let editPriorityInputDiv = document.createElement("div");

        let editPriorityInputLabel = document.createElement("label");
        editPriorityInputLabel.textContent = "Todo Priority: "
        editPriorityInputLabel.setAttribute("for", "editPriorityInput");

        let editPriorityInput = document.createElement("select");
        editPriorityInput.setAttribute("id", "editPriorityInput");
        editPriorityInput.setAttribute("name", "editPriorityInput")

        for(let i = 1; i < 4; i++) {
            let opt = document.createElement("option");
            opt.value = i;
            opt.textContent = i;
            opt.innerHTML = i;
            editPriorityInput.appendChild(opt);
        }

        editPriorityInputDiv.appendChild(editPriorityInputLabel);
        editPriorityInputDiv.appendChild(editPriorityInput);
        editForm.appendChild(editPriorityInputDiv);

        let editNotesInputDiv = document.createElement("div");

        let editNotesInputLabel = document.createElement("label");
        editNotesInputLabel.textContent = "Todo Notes: ";
        editNotesInputLabel.setAttribute("for", "editNotesInput");

        let editNotesInput = document.createElement("input");
        editNotesInput.setAttribute("type", "text");
        editNotesInput.setAttribute("id", "editNotesInput");
        editNotesInput.setAttribute("name", "editNotesInput")
        editNotesInput.setAttribute("placeholder", "Enter any notes for your TODO");
        editNotesInput.setAttribute("require", "");

        editNotesInputDiv.appendChild(editNotesInputLabel);
        editNotesInputDiv.appendChild(editNotesInputLabel);
        editForm.appendChild(editNotesInputDiv);

        let closeButton = document.createElement("button");
        closeButton.setAttribute("class", "closeButton");
        closeButton.textContent = "Close edit form";

        closeButton.addEventListener("click", function(){
            document.getElementById('editFormDiv').style.display = "none";
        });

        editForm.appendChild(closeButton);
        editFormDiv.appendChild(editForm);

        contentDiv.appendChild(editFormDiv);
}
