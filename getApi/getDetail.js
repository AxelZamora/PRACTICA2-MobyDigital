const getDetail = (data) => {

    const gallery3 = document.querySelector('.gallery3')
    data.forEach(element => {
        fetch(element)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                let $li = document.createElement('li')
                $li.textContent = ` - ${data.name}`
                gallery3.append($li)
            })
    })
}

export default getDetail
