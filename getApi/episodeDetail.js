import getDetail from "./getDetail.js"

const gallery2 = document.querySelector('.gallery2')
const gallery3 = document.querySelector('.gallery3')
const episodeID = localStorage.getItem('episodeID')

let url = `https://rickandmortyapi.com/api/episode/${episodeID}`

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
            gallery3.innerHTML = `<div class= 'card3' >`
            let characters = data.characters
            let description = 'Characters in this episode:'
            getDetail(characters, description)
        })
}
displayInformation()

let goHomeButton = document.querySelector('.goHomeBtn')

let goHome = () => { window.location.replace('episodes.html') }

goHomeButton.addEventListener('click', goHome)
