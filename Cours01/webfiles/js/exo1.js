// alert("bonjour");

// let variable1 = null

// if (variable1 != null) {

// console.log(variable1)

// } else {

//     console.log("Variable null")

// }

// let num = -10

// if (num > 0) {
//     // On utilise var car on va utiliser la variable en dehors du contexte (la condition)
//     var result = "Supérieur à 0"
// } else {
//     if (num === 0) {
//         // On utilise var car on va utiliser la variable en dehors du contexte (la condition)
//         var result = "Nul"
        
//     } else {
//         // On utilise var car on va utiliser la variable en dehors du contexte (la condition)
//         var result = "Inférieur à 0" 
        
//     }
// }
// console.log(result)

// let num2 = Number(window.prompt("Entrer un chiffre"));

// if (num > 0) {
//     document.write("Supérieur à 0")
// } else {
//     if (num === 0) {
//         document.write("Nul")
        
//     } else {
//         document.write("Inférieur à 0")
        
//     }
// }


// On peut utiliser var ou const mais let est préfèrable pour optimiser la mémoire
// let b = 25

// if (b > 0) {
//     console.log(b)
// }


// for (let i = 0; i < 11; i++) {
//     console.log("5 x " + i + " = " + 5*i);
    
// }

// for (let i = 0; i < 11; i++) {
//     // on utilise let car on veut uniquement utiliser result dans la boucle
//     let result = 5*i
//     console.log("5 x " + i + " = " + result);
    
// }


// const num = Number(window.prompt("Entrer un chiffre"));

// for (let i = 0; i < 11; i++) {
//     document.write('<p>', num + " x " + i + " = " + num*i, '</p>');
    
// }

for (let facteur1 = 0; facteur1 < 11; facteur1++) {
    for (let facteur2 = 0; facteur2 < 11; facteur2++) {
        let produit = facteur1*facteur2
        console.log(facteur1 + " x " + facteur2 + " = " + produit);
    }
    
}