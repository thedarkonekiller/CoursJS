let keys = [
    ...document.querySelectorAll(".numbers"),
    ...document.querySelectorAll(".operators")
]
let resultat = document.querySelector("#resultat")
let equals = document.querySelector(".equals")
let tempOperation = ""
keys.forEach(number => number.addEventListener("click", getValue))
function getValue() {
    // Syntaxe alternative (es6)
    // cons getValue = () => {
    if (isNaN(this.value)) {
        if (this.value === "=") {
            tempOperation = new String(eval(tempOperation))
            resultat.textContent = tempOperation
        } else {
            if (this.value === "C") {
                tempOperation = ""
                resultat.textContent = 0
            } else {
                if (tempOperation.slice(-1).match(/[\+\-\*/$]/)) {
                    tempOperation = tempOperation.slice(0, -1) + this.value
                    resultat.textContent = tempOperation
                    console.log(tempOperation)
                } else {
                    tempOperation += this.value
                    console.log(tempOperation)
                    resultat.textContent += this.value
                }
            }
        }
    }
    else {
        if (resultat.textContent === "0") {
            resultat.textContent = ""
        }
        tempOperation += this.value
        resultat.textContent += this.value
    }
}
