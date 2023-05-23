
console.log("BOUCLE WHILE")
let i = 0
while (i < 10) {
    i++
}
console.log(i)
console.log("-------------------")

let tableau = [1, true, "toto", ["tutu", 22], "salut"];
console.log(tableau)
console.table(tableau)
console.log("-------------------")

console.log("FOR")
for (let index = 0; index < tableau.length; index++) {
    console.log(tableau[index]); 
}
console.log("-------------------")

console.log("FOR IN")
for (value in tableau){
    console.log(tableau[value]);
}
console.log("-------------------")

console.log("FOR OF")
for (value of tableau){
    console.log(value);
}
console.log("-------------------")

console.log("FOREACH")
tableau.forEach(element => {
    console.log(element)
});
console.log("-------------------")

console.log("SPREAD OPERATOR")
let tableau2 = [...tableau]
console.log(tableau2)
let tableau3 = [25,26,27]
let tableau4 = [...tableau3, ...tableau2]
console.log(tableau4)
console.log("-------------------")

console.log("TABLEAU 'ASSOCIATIF'")

let resultats = {
    prenom: [
        "Marie",
        "Warren"
    ],
    notes: [
        [
            10,
            20,
            15
        ],
        [
            10,
            17,
            20
        ]
    ]
}
console.log(resultats)
console.table(resultats)

console.log("-------------------")

console.log("TABLEAU 'ASSOCIATIF' 2")

let assoc = [
    {prenom: "Marie", nom: "Lemire", notes: [{matiere: ["Français", "Maths", "Physique"], note: [10, 20, 15]}]},
    {prenom: "Warren", nom: "Jeuffrain", notes: [{matiere: ["Français", "Maths", "Physique"], note: [10, 17, 20]}]},
]
console.log(assoc)
console.table(assoc)

console.log("-------------------")

assoc.forEach(stagiaire => {
    let prenom = stagiaire["prenom"]
    let nom = stagiaire["nom"]
    console.log(prenom + " " + nom)
    stagiaire["notes"].forEach(notes => {
        for (let ind=0; ind < notes["matiere"].length; ind++) {
            console.log(notes["matiere"][ind] + ": " + notes["note"][ind])
        }
    })
});

console.log("-------------------")

console.log("EXO TABLEAU 'ASSOCIATIF'")
// let pokeworld = [
//     {desseur: [
//         {nom: ["Much", "Aird"],
//         prenom: ["Truc", "Trouill"],
//         age: ["14", "20"],
//         Ville: ["Paris", "Laon"],
//         pokemons: [
//             {pokenom: [["Rondoudou","Pikachu"],["Lipoutou"]],
//             pokeniveau: [[100, 24], [2]],
//             pokénature: [["magic","electik"],["normal"]],
//             attaques: [
//                 {nom: [[["attaque1","attaque2"],["attaque1"]],["attaque1"]],
//                  puissance: [[[26,25],[12]],[16]],
//                  tauxechec: [[[50,10],[0]],[25]]}
//             ]}
//         ]}
//     ]}
// ]
console.log("-------------------")

let dresseurs = [
    {nom: "nom1", prenom: "prenom1", age: 12, ville: "Paris", pokemons: [
        {pokenom: "pikachu", pokeniveau: 100, pokenature: "electik", attaques: [
            {nom: "attaque1", puissance: 12, tauxechec: 0},
            {nom: "attaque2", puissance: 45, tauxechec: 50}
        ]
        },
        {pokenom: "rondoudou", pokeniveau: 90, pokenature: "fée", attaques: [
            {nom: "attaque1", puissance: 25, tauxechec: 20},
            {nom: "attaque2", puissance: 55, tauxechec: 50}
        ]}
    ]},
    {nom: "nom2", prenom: "prenom2", age: 12, ville: "Soissons", pokemons: [
        {pokenom: "Lipoutou", pokeniveau: 50, pokenature: "normal", attaques: [
            {nom: "attaque1", puissance: 25, tauxechec: 10},
            {nom: "attaque2", puissance: 40, tauxechec: 0}
        ]
        },
        {pokenom: "rondoudou", pokeniveau: 80, pokenature: "fée", attaques: [
            {nom: "attaque1", puissance: 25, tauxechec: 20},
            {nom: "attaque2", puissance: 55, tauxechec: 50}
        ]}
    ]}
]

dresseurs.forEach(dresseur => {
    console.log(dresseur["nom"])
        dresseur["pokemons"].forEach(pokemon => {
            console.log(pokemon["pokenom"]+" Niveau: "+pokemon["pokeniveau"])
        })
    }
)

