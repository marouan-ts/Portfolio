import { items } from "./readmape.js";
import { skills } from "./skills.js";

// Display the items in the "mape" element
const ReadMape = document.getElementById('mape');

const showMape = () => {
  ReadMape.innerHTML = items.map((item, index) => {
    return `<div class="op"><span>${(index + 1)}</span> ${item.name} <a href="${item.link}">Course</a></div>`;
  }).join('');
  ReadMape.innerHTML += `<div class="op"> And more ...</div>`;
}

showMape();

// Display the skills in the "skill" element
const skill = document.getElementById('skill');

const showSkills = () => {
  skill.innerHTML = skills.map((item, index) => {
    return `
      <div class="skill overflow-hidden" key="${index}">
        ${item.skill}
        <span class="skill-cont flex">
          <span id="_${index}" class="h-full bg-cyan-100 " style="width: ${item.level}%;"></span>
        </span>
      </div>`;
  }).join('');


}

showSkills();

