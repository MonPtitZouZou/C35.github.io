// --- Liste des utilisateurs ---
const users = [
  { pseudo: "Lilian B", avatar: "https://i.pinimg.com/736x/cf/e6/da/cfe6da4317a5a131c8d13d15785774c1.jpg", birthday: { day: 10, month: 10, hour:0, minute:0, second:0, year:2002 } },
  { pseudo: "MickaeL C", avatar: "https://i.pinimg.com/736x/91/3b/71/913b71d1adb5af6ba8cc951600baec3e.jpg", birthday: { day: 9, month: 11, hour:0, minute:0, second:0, year:null } },
  { pseudo: "Tracy G", avatar: "https://i.pinimg.com/736x/cf/e6/da/cfe6da4317a5a131c8d13d15785774c1.jpg", birthday: { day: 20, month: 0, hour:0, minute:0, second:0, year:null } },
  { pseudo: "Even C", avatar: "https://i.pinimg.com/736x/cf/e6/da/cfe6da4317a5a131c8d13d15785774c1.jpg", birthday: { day: 12, month: 1, hour:0, minute:0, second:0, year:null } },
  { pseudo: "Jean L", avatar: "https://i.pinimg.com/736x/9e/1c/55/9e1c556dbc685e27c61f3f1c1be66b55.jpg", birthday: { day: 20, month: 1, hour:0, minute:0, second:0, year:null } },
  { pseudo: "Pierrick M", avatar: "https://i.pinimg.com/736x/cf/e6/da/cfe6da4317a5a131c8d13d15785774c1.jpg", birthday: { day: 4, month: 2, hour:0, minute:0, second:0, year:null } },
  { pseudo: "Nicolas D", avatar: "https://i.pinimg.com/736x/9e/1c/55/9e1c556dbc685e27c61f3f1c1be66b55.jpg", birthday: { day: 9, month: 2, hour:0, minute:0, second:0, year:null } },
  { pseudo: "Zoahoui Z", avatar: "https://i.pinimg.com/736x/cf/e6/da/cfe6da4317a5a131c8d13d15785774c1.jpg", birthday: { day: 16, month: 2, hour:0, minute:0, second:0, year:null } },
  { pseudo: "Frédéric N", avatar: "https://i.pinimg.com/736x/9e/1c/55/9e1c556dbc685e27c61f3f1c1be66b55.jpg", birthday: { day: 29, month: 3, hour:0, minute:0, second:0, year:null } },
  { pseudo: "Nadejki C", avatar: "https://i.pinimg.com/736x/cf/e6/da/cfe6da4317a5a131c8d13d15785774c1.jpg", birthday: { day: 28, month: 5, hour:0, minute:0, second:0, year:null } },
  { pseudo: "David D", avatar: "https://i.pinimg.com/736x/cf/e6/da/cfe6da4317a5a131c8d13d15785774c1.jpg", birthday: { day: 1, month: 6, hour:0, minute:0, second:0, year:null } },
  { pseudo: "Christophe DB", avatar: "https://i.pinimg.com/736x/cf/e6/da/cfe6da4317a5a131c8d13d15785774c1.jpg", birthday: { day: 3, month: 6, hour:0, minute:0, second:0, year:null } },
  { pseudo: "Abdelhak H", avatar: "https://i.pinimg.com/736x/cf/e6/da/cfe6da4317a5a131c8d13d15785774c1.jpg", birthday: { day: 9, month: 6, hour:0, minute:0, second:0, year:null } },
  { pseudo: "Thomas C", avatar: "https://i.pinimg.com/736x/cf/e6/da/cfe6da4317a5a131c8d13d15785774c1.jpg", birthday: { day: 18, month: 7, hour:0, minute:0, second:0, year:null } },
  { pseudo: "Mathieu A", avatar: "https://i.pinimg.com/736x/9e/1c/55/9e1c556dbc685e27c61f3f1c1be66b55.jpg", birthday: { day: 25, month: 8, hour:0, minute:0, second:0, year:null } },
  { pseudo: "Clément S", avatar: "https://i.pinimg.com/736x/cf/e6/da/cfe6da4317a5a131c8d13d15785774c1.jpg", birthday: { day: 13, month: 10, hour:0, minute:0, second:0, year:null } },
];

// --- Confettis ---
const confettiCount = 300;
for(let i=0;i<confettiCount;i++){
  const div = document.createElement('div');
  div.className = 'confetti';
  div.style.left = Math.random()*100+'vw';
  div.style.backgroundColor = ['#FFD700','#FF69B4','#00FFFF','#FF4500'][Math.floor(Math.random()*4)];
  div.style.animationDuration = (3 + Math.random()*5)+'s';
  div.style.setProperty("--round", Math.random() > 0.5 ? 1 : 0);
  document.body.appendChild(div);
}

