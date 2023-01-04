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
            span.setAttribute('class', 'position-absolute top-0 start-100 translate-middle badge rounded-pill text-bg-info')
            search.append(span)
            span.textContent = data.info.count
            let span2 = document.createElement('span')
            span2.textContent = data.info.pages
            span2.setAttribute('class', 'position-absolute top-0 start-100 translate-middle badge rounded-pill text-bg-info')
            next.append(span2)

            data.results.forEach(element => {
                let $div = document.createElement('div')
                let $p2 = document.createElement('p')
                let $p3 = document.createElement('p')
                let $p = document.createElement('p')

                $p3.textContent = `Dimension: ${element.dimension}`
                $p2.textContent = `Type: ${element.type}`
                $div.setAttribute('class', 'oneCharacter text-center  card container-fluid m-3 mb-5')
                $div.setAttribute('id', element.id)
                $p.textContent = element.name
                $p.setAttribute('class', 'card-text episodeName')

                gallery.append($div)
                $div.append($p2)
                $div.append($p)
                $div.append($p3)
            })

            const $episodeCard = document.querySelectorAll('.oneCharacter')
            redirectToLocationDetail($episodeCard)
        })
        .catch(() => {
            let $div = document.createElement('div')
            $div.setAttribute('style', ' font-size: 24px;')
            $div.textContent = 'no matches'
            gallery.append($div)

            let span = document.createElement('span')
            span.setAttribute('class', 'position-absolute top-0 start-100 translate-middle badge rounded-pill text-bg-info')
            search.append(span)
            span.textContent = '0'

            let span2 = document.createElement('span')
            span2.textContent = '0'
            span2.setAttribute('class', 'position-absolute top-0 start-100 translate-middle badge rounded-pill text-bg-info')
            next.append(span2)

        })
}

const redirectToLocationDetail = ($episodeCard) => {
    $episodeCard.forEach(element => {
        element.addEventListener('click', function () {
            let lo = this
            let loId = lo.getAttribute('id')

            localStorage.setItem('locationID', loId)
            window.location.replace('./locationDetail.html')

        })
    })
}

getEpisodes('https://rickandmortyapi.com/api/location/')
let counter = 1

next.addEventListener('click', () => {
    getEpisodes(`https://rickandmortyapi.com/api/location/?page=${++counter}&name=${searchInput.value}`)
})

prev.addEventListener('click', () => {
    getEpisodes(`https://rickandmortyapi.com/api/location/?page=${--counter}&name=${searchInput.value}`)
})

search.addEventListener('click', () => {
    getEpisodes(`https://rickandmortyapi.com/api/location/?name=${searchInput.value}`)
    counter = 1
})

searchInput.addEventListener('keyup', () => {
    getEpisodes(`https://rickandmortyapi.com/api/location/?name=${searchInput.value}`)
    counter = 1
})

