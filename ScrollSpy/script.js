window.onload = () => {
    let sections = document.querySelectorAll("section"); // Sélectionne tous les éléments "section" du document
    let container = document.querySelector("#circle-container"); // Sélectionne l'élément avec l'ID "circle-container"
    
    // Crée un nouvel objet IntersectionObserver pour observer les intersections des éléments avec le viewport
    let observer = new IntersectionObserver(observables => {
        for (let observable of observables) {
            if (observable.intersectionRatio > 0.5) {
                // Si l'élément intersecte plus de 50% du viewport, on active le cercle correspondant
                let circles = document.querySelectorAll("#circle-container .circle"); // Sélectionne tous les éléments avec la classe "circle" dans "circle-container"
                
                // Supprime la classe "active" de tous les cercles
                for (let circle of circles) {
                    circle.classList.remove("active");
                }
                
                // Sélectionne le cercle correspondant à l'élément intersecté et lui ajoute la classe "active"
                let activeCircle = document.querySelector(`[data-id=${observable.target.id}]`); // Sélectionne l'élément avec l'attribut "data-id" correspondant à l'ID de l'élément intersecté
                activeCircle.classList.add("active");
            }
        }
    }, {
        threshold: [0.5] // Définit le seuil d'intersection à 50% (l'élément doit intersecter au moins 50% du viewport)
    });
    
    sections.forEach((section, index) => {
        let circle = document.createElement("div"); // Crée un nouvel élément "div" pour représenter un cercle
        circle.classList.add("circle"); // Ajoute la classe "circle" à l'élément "div"
        
        if (index === 0) {
            circle.classList.add("active"); // Ajoute la classe "active" au premier cercle (indice 0)
        }
        
        circle.dataset.id = section.id; // Définit l'attribut "data-id" de l'élément "div" avec l'ID de la section correspondante
        container.appendChild(circle); // Ajoute le cercle à l'élément "circle-container"
        
        observer.observe(section); // Commence à observer l'intersection de la section avec le viewport
    });
}
