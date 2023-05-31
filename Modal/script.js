let modalBtn = document.querySelector("#modalBtn")
modalBtn.addEventListener("click", () => {
    let modal = document.createElement("div")
    modal.classList.add("modal")
    document.body.appendChild(modal)
    let modalContent = document.createElement("div")
    modalContent.classList.add("modal-content")
    let para = document.createElement("p")
    para.textContent = "Ma Modal"
    modal.appendChild(modalContent)
    modalContent.appendChild(para)
    if (document.querySelector(".modal") != null) {
            modal.addEventListener("click", () => {
            document.querySelector(".modal").remove()
        })
    }
})
