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
                let type = element.type
                let dimension = element.dimension
                let id = element.id


                let $div = document.createElement('div')
                let $p2 = document.createElement('p')
                let $p3 = document.createElement('p')
                // let img = document.createElement('img')
                let $p = document.createElement('p')


                $p3.textContent = `Dimension: ${dimension}`
                $p2.textContent = `Type: ${type}`
                $div.setAttribute('class', 'oneCharacter text-center  card container-fluid m-3 mb-5')
                $div.setAttribute('id', id)
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


            })

            const $episodeCard = document.querySelectorAll('.oneCharacter')
            $episodeCard.forEach(element => {
                element.addEventListener('click', function () {
                    let lo = this
                    let loId = lo.getAttribute('id')

                    localStorage.setItem('locationID', loId)
                    window.location.replace('./locationDetail.html')

                })
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
