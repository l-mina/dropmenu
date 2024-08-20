import './scripts.css';
import './dropdownMenu.css';
import {dropdownMenu,theme} from './dropdownMenu.js';

const dropdownIcon = document.getElementById("dropdown-icon");
dropdownIcon.addEventListener("click",()=>dropdownMenu());

const themeMode = document.getElementById("theme");
themeMode.addEventListener('click',()=>theme());