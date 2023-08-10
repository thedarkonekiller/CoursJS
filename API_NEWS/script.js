const section = document.querySelector("section")

fetch('https://hacker-news.firebaseio.com/v0/jobstories.json?print=pretty', {
    'method': 'GET',
    'headers': {},
})
.then(response => {
    return response.json()
})
.then(datas => {
    // console.log(datas)
    for (let data of datas) {
        let url = 'https://hacker-news.firebaseio.com/v0/item/'
        url += data + '.json?print=pretty'
        fetch(url, {
            'method': 'GET',
            'headers': {},
        })
        .then(response => {
            // console.log(response)
            return response.json()
        })
        .then(data => {
            // console.log(data)
            let article = document.createElement("article")
            let title = document.createElement("h2")
            let date = document.createElement("h3")
            let type = document.createElement("h3")
            let url = document.createElement("a")
            title.textContent = data.title
            date.textContent = Date(data.time)
            type.textContent = data.type
            url.setAttribute('href', data.url)
            url.setAttribute('target', '_blank')
            url.textContent = "Lien vers l'offre d'emploi"
            section.appendChild(article)
            article.append(title, date, type, url)
        })
    }
})