
const
    gallery = document.querySelector('.gallery'),
    prev = document.getElementById('prev'),
    next = document.getElementById('next'),
    searchInput = document.getElementById('searchInput'),
    search = document.getElementById('search')

const getCharacters = (url) => {
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
                let img = document.createElement('img')
                let $p = document.createElement('p')

                $div.setAttribute('class', 'oneCharacter text-center  card container-fluid m-3 mb-5')

                $p.setAttribute('class', 'card-text characterName')
                $p.textContent = element.name

                img.setAttribute('src', element.image)
                img.setAttribute('class', 'charactersImg img-fluid')
                img.setAttribute('id', element.id)

                gallery.append($div)
                $div.append(img)
                $div.append($p)
            })
            const $characterImages = document.querySelectorAll('.charactersImg')
            redirectToCharacterDetail($characterImages)
        })
        .catch(
            () => {
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

const redirectToCharacterDetail = ($characterImages) => {
    $characterImages.forEach(element => {
        element.addEventListener('click', function () {
            let img = this
            let imgId = img.getAttribute('id')

            localStorage.setItem('characterID', imgId)
            window.location.replace('./characterDetail.html')
        })
    })
}

getCharacters('https://rickandmortyapi.com/api/character/')


let counter = 1

next.addEventListener('click', () => {
    getCharacters(`https://rickandmortyapi.com/api/character/?page=${++counter}&name=${searchInput.value}`), goToTop()

})

prev.addEventListener('click', () => {
    getCharacters(`https://rickandmortyapi.com/api/character/?page=${--counter}&name=${searchInput.value}`), goToTop()
})

search.addEventListener('click', () => {
    getCharacters(`https://rickandmortyapi.com/api/character/?name=${searchInput.value}`)
    counter = 1
})

searchInput.addEventListener('keyup', () => {
    getCharacters(`https://rickandmortyapi.com/api/character/?name=${searchInput.value}`)
    counter = 1
})

const goToTop = () => {
    document.body.scrollIntoView();
};
