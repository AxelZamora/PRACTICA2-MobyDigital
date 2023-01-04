import getDetail from "./getDetail.js"
const gallery2 = document.querySelector('.gallery2')
const gallery3 = document.querySelector('.gallery3')
const characterID = localStorage.getItem('characterID')

let url = `https://rickandmortyapi.com/api/character/${characterID}`

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
            gallery3.innerHTML = `<div class= 'card3' >`
            // let p = document.createElement('p')
            // p.textContent = 'Episodes:'
            // gallery3.append(p)

            let characterEpisodes = data.episode
            let description = 'Episodes:'
            getDetail(characterEpisodes, description)
        })
}
displayInformation()

let goHomeButton = document.querySelector('.goHomeBtn')

let goHome = () => { window.location.replace('characters.html') }

goHomeButton.addEventListener('click', goHome)
