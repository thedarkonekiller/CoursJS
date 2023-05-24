
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
    } else {
        img.src = "./src/img/small.jpg"
    }
}

let darkMode = document.querySelector(".darkmode")
let bdy = document.querySelector("body")

darkMode.addEventListener("click", toggleDarkMode)

function toggleDarkMode(){
    if(bdy.classList.contains("darkModeIsActive")){
        bdy.classList.remove("darkModeIsActive")
    }else{
        bdy.classList.add("darkModeIsActive")
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
    } else {
        shwMore.style.display = "none"
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