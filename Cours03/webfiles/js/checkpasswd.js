// Vérification mot de passe fort
document.getElementById("password").addEventListener("input", checkPass)

function checkPass(){
    // On initialise le score
    let score = 0
    // On récupère ce qui a été saisi
    let pass = this.value

    // On va chercher les éléments dont on besoin
    let minuscule = document.querySelector("#minuscule")
    let majuscule = document.querySelector("#majuscule")
    let chiffre = document.querySelector("#chiffre")
    let special = document.querySelector("#special")
    let longueur = document.querySelector("#longueur")

    // On vérifie qu'on a une minuscule
    if(/[a-z]/.test(pass)){
        // On passe en vert "is-valid"
        minuscule.classList.replace("error", "is-valid")
        score++
    }else{
        // On passe en rouge "error"
        minuscule.classList.replace("is-valid", "error")
    }

    // On vérifie qu'on a une majuscule
    if(/[A-Z]/.test(pass)){
        // On passe en vert "is-valid"
        majuscule.classList.replace("error", "is-valid")
        score++
    }else{
        // On passe en rouge "error"
        majuscule.classList.replace("is-valid", "error")
    }

    // On vérifie qu'on a un chiffre
    if(/[0-9]/.test(pass)){
        // On passe en vert "is-valid"
        chiffre.classList.replace("error", "is-valid")
        score++
    }else{
        // On passe en rouge "error"
        chiffre.classList.replace("is-valid", "error")
    }

    // On vérifie qu'on a un caractère spécial
    if(/[$@/\]!%*\\#&]/.test(pass)){
        // On passe en vert "is-valid"
        special.classList.replace("error", "is-valid")
        score++
    }else{
        // On passe en rouge "error"
        special.classList.replace("is-valid", "error")
    }

    // On vérifie la longueur du mot de passe
    if(pass.length >= 8){
        // On passe en vert "is-valid"
        longueur.classList.replace("error", "is-valid")
        score++
    }else{
        // On passe en rouge "error"
        longueur.classList.replace("is-valid", "error")
    }

    if(score === 5){
        document.querySelector("#button").disabled = false
    } else {
        document.querySelector("#button").disabled = true
    }
}