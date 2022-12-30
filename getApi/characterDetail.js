const gallery2 = document.querySelector('.gallery2')
const gallery3 = document.querySelector('.gallery3')
const imgId = localStorage.getItem('characterID')

let url = `https://rickandmortyapi.com/api/character/${imgId}`

const displayInformation = () => {
    fetch(url)
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            gallery2.innerHTML = `
            <div class= 'card' >
            <img src='${data.image}'>
            <span class = 'status'>Status: ${data.status}</span>
            <span class = 'name'>Name: ${data.name}</span>
            
            <p class = 'gender'>Gender: ${data.gender}</p>
            
            <p class = 'origin'>Origin: ${data.origin.name}</p>
            <p class = 'species'>Specie: ${data.species}</p>
            <p class = 'location'>Location: ${data.location.name}</p>
            
         
            `
            let characterEpisodes = data.episode
            // console.log(characterEpisodes)

            const getEpisodes = () => {
                let p = document.createElement('p')
                p.textContent = 'Episodes:'
                gallery3.append(p)
                characterEpisodes.forEach(element => {
                    fetch(element)
                        .then(res => res.json())
                        .then(data => {
                            console.log(data)
                            let $li = document.createElement('li')
                            $li.setAttribute('class', 'episode')
                            $li.textContent = ` Capitulo: ${data.id} - ${data.name}`
                            gallery3.append($li)
                        })
                })
            }
            getEpisodes()


        })
}
displayInformation()

let goHomeButton = document.querySelector('.goHomeBtn')

let goHome = () => { window.location.replace('index.html') }

goHomeButton.addEventListener('click', goHome)
