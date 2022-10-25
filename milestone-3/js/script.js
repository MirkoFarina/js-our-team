/**MILESTONE 3:**
Stampare delle card formattate contenete immagini e testo (La grafica fornita è solo un esempio ma sentitevi liberi di “graficare” come preferite)
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

const row = document.querySelector('.row');



for(let employee of ourTeam ){
  let card = `
    <div class="col">
      <div class="card h-100">
        <div class="mf-container-img overflow-hidden">
          <img src="img/${employee.img}" class="card-img-top" alt="${employee.name} ${employee.lastName}">
        </div>
        <div class="card-body">
          <h3 class="card-title">
            ${employee.name} ${employee.lastName}
          </h3>
          <p class="card-text text-bg-secondary p-2">
            ${employee.role}
          </p>
        </div>
    </div>
    </div>
  `;

  row.innerHTML += card;
}

