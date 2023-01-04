import getDetail from "./getDetail.js"

const gallery2 = document.querySelector('.gallery2')
const gallery3 = document.querySelector('.gallery3')
const locationID = localStorage.getItem('locationID')

let url = `https://rickandmortyapi.com/api/location/${locationID}`

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

            gallery3.innerHTML = `<div class= 'card3' >`
            // let p = document.createElement('p')
            // p.textContent = 'Residents in this location:'
            // gallery3.append(p)

            let residents = data.residents
            let description = 'Residents in this location:'
            getDetail(residents, description)
        })
}
displayInformation()

let goHomeButton = document.querySelector('.goHomeBtn')

let goHome = () => { window.location.replace('locations.html') }

goHomeButton.addEventListener('click', goHome)
