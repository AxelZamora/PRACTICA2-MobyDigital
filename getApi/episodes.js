const
    gallery = document.querySelector('.gallery'),
    prev = document.getElementById('prev'),
    next = document.getElementById('next'),
    searchInput = document.getElementById('searchInput'),
    search = document.getElementById('search')

const getEpisodes = (url) => {
    fetch(url)
        .then(res => res.json())
        .then(data => {
            gallery.innerHTML = ''
            // console.log(data)
            let span = document.createElement('span')
            span.setAttribute('class', 'position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger')
            search.append(span)
            span.textContent = data.info.count
            let span2 = document.createElement('span')
            span2.textContent = data.info.pages
            span2.setAttribute('class', 'position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger')
            next.append(span2)

            data.results.forEach(element => {
                // console.log(element)
                // let characterImgURL = element.image
                let episodeDetails = element.name
                let episodeID = element.id
                let airDate = element.air_date
                let episodeCode = element.episode

                let $div = document.createElement('div')
                let $p2 = document.createElement('p')
                let $p3 = document.createElement('p')
                // let img = document.createElement('img')
                let $p = document.createElement('p')
                let $p4 = document.createElement('p')

                $p4.textContent = episodeCode
                $p3.textContent = airDate
                $p2.textContent = `Episode: ${episodeID}`
                $div.setAttribute('class', 'oneCharacter text-center  card container-fluid m-3 mb-5')
                $div.setAttribute('id', episodeID)
                $p.textContent = episodeDetails
                $p.setAttribute('class', 'card-text episodeName')
                // img.setAttribute('src', characterImgURL)
                // img.setAttribute('class', 'charactersImg img-fluid')
                // img.setAttribute('id', characterId)

                gallery.append($div)
                // $div.append(img)
                $div.append($p2)
                $div.append($p)
                $div.append($p3)
                $div.append($p4)


            })

            const $episodeCard = document.querySelectorAll('.oneCharacter')
            $episodeCard.forEach(element => {
                element.addEventListener('click', function () {
                    let ep = this
                    let epId = ep.getAttribute('id')

                    localStorage.setItem('episodeID', epId)
                    window.location.replace('./episodeDetail.html')

                })
            })
        })
}


let data = {
    mail: "federicomorel17@gmial.com",
    password: "f2345678"
}

fetch('https://api-auth-moby.herokuapp.com/api/user/login', {
    headers: {
        'Content-type': 'application/json; charset=utf-8'
    },
    method: 'POST',
    body: JSON.stringify(data)
})
    .then(response => response.json())
    .then(resJson => console.log(resJson))
    .catch(error => console.log(error));







getEpisodes('https://rickandmortyapi.com/api/episode/')
let counter = 1

next.addEventListener('click', () => {
    getEpisodes(`https://rickandmortyapi.com/api/episode/?page=${++counter}&name=${searchInput.value}`)
})

prev.addEventListener('click', () => {
    getEpisodes(`https://rickandmortyapi.com/api/episode/?page=${--counter}&name=${searchInput.value}`)
})

search.addEventListener('click', () => {
    getEpisodes(`https://rickandmortyapi.com/api/episode/?name=${searchInput.value}`)
    counter = 1
})

searchInput.addEventListener('keyup', () => {
    getEpisodes(`https://rickandmortyapi.com/api/episode/?name=${searchInput.value}`)
    counter = 1
})
