import {userInterface} from './userInterface.js';
import {createProjectList} from "./projectSelectList.js";
import {projectsArray} from "./todoFactory.js";
import {picker} from "./datePicker.js";
import './style.css';

export let contentDiv = document.getElementById('content');

window.onload = function() {
    userInterface();
    createProjectList();
    console.log(projectsArray);
    picker.attach({
        target: 'dueDateInput'
    });
}