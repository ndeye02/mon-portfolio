// 1. Liste des compétences (un tableau)
const skills = [
  "Figma",
  "UX/UI",
  "HTML / CSS",
  "JavaScript",
  "Shopify",
  "WordPress",
  "After Effects",
  "Notion"
];

// 2. Afficher chaque compétence dans la page
const list = document.getElementById("skills-list");

skills.map(function (skill) {
  const item = document.createElement("li");
  item.textContent = skill;
  list.appendChild(item);
});

// 3. Bouton mode sombre / clair
const button = document.getElementById("theme-btn");

button.addEventListener("click", function () {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    button.textContent = "Mode clair";
  } else {
    button.textContent = "Mode sombre";
  }
});