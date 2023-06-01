// On sélectionne le select
let select = document.querySelector("select")
// On sélectionne toutes les sections
let sections = document.querySelectorAll("section")
// On sélectionne tous le H2 dans les sections
let sectionsH2 = document.querySelectorAll("section h2")
// On initialise un tableau
let list = []
// On insère chaque H2 dans le tableau
sectionsH2.forEach(sectionH2 => {
    list.push(sectionH2.textContent)
})
// On créé une option par H2, on les insère après les options déjà présentes
list.forEach(option => {
        select[select.options.length] = new Option(option, option, false, false)
})

select.addEventListener("change", (event) => {
    switch (event.target.value) {
        case "all":
            sections.forEach(section => {
                section.classList.remove("hide")
            })
            break;
        case "aucun":
            sections.forEach(section => {
                section.classList.add("hide")
            })
            break;
        case event.target.value:
            sections.forEach(section => {
                section.classList.remove("hide")
            })
            sectionsH2.forEach(secH2 => {
                if (secH2.textContent != event.target.value) {
                    secH2.parentElement.classList.add("hide")
                }
            })
            break;
    }
})

let menuUl = document.querySelector("#menu ul")
let icon = document.querySelector("#iconBmenu")
let subMenu = document.querySelector("#bMenu")

if (window.matchMedia("(min-width: 1024px").matches) {
    let bmenu = document.createElement("div")
    bmenu.id = "#iconBmenu"
    document.body.insertBefore(bmenu, menuUl)
} else {

}

// icon.addEventListener("click", () => {
//     if (subMenu.classList.contains("hide")) {
//         subMenu.classList.remove("hide")
//         subMenu.classList.add("flex", "flexCol")   
//     } else {
//         subMenu.classList.add("hide")
//         subMenu.classList.remove("flex", "flexCol")        
//     }
// })