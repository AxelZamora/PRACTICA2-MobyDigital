

const getDetail = (data, description) => {

    const gallery3 = document.querySelector('.gallery3')
    const card3 = document.querySelector('.card3')

    data.forEach(element => {
        fetch(element)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                let $li = document.createElement('li')
                $li.textContent = ` - ${data.name}`
                card3.append($li)
            })
    })
    let p = document.createElement('p')
    p.textContent = description
    card3.append(p)
}

export default getDetail
