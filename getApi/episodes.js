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
                let $div = document.createElement('div')
                let $p = document.createElement('p')
                let $p2 = document.createElement('p')
                let $p3 = document.createElement('p')
                let $p4 = document.createElement('p')

                $p4.textContent = element.episode
                $p3.textContent = element.air_date
                $p2.textContent = `Episode: ${element.id}`
                $div.setAttribute('class', 'oneCharacter text-center  card container-fluid m-3 mb-5')
                $div.setAttribute('id', element.id)
                $p.textContent = element.name
                $p.setAttribute('class', 'card-text episodeName')

                gallery.append($div)
                $div.append($p2)
                $div.append($p)
                $div.append($p3)
                $div.append($p4)
            })

            const $episodeCard = document.querySelectorAll('.oneCharacter')
            redirectToEpisodeDetail($episodeCard)

        })
}

const redirectToEpisodeDetail = ($episodeCard) => {
    $episodeCard.forEach(element => {
        element.addEventListener('click', function () {
            let ep = this
            let epId = ep.getAttribute('id')

            localStorage.setItem('episodeID', epId)
            window.location.replace('./episodeDetail.html')

        })
    })
}

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
