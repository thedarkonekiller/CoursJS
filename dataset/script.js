paragraphes = document.querySelectorAll("p")

paragraphes.forEach(para => {
    para.addEventListener('click', () => {
        para.textContent = para.dataset.txt
    })
});