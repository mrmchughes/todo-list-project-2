import {contentDiv} from "./index.js";
import {projectsArray} from "./todoFactory.js";
import {userInterfaceDiv} from "./userInterface.js";
//import {createNewTODO} from "./todoFactory.js";

let projectsDisplayDiv = document.createElement("div");

export function projectsDisplay(){
    projectsDisplayDiv.innerHTML = '';

    for (const [i] in projectsArray) {
        let projectDiv = document.createElement("div");
        projectDiv.setAttribute("class", "projectDiv");
        projectDiv.innerText = projectsArray[i].projectName;

        let createNewTODOButton = document.createElement("button");
        createNewTODOButton.innerText = "Add a new Todo";
        createNewTODOButton.setAttribute("id", "createNewTODOButton");

        createNewTODOButton.addEventListener("click", function(){
            userInterfaceDiv.style.display = "block";
        })

        projectDiv.appendChild(createNewTODOButton);

        let projectDeleteButton = document.createElement("button");
        projectDeleteButton.setAttribute("class", "projectDeleteButton");
        projectDeleteButton.textContent = 'Click to delete project';

        projectDeleteButton.addEventListener("click", function(){
            projectsArray.splice(i, 1);
            let jsonProjectsArray = JSON.stringify(projectsArray);
            localStorage.setItem('projectsArray', jsonProjectsArray); 
            console.log(projectsArray);
            projectsDisplay();
        });

        projectDiv.appendChild(projectDeleteButton);

            for (const todo of projectsArray[i].todos){
                let todoDiv = document.createElement("div");
                todoDiv.setAttribute("class", "todoDiv");
                let todoDivTextDiv = document.createElement("div");

                todoDivTextDiv.innerText += todo.title;
                todoDivTextDiv.innerText += "\n Due on: " + todo.dueDate;

                let editButton = document.createElement("button");
                editButton.textContent = "Click to edit this dodo";
                editButton.addEventListener("click", function(){
                    //edit form fields
                    console.log("I'm editButton");
                    userInterfaceDiv.style.display = "block";
                })
                
                let deleteButton = document.createElement("button");
                deleteButton.textContent = "Click to delete todo";
                deleteButton.addEventListener("click", function(){
                    projectsArray[i].todos.splice(todo, 1);
                    let jsonProjectsArray = JSON.stringify(projectsArray);
                    localStorage.setItem('projectsArray', jsonProjectsArray); 
                    console.log(projectsArray);
                    projectsDisplay();
                });

                let viewTodoButton = document.createElement("button");
                viewTodoButton.textContent = "Click to view todo";
                viewTodoButton.addEventListener("click", function(){
                    todoDivTextDiv.innerText = '';
                    todoDivTextDiv.innerText += todo.title;
                    todoDivTextDiv.innerText += "\n Description: " + todo.description;
                    todoDivTextDiv.innerText += "\n Due on: " + todo.dueDate;
                    todoDivTextDiv.innerText += "\n Priority: " + todo.priority;
                    todoDivTextDiv.innerText += "\n Notes: " + todo.notes;
                })

                let closeTodoButton = document.createElement("button");
                closeTodoButton.textContent = "Click to close todo";
                closeTodoButton.addEventListener("click", function(){
                    todoDivTextDiv.innerText = '';
                    todoDivTextDiv.innerText += todo.title;
                    todoDivTextDiv.innerText += "\n Due on: " + todo.dueDate;
                })

                todoDiv.appendChild(todoDivTextDiv);
                todoDiv.appendChild(editButton);
                todoDiv.appendChild(deleteButton);
                todoDiv.appendChild(viewTodoButton);
                todoDiv.appendChild(closeTodoButton);
                projectDiv.appendChild(todoDiv);
            }
        
        projectsDisplayDiv.appendChild(projectDiv);
        contentDiv.appendChild(projectsDisplayDiv);
    }
};