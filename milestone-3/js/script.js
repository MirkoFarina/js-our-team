const ourTeam = [
  {
    name: "Wayne",
    lastName: "Barnett",
    role: "Founder & CEO",
    img: "wayne-barnett-founder-ceo.jpg",
    adjectives: ['Creative','Hardworking','Friendly','Brilliant','Open-minded'],
    skills: ['Problem solving','Time management']
  },
  {
    name: "Angela",
    lastName: "Caroll",
    role: "Chief Editor",
    img: "angela-caroll-chief-editor.jpg",
    adjectives: ['Creative','Friendly','Hardworking','Brilliant','Open-minded'],
    skills: ['Problem solving','Time management']
  },
  {
    name: "Walter",
    lastName: "Gordon",
    role: "Office Manager",
    img: "walter-gordon-office-manager.jpg",
    adjectives: ['Creative','Hardworking','Brilliant','Friendly','Open-minded'],
    skills: ['Problem solving','Time management']
  },
  {
    name: "Angela",
    lastName: "Lopez",
    role: "Social Media Manager",
    img: "angela-lopez-social-media-manager.jpg",
    adjectives: ['Creative','Hardworking','Friendly','Open-minded'],
    skills: ['Problem solving','Time management']
  },
  {
    name: "Scott",
    lastName: "Estrada",
    role: "Developer",
    img: "scott-estrada-developer.jpg",
    adjectives: ['Creative','Brilliant','Open-minded'],
    skills: ['Problem solving','Time management']
  },
  {
    name: "Barbara",
    lastName: "Ramos",
    role: "Graphic Designer",
    img: "barbara-ramos-graphic-designer.jpg",
    adjectives: ['Hardworking','Friendly'],
    skills: ['Problem solving','Time management']
  }
];

const row = document.querySelector('.row');



for(let employee of ourTeam ){
  let listAdjectives = '';
  let listSkills = '';

  for(let description of employee.adjectives){
    listAdjectives += `<li>${description}</li>`;
  }
  
  for(let allSkills of employee.skills){
    listSkills += `<li>${allSkills}</li>`;
  }
  stampCard(employee.img,employee.name, employee.lastName,employee.role,listAdjectives,listSkills);
}





/**
 * 
 * @param {string} img 
 * @param {string} name 
 * @param {string} lastName 
 * @param {string} role 
 * @param {string} listAdjectives 
 * @param {string} listSkills 
 */
function stampCard(img, name, lastName,role,listAdjectives,listSkills){
  let card = `
  <div class="col">
    <div class="card h-100">
      <div class="mf-container-img overflow-hidden">
        <img src="img/${img}" class="card-img-top" alt="${name} ${lastName}">
      </div>
      <div class="card-body">
        <h3 class="card-title">
          ${name} ${lastName}
        </h3>
        <p class="card-text text-bg-secondary p-2">
          ${role}
        </p>
        <h5 class="text-uppercase text-success">adjectives</h5>
        <ul>
        ${listAdjectives}
        </ul>
        <h5 class="text-uppercase text-success">Skills</h5>
        <ul>
        ${listSkills}
        </ul>
      </div>
  </div>
  </div>
`;


row.innerHTML += card;
}

