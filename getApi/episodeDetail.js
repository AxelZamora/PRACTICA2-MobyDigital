const gallery2 = document.querySelector('.gallery2')
const gallery3 = document.querySelector('.gallery3')
const imgId = localStorage.getItem('episodeID')


let url = `https://rickandmortyapi.com/api/episode/${imgId}`

const displayInformation = () => {
    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            gallery2.innerHTML = `
            <div class= 'card' >
            
            <p class = 'name'>Name: ${data.name}</p>
            <p class = 'air_date'>Air Date: ${data.air_date}</p>
            
            <p class = 'code'>Code: ${data.episode}</p>
            `
            let characterEpisodes = data.characters
            // console.log(characterEpisodes)

            const getEpisodes = () => {
                let p = document.createElement('p')
                p.textContent = 'Characters in this Episode:'
                gallery3.append(p)
                characterEpisodes.forEach(element => {
                    fetch(element)
                        .then(res => res.json())
                        .then(data => {
                            // console.log(data)
                            let $li = document.createElement('li')
                            $li.setAttribute('class', 'episode')
                            $li.textContent = ` - ${data.name}`
                            gallery3.append($li)
                        })
                })
            }
            getEpisodes()


        })
}
displayInformation()

let goHomeButton = document.querySelector('.goHomeBtn')

let goHome = () => { window.location.replace('episodes.html') }

goHomeButton.addEventListener('click', goHome)
