//todoDisplay() displays all the todos currently in the project array
//import {myProject} from "./todoFactory";

export function todoDisplay(){
    let container = document.getElementById('projectContainer');
    container.innerHTML = ' ';
 
    //for (let i = 0; i < myProject.length; i++) {
        //let todoContainer = document.createElement('div');
        //let todo = myProject[i];
 
        //let todoDiv = document.createElement('div'); 
        //todoDiv.setAttribute('class', projectInput.value);
 
        //title, description, dueDate, priority, notes
            //let todoText = document.createElement('p');
            //todoText.innerHTML += todo.title + ' consists of: ' + todo.description;
            //todoText.innerHTML += '<br>This todo is due on: ' + todo.dueDate + '.';
            //todoText.innerHTML += '<br>This todo has a ' + todo.priority + ' priority level.';
            //todoText.innerHTML += '<br>Notes for the todo: ' + todo.notes;
    
        //let hasBeenCompletedText = document.createElement('p'); 
 
        //marks a todo as having been completed
        //let todoCompletionButton = document.createElement('button');
            //todoCompletionButton.setAttribute('type', 'button');
            //todoCompletionButton.setAttribute('class', 'btn');
            //todoCompletionButton.textContent = 'Mark todo as complete';
 
        //todoCompletionButton.addEventListener('click', function(){
        //hasBeenCompletedText.textContent = 'This todo has been completed!';
        //});
 
        //run removeTodoFromProject onclick
        //let removeTodoButton = document.createElement('button');
            //removeTodoButton.setAttribute('type', 'button');
            //removeTodoButton.setAttribute('class', 'btn');
            //removeTodoButton.textContent = 'Click here to remove todo.';
 
        //removeTodoButton.addEventListener('click', removeTodoFromProject);

        //function removeTodoFromProject(){
            //removes selected book from library onclick
                //myProject.splice([i], 1);
   
            //let jsonMyProject = JSON.stringify(myProject);
   
            //localStorage.setItem('myProject', jsonMyProject);
   
            //todoDisplay();
        //}
 
        //appends elements to a Book's entry div
            //todoDiv.appendChild(todoText);
            //todoDiv.appendChild(hasBeenCompletedText);
            //todoDiv.appendChild(todoCompletionButton);
            //todoDiv.appendChild(removeTodoButton);
            //todoContainer.appendChild(todoDiv);
            //container.appendChild(todoContainer);
    //}
};