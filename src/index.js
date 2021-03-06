import {userInterface} from './userInterface.js';
import {createProjectList} from "./projectSelectList.js";
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
    picker.attach({
        target: 'dueDateInput'
    });
}