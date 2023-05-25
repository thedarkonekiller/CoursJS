// A l'aide de vos conaissances en JS & de la documentation issue d'internet,
// créez un bouton de retour haut de page rapide.

// Veillez à exploiter du JavaScript et non du CSS !

window.addEventListener("scroll", showScrollBtn)

function showScrollBtn() {
    if (window.scrollY > 100) {
        if (document.querySelector("#backToTopContainer")) {
            document.querySelector("#backToTopContainer").addEventListener("click", ReturnTop)            
        } else {
            let scrollBtn = document.createElement("i")
            scrollBtn.className = "fa-solid fa-angles-up fa-bounce"
            scrollBtn.id = "backToTopContainer"
            document.body.appendChild(scrollBtn)
            scrollBtn.addEventListener("click", ReturnTop)            
        }  
    } else {
      let scrollBtn = document.querySelector("#backToTopContainer")
      if(scrollBtn){
          scrollBtn.remove()
      }
    }
}

function ReturnTop() {
    window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      })
}