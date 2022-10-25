/**MILESTONE 2:**
Stampare le stesse informazioni su DOM sotto forma di stringhe
*/
const ourTeam = [
  {
    name: "Wayne",
    lastName: "Barnett",
    role: "Founder & CEO",
    img: "wayne-barnett-founder-ceo.jpg"
  },
  {
    name: "Angela",
    lastName: "Caroll",
    role: "Chief Editor",
    img: "angela-caroll-chief-editor.jpg"
  },
  {
    name: "Walter",
    lastName: "Gordon",
    role: "Office Manager",
    img: "walter-gordon-office-manager.jpg"
  },
  {
    name: "Angela",
    lastName: "Lopez",
    role: "Social Media Manager",
    img: "angela-lopez-social-media-manager.jpg"
  },
  {
    name: "Scott",
    lastName: "Estrada",
    role: "Developer",
    img: "scott-estrada-developer.jpg"
  },
  {
    name: "Barbara",
    lastName: "Ramos",
    role: "Graphic Designer",
    img: "barbara-ramos-graphic-designer.jpg"
  }
];

const output = document.querySelector('.output');
let msg = '';
for(let employee of ourTeam ){
  msg += `
    Nome: ${employee.name} ${employee.lastName} - Ruolo: ${employee.role} - Url img: ${employee.img} <br>
  `;
}

output.innerHTML = msg;