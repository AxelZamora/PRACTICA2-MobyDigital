const gallery2 = document.querySelector('.gallery2')
const gallery3 = document.querySelector('.gallery3')
const imgId = localStorage.getItem('locationID')


let url = `https://rickandmortyapi.com/api/location/${imgId}`

const displayInformation = () => {
    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            gallery2.innerHTML = `
            <div class= 'card' >
            
            <p class = 'name'>Name: ${data.name}</p>
            <p class = 'type'>Type: ${data.type}</p>
            
            <p class = 'Dimension'>Code: ${data.dimension}</p>
            `
            let characterEpisodes = data.residents
            // console.log(characterEpisodes)

            const getEpisodes = () => {
                let p = document.createElement('p')
                p.textContent = 'Residents in this location:'
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

let goHome = () => { window.location.replace('locations.html') }

goHomeButton.addEventListener('click', goHome)
