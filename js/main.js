
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

// const skill = document.getElementById('skil')
// for(let i = 0; i<100 ; i++) {
//     skill.style.backgroundImage = `background-image: linear-gradient(to right , #ffffff ${i}%, transparent );`
// }