
import { items } from "./readmape.js";

const ReadMape = document.getElementById('mape');



const showSkills = () => {
    ReadMape.innerHTML = '';
    ReadMape.innerHTML = items.map((item, index) => {
    return `<div class="op"><span>${(index + 1)}</span> ${item.name} <a href="${item.link}">Course</a></div>`
}).join('');
    ReadMape.innerHTML +=  `<div class="op"> And more ...</div>`
}
showSkills();