// --- Temps avant anniversaire ---
function timeUntilBirthday(birthday){
  const now = new Date();
  const parisNow = new Date(now.toLocaleString("en-US",{timeZone:"Europe/Paris"}));
  let nextBirthday = new Date(parisNow.getFullYear(), birthday.month, birthday.day, birthday.hour||0, birthday.minute||0, birthday.second||0);

  if(parisNow.getDate() === birthday.day && parisNow.getMonth() === birthday.month){
    return 0;
  }
  if(parisNow > nextBirthday) nextBirthday.setFullYear(nextBirthday.getFullYear()+1);
  return nextBirthday - parisNow;
}

// --- Trier ---
users.sort((a,b)=>timeUntilBirthday(a.birthday)-timeUntilBirthday(b.birthday));

// --- Génération HTML ---
const container = document.getElementById("users-container");

users.forEach((user, index) => {
  const div = document.createElement("div");
  div.className = "user-container";

  const now = new Date();
  const parisNow = new Date(now.toLocaleString("en-US", { timeZone: "Europe/Paris" }));
  const b = user.birthday;

  // 🔹 Date complète sous le pseudo (jour + mois + année ou X)
  const monthNames = ["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre"];
  const birthDateHtml = `<div class="birth-date" style="font-size:0.9em; margin-bottom:5px;">
    ${b.day} ${monthNames[b.month] || ''} ${b.year || 'X'}
  </div>`;

  // 🔹 Texte âge si connu
  let ageTextHtml = '';
  if (b.year) {
    let ageBefore = parisNow.getFullYear() - b.year;
    if (parisNow.getMonth() > b.month || (parisNow.getMonth() === b.month && parisNow.getDate() < b.day)) ageBefore--;
    let ageAfter = ageBefore + 1;
    ageTextHtml = `<p class="age">${ageBefore} ans -> ${ageAfter} ans</p>`;
  } else {
    ageTextHtml = `<p class="age">X ans -> X ans</p>`;
  }

  div.innerHTML = `
    <img id="avatar${index}" class="avatar" src="${user.avatar}" alt="Avatar"/>
    <h1 id="username${index}">${user.pseudo}</h1>
    ${birthDateHtml}
    ${ageTextHtml}
    <div id="status-indicator${index}" class="status offline" style="visibility:hidden;">
      <span id="status-text${index}">&nbsp;</span>
    </div>
    <h2>Prochain anniversaire 🎉</h2>
    <div id="birthday-countdown${index}" class="birthday-countdown">0 jours 0 h 0 min 0 s</div>
  `;
  container.appendChild(div);
});

// --- Mise à jour ---
function updateCountdowns(){
  const now=new Date();
  const parisNow=new Date(now.toLocaleString("en-US",{timeZone:"Europe/Paris"}));

  users.forEach((user,index)=>{
    const b = user.birthday;
    const countdown = document.getElementById(`birthday-countdown${index}`);
    const ageText = document.getElementById(`username${index}`).nextElementSibling.nextElementSibling; // sauter birth-date
    const h2 = countdown.previousElementSibling;
    const userBox = document.getElementById(`avatar${index}`).parentElement;

    if(parisNow.getDate() === b.day && parisNow.getMonth() === b.month){
      if(h2) h2.style.visibility='hidden';
      if(countdown) countdown.textContent="Joyeux anniversaire 🎉";
      if(ageText){
        if(b.year){
            ageText.textContent = `Fêtera son ${parisNow.getFullYear()-b.year+1}ème anniversaire 🎉`;
        } else {
            ageText.textContent = `Fêtera son Xème anniversaire 🎉`;
        }
      }

      // Glow et confettis
      userBox.classList.add('birthday');

      return;
    } else {
      userBox.classList.remove('birthday');
    }

    // Compte à rebours normal
    let nextBirthday=new Date(parisNow.getFullYear(),b.month,b.day,0,0,0);
    if(parisNow>nextBirthday) nextBirthday.setFullYear(nextBirthday.getFullYear()+1);
    const diff=nextBirthday-parisNow;
    const totalSeconds=Math.floor(diff/1000);
    const days=Math.floor(totalSeconds/86400);
    const hours=Math.floor(totalSeconds/3600)%24;
    const minutes=Math.floor(totalSeconds/60)%60;
    const seconds=totalSeconds%60;

    if(countdown) countdown.textContent=`${days} jours ${hours} h ${minutes} min ${seconds} s`;
  });
}

updateCountdowns();
setInterval(updateCountdowns,1000);
