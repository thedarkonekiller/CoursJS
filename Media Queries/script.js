// let media1040 = window.matchMedia("(min-width: 1040px")
// let nav = document.querySelector("#nav")
// let menu = document.querySelector("#menu")
// window.addEventListener("resize", () => {
//     if (media1040.matches) {
//         menu.id = "menu"
//         if (document.querySelector("#iconBmenu")) {
//             document.querySelector("#iconBmenu").remove()
//         }
//     } else {
//         if (document.querySelector("#iconBmenu")) {
//             let iconBmenu = document.querySelector("#iconBmenu")
//             iconBmenu.addEventListener("click", () => {
//                 iconBmenu.classList.toggle("check")
//                 document.querySelector(".line1").classList.toggle("check")
//                 document.querySelector(".line2").classList.toggle("check")
//                 document.querySelector(".line3").classList.toggle("check")
//             })   
//         }
//         else {
//             let bMenu = document.createElement("div")
//             bMenu.id = "iconBmenu"
//             let line1 = document.createElement("span")
//             let line2 = document.createElement("span")
//             let line3 = document.createElement("span")
//             line1.classList.add("line", "line1")
//             line2.classList.add("line", "line2")
//             line3.classList.add("line", "line3")
//             nav.appendChild(bMenu)
//             bMenu.append(line1, line2, line3)
//             menu.id = "bMenu"
//         }
//     }
// })





const media1040 = window.matchMedia("(min-width: 1040px)");
const nav = document.querySelector("#nav");
let menu = document.querySelector("#menu");
let iconBmenu = document.querySelector("#iconBmenu");

// Fonction pour basculer l'état du menu
function toggleMenu() {
  iconBmenu.classList.toggle("check"); // Toggle de la classe "check" sur l'icône du menu
  document.querySelector(".line1").classList.toggle("check"); // Toggle de la classe "check" sur la ligne 1
  document.querySelector(".line2").classList.toggle("check"); // Toggle de la classe "check" sur la ligne 2
  document.querySelector(".line3").classList.toggle("check"); // Toggle de la classe "check" sur la ligne 3
  document.querySelector("#bMenu").classList.toggle("check"); // Toggle de la classe "check" sur le menu
}

// Fonction pour créer l'icône du menu
function createBMenu() {
  const bMenu = document.createElement("div"); // Création de l'élément <div> pour l'icône du menu
  bMenu.id = "iconBmenu"; // Attribution de l'ID "iconBmenu" à l'élément <div>
  const lines = [];

  // Boucle pour créer les trois lignes de l'icône du menu
  for (let i = 1; i <= 3; i++) {
    const line = document.createElement("span"); // Création de l'élément <span> pour une ligne
    line.classList.add("line", `line${i}`); // Ajout des classes "line" et "lineX" (X correspond à l'index de la ligne) à l'élément <span>
    lines.push(line); // Ajout de l'élément <span> à un tableau
  }

  bMenu.append(...lines); // Ajout des lignes à l'élément <div> de l'icône du menu
  nav.appendChild(bMenu); // Ajout de l'icône du menu à l'élément <nav> parent

  iconBmenu = document.querySelector("#iconBmenu"); // Réassigner la valeur d'iconBmenu après sa création

  iconBmenu.addEventListener("click", toggleMenu); // Ajout de l'écouteur d'événement "click" sur l'icône du menu pour appeler la fonction toggleMenu
}

// Fonction pour gérer le redimensionnement de la fenêtre
function handleResize() {
  if (media1040.matches) {
    menu.id = "menu"; // Rétablissement de l'ID "menu" si la condition de correspondance est satisfaite

    if (iconBmenu) {
      iconBmenu.removeEventListener("click", toggleMenu); // Retirer l'écouteur d'événement "click" s'il existe
      iconBmenu.remove(); // Supprimer l'icône du menu
      iconBmenu = null; // Réinitialiser iconBmenu à null
    }
  } else {
    if (iconBmenu) {
      iconBmenu.addEventListener("click", toggleMenu); // Ajout de l'écouteur d'événement "click" sur l'icône du menu pour appeler la fonction toggleMenu
    } else {
      createBMenu(); // Créer l'icône du menu si elle n'existe pas encore
      menu.id = "bMenu"; // Modification de l'ID du menu en "bMenu"
    }
  }
}

// Ajout de l'écouteur d'événement "resize" sur la fenêtre pour appeler la fonction handleResize
window.addEventListener("resize", handleResize);

// Appel initial de la fonction handleResize pour gérer l'état initial du menu en fonction de la taille de la fenêtre
handleResize();

