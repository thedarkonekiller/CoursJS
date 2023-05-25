
// Exercice n°01 :
// Cibler les H2
// Afficher chaque H2 dans la console (sans modifier l'HTML).
// let h2s = document.querySelectorAll("h2")
// h2s.forEach(h2 => {
//     console.log(h2)

// })
// Exercice n°02 : (nous n'avons pas encore vu ça mais c'est accessible quand même).
// Afficher le contenu (ce qui se trouve entre les balises) de chaque H2 dans la console.
// Il faut vous aider de la documentation est des propriétés ou méthodes associées aux Elements.
// h2s.forEach(h2 => {
//     console.log(h2.textContent)
// })

let img = document.querySelector("img")
let buttonMb = document.querySelector(".makeBigger")

buttonMb.addEventListener("click", bigger)
function bigger(){
    if(img.src.match("small.jpg")){
        img.src = "./src/img/big.jpg"
        buttonMb.textContent = "Réduire l'image"
    } else {
        img.src = "./src/img/small.jpg"
        buttonMb.textContent = "Agrandir l'image"
    }
}

let darkMode = document.querySelector(".darkmode")
let bdy = document.querySelector("body")

darkMode.addEventListener("click", toggleDarkMode)

function toggleDarkMode(){
    if(bdy.classList.contains("darkModeIsActive")){
        bdy.classList.remove("darkModeIsActive")
        darkMode.textContent = "MODE SOMBRE"
    }else{
        bdy.classList.add("darkModeIsActive")
        darkMode.textContent = "MODE CLAIR"
    }
}

// let buttons = document.querySelectorAll("button")
// buttons.forEach(button => {
//     button.addEventListener("click", () => {
//         alert(button.textContent)
//     })
// })


let shwMore = document.querySelector(".showMore")
let linkShmore = document.querySelector(".loadMore")
linkShmore.addEventListener("click", () => {
    if (shwMore.style.display === "none") {
        shwMore.style.display = "block"
        linkShmore.textContent = "Afficher -"
    } else {
        shwMore.style.display = "none"
        linkShmore.textContent = "Afficher +"
    }
})
let text = document.querySelector("#seText")
let dspOnPage = document.querySelector("#displayOnPage")
let result = document.querySelector("#result")
console.log(text)
dspOnPage.addEventListener("click", () => {
    if (text.value != "") {
        result.innerHTML = text.value
    } else {
        alert("Veuillez entrer un texte !")
    }
})

// On séléctionne toutes les cellules
let allCells = document.querySelectorAll("td");
// On ajoute sur chaque cellule un EventListener de type "click"
// au click sur la cellule on execute la fonction colorToggle
allCells.forEach(cell => {
    cell.addEventListener("click", colorToggle);
});
/**
 * Permet de colorer le fond de la cellule
 * en bleu ou rouge sans que 2 cellules
 * collées ne soient de la même couleur
 */
function colorToggle() {
    // On teste si la cellule contient la classe "blue" ou la classe "red"
    if (this.classList.contains("blue") || this.classList.contains("red")) {
        // Si oui alors on affiche une alerte
        alert("Déjà cliqué");
    } else {
        //On défini des variables qui sélectionne les cellules qui entourent la cellule actuelle
        let previousRowCell = this.parentNode.previousElementSibling;
        let nextRowCell = this.parentNode.nextElementSibling;
        let previousColumnCell = this.previousElementSibling;
        let nextColumnCell = this.nextElementSibling;
        
        // On teste si :
        // - la cellule de la colonne précèdente n'existe pas OU qu'elle contient la classe "blue"
        // ET QUE
        // - la cellule de la colonne suivante n'existe pas OU qu'elle contient la classe "blue"
        // ET QUE
        // - la cellule de la ligne précèdente n'existe pas OU qu'elle contient la classe "blue"
        // ET QUE
        // - la cellule de la ligne suivante n'existe pas OU qu'elle contient la classe "blue"
        // SI OUI
        // On ajoute la classe "blue"
        // SINON
        // On ajoute la classe "red"

        if ((!previousColumnCell || !previousColumnCell.classList.contains("blue")) &&
            (!nextColumnCell || !nextColumnCell.classList.contains("blue")) &&
            (!previousRowCell || !previousRowCell.children[this.cellIndex].classList.contains("blue")) &&
            (!nextRowCell || !nextRowCell.children[this.cellIndex].classList.contains("blue"))) {
            this.classList.add("blue");
        } else {
            this.classList.add("red");
        }
    }
}
