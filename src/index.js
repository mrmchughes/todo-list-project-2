import {userInterface} from './userInterface.js';
import {createProjectList} from "./projectSelectList.js";
import {projectsArray} from "./todoFactory.js";
import {picker} from "./datePicker.js";
import {projectsDisplay} from "./dataStructure.js";
import {newProjectAndTodoInput} from "./newProject.js";
import './style.css';

export let contentDiv = document.getElementById('content');

window.onload = function() {
    newProjectAndTodoInput();
    userInterface();
    createProjectList();
    projectsDisplay();
    console.log(projectsArray);
    picker.attach({
        target: 'dueDateInput'
    });
}