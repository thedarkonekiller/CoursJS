let sect1 = document.querySelector("#section1")
let sect2 = document.querySelector("#section2")
let sect3 = document.querySelector("#section3")
let sect4 = document.querySelector("#section4")

let lnk1 = document.querySelector("#link1")
let lnk2 = document.querySelector("#link2")
let lnk3 = document.querySelector("#link3")
let lnk4 = document.querySelector("#link4")

let opt = {
    root: sect1,
    rootMargin: "0px",
    threshold: 1.0,
}

let callback = (entries, observer) => {
    entries.forEach(entry => {
        console.log(entry)
    })
}


window.addEventListener("scroll", () => {
    let observer = new IntersectionObserver(callback, opt)
    console.log(observer.observe(sect1))

})



lnk1.addEventListener("click", () => {
    sect1.scrollIntoView({
        behavior: "smooth"
    })
})
lnk2.addEventListener("click", () => {
    sect2.scrollIntoView({
        behavior: "smooth"
    })
})
lnk3.addEventListener("click", () => {
    sect3.scrollIntoView({
        behavior: "smooth"
    })
})
lnk4.addEventListener("click", () => {
    sect4.scrollIntoView({
        behavior: "smooth"
    })
})

