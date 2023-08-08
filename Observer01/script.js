let observer = new IntersectionObserver(observables => {
    for (let observable of observables) {
        if (observable.isIntersecting) {
            let content = observable.target.textContent
            switch (content) {
                case "Les Carpes":
                    let picCarp = document.querySelector("#pic1")
                    picCarp.setAttribute('src', picCarp.dataset.src)
                    picCarp.classList.remove("loading")
                    picCarp.classList.add("fondue")
                    observer.unobserve(observable.target)
                    break;
                case "Les Tanches":
                    let picTench = document.querySelector("#pic2")
                    picTench.setAttribute('src', picTench.dataset.src)
                    picTench.classList.remove("loading")
                    picTench.classList.add("fondue")
                    observer.unobserve(observable.target)
                    break;
                case "Les Gardons":
                    let picGardon = document.querySelector("#pic3")
                    picGardon.setAttribute('src', picGardon.dataset.src)
                    picGardon.classList.remove("loading")
                    picGardon.classList.add("fondue")
                    observer.unobserve(observable.target)
                    break;
            }   
        }
    }

})

const titles = document.querySelectorAll("h2")

titles.forEach(title => {
    observer.observe(title)
})
