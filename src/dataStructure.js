import {contentDiv} from "./index.js";
import {projectsArray} from "./todoFactory.js";
import {userInterfaceDiv} from "./userInterface.js";

let projectsDisplayDiv = document.createElement("div");

export function projectsDisplay(){
    projectsDisplayDiv.innerHTML = '';

    for (const [i] in projectsArray) {
        let projectDiv = document.createElement("div");
        projectDiv.setAttribute("class", "projectDiv");
        projectDiv.innerText = projectsArray[i].projectName;

        let newTODOButton = document.createElement("button");
        newTODOButton.innerText = "New Todo";
        newTODOButton.setAttribute("id", "newTODOButton");

        newTODOButton.addEventListener("click", function(){
            userInterfaceDiv.style.display = "block";
        })

        projectDiv.appendChild(newTODOButton);

        let projectDeleteButton = document.createElement("button");
        projectDeleteButton.setAttribute("class", "projectDeleteButton");
        projectDeleteButton.textContent = 'Delete project';

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
                editButton.textContent = "Edit todo";
                editButton.addEventListener("click", function(){
                    userInterfaceDiv.style.display = "block";
                    userInterfaceDiv.style.backgroundColor = "green";
                    console.log("I am the edit button"); 
                         
                    userInterfaceDiv.style.display = "block";
                    userInterfaceDiv.style.backgroundColor = "green";

                    titleInput.value = todo.title;
                    descriptionInput.value = todo.description;
                    dueDateInput.value = todo.dueDate;
                    priorityInput.value = todo.priority;
                    notesInput.value = todo.notes;

                    createNewTODOButton.addEventListener("click", function(){
                        let updateVariable = todo.title;
                        
                        projectsArray[i].todos = projectsArray[i].todos.filter(function( todo ){
                            return todo.title !== updateVariable;
                        });

                        let jsonProjectsArray = JSON.stringify(projectsArray);
                        localStorage.setItem('projectsArray', jsonProjectsArray); 
                    
                        console.log(projectsArray);
                        projectsDisplay();

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
                    },{once: true});
                });
                
                let deleteButton = document.createElement("button");
                deleteButton.textContent = "Delete todo";
                deleteButton.addEventListener("click", function(){
                    
                    let testVariable = todo.title;
                    console.log(testVariable + ' is in the process of being deleted');
                    
                    console.log(todo.title + ' deleted')
                      
                    projectsArray[i].todos = projectsArray[i].todos.filter(function( todo ){
                        return todo.title !== testVariable;
                    });

                    let jsonProjectsArray = JSON.stringify(projectsArray);
                    localStorage.setItem('projectsArray', jsonProjectsArray); 
                    
                    console.log(projectsArray);
                    projectsDisplay();
                });

                let viewTodoButton = document.createElement("button");
                viewTodoButton.textContent = "Expand todo";
                viewTodoButton.addEventListener("click", function(){
                    todoDivTextDiv.innerText = '';
                    todoDivTextDiv.innerText += todo.title;
                    todoDivTextDiv.innerText += "\n Due on: " + todo.dueDate;
                    todoDivTextDiv.innerText += "\n Description: " + todo.description;
                    todoDivTextDiv.innerText += "\n Priority: " + todo.priority;
                    todoDivTextDiv.innerText += "\n Notes: " + todo.notes;
                })

                let closeTodoButton = document.createElement("button");
                closeTodoButton.textContent = "Collapse todo";
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