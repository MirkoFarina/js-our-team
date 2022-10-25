/**MILESTONE 1:**
Stampare su console le informazioni di nome, ruolo e la stringa della foto
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

for(let employee of ourTeam ){
  console.log('Nome:', employee.name, employee.lastName,'---Ruolo:', employee.role, '----URL img:', employee.img);
}