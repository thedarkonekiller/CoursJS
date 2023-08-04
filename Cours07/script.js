const h1 = document.querySelector('h1')
let divb = document.querySelector('#bonjour')

h1.addEventListener('click', () => {
    // console.log("bonjour")
    if (h1.textContent !== "Bonjour") {
        h1.innerText = "Bonjour"
        console.log("test")
    }

    // let div1 = document.createElement("div")
    // div1.textContent = "bonjour"
    // div1.id = "bonjour"
    // document.body.appendChild(div1)

})

// for (let i = 0; i < 11; i++) {
//     for (let f = 0; f < 11; f++) {
//         console.log(
//             i + " x " + f + " = " + i*f
//         )
        
//     }
    
// }

const num = document.querySelector("#nb")
const btn = document.querySelector("#calcul")
const para = document.querySelector("#result")

btn.addEventListener('click', () => {
    
    let number = num.value
        for (let multiple = 0; multiple < 11; multiple++) {
            let div = document.createElement("p")
            div.textContent += number + " x " + multiple + " = " + number*multiple
            para.appendChild(div)
    }
})