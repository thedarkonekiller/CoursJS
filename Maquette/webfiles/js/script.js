let loupes = document.querySelectorAll(".loupe")
let firstLoupe = loupes.item(0)
let lastLoupe = loupes.item(Number(loupes.length - 1))
let currentloupe = null

loupes.forEach(loupe => {
    loupe.addEventListener("click", () => {
        let modalBg = document.createElement("div")
        let modalNavLeft = document.createElement("span")
        let modalNavRight = document.createElement("span")
        let modalContent = document.createElement("div")
        let image = document.createElement("img")
        let author = document.createElement("p")
        let price = document.createElement("p")
        let availablity = document.createElement("p")
        let closeBtn = document.createElement("span")
        modalBg.classList.add("modalBg")
        modalNavLeft.classList.add("modalNav", "modalNavLeft")
        modalNavLeft.textContent = "<"
        modalNavRight.classList.add("modalNav", "modalNavRight")
        modalNavRight.textContent = ">"
        modalContent.classList.add("modalContent")
        let imageRef = loupe.previousElementSibling
        image.src = imageRef.src
        let h2 = loupe.parentNode.nextSibling.nextSibling
        author.textContent = h2.dataset.author
        price.textContent = h2.dataset.price
        availablity.textContent = h2.dataset.availablity
        closeBtn.classList.add("closeBtn")
        closeBtn.textContent = "X"
        document.body.appendChild(modalBg)
        modalBg.appendChild(modalContent)
        if (loupe == firstLoupe) {
          modalContent.appendChild(modalNavRight)
        } else {
          if (loupe == lastLoupe) {
            modalContent.appendChild(modalNavLeft)
          } else {
            modalContent.append(modalNavLeft, modalNavRight)
          }
        }
        modalNavLeft.addEventListener('click', () => {
          currentloupe = loupe
          let previousloupe = loupe.parentElement.parentElement.previousElementSibling.previousElementSibling
          console.log(previousloupe)
          if (previousloupe !== null) {
            let imageRef = loupe.parentElement.parentElement.previousSibling.previousSibling.firstChild.nextSibling.firstChild.nextSibling
            image.src = imageRef.src
            let h2 = loupe.parentElement.parentElement.previousSibling.previousSibling.firstChild.nextSibling.nextSibling.nextSibling
            author.textContent = h2.dataset.author
            price.textContent = h2.dataset.price
            availablity.textContent = h2.dataset.availablity
            modalContent.append(image, author, price, availablity, modalNavRight)
            loupe = loupe.parentElement.parentElement.previousSibling.previousSibling.firstChild.nextSibling.firstChild.nextSibling.nextSibling 
          } else {
            modalNavLeft.remove()
            let imageRef = loupe.parentElement.parentElement.previousSibling.previousSibling.firstChild.nextSibling.firstChild.nextSibling
            image.src = imageRef.src
            let h2 = loupe.parentElement.parentElement.previousSibling.previousSibling.firstChild.nextSibling.nextSibling.nextSibling
            author.textContent = h2.dataset.author
            price.textContent = h2.dataset.price
            availablity.textContent = h2.dataset.availablity
            modalContent.append(image, author, price, availablity)
            loupe = loupe.parentElement.parentElement.previousSibling.previousSibling.firstChild.nextSibling.firstChild.nextSibling.nextSibling 
          }
        })
        modalNavRight.addEventListener('click', () => {
          currentloupe = loupe
          let nextloupe = loupe.parentElement.parentElement.nextElementSibling.nextElementSibling
          console.log(nextloupe)
          if (nextloupe !== null) {
          let imageRef = loupe.parentElement.parentElement.nextSibling.nextSibling.firstChild.nextSibling.firstChild.nextSibling
          image.src = imageRef.src
          let h2 = loupe.parentElement.parentElement.nextSibling.nextSibling.firstChild.nextSibling.nextSibling.nextSibling
          console.log(h2)
          author.textContent = h2.dataset.author
          price.textContent = h2.dataset.price
          availablity.textContent = h2.dataset.availablity
          modalContent.append(image, author, price, availablity, modalNavLeft)
          loupe = loupe.parentElement.parentElement.nextSibling.nextSibling.firstChild.nextSibling.firstChild.nextSibling.nextSibling
          } else {
            modalNavRight.remove()
            let imageRef = loupe.parentElement.parentElement.nextSibling.nextSibling.firstChild.nextSibling.firstChild.nextSibling
            image.src = imageRef.src
            let h2 = loupe.parentElement.parentElement.nextSibling.nextSibling.firstChild.nextSibling.nextSibling.nextSibling
            console.log(h2)
            author.textContent = h2.dataset.author
            price.textContent = h2.dataset.price
            availablity.textContent = h2.dataset.availablity
            modalContent.append(image, author, price, availablity)
            loupe = loupe.parentElement.parentElement.nextSibling.nextSibling.firstChild.nextSibling.firstChild.nextSibling.nextSibling
          }

        })
        modalContent.append(image, author,price, availablity, closeBtn)

        if (document.querySelector(".modalBg") != null) {
            closeBtn.addEventListener("click", () => {
                modalBg.remove()
            })
        }

        // if (document.querySelector(".modalBg") != null) {
        //     modalBg.addEventListener("click", () => {
        //         modalBg.remove()
        //     })
        // }
        })
})

// Hamburger menu
const media1024 = window.matchMedia("(min-width: 1024px)");
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
  if (media1024.matches) {
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