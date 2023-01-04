const feedback = document.getElementById('feedback')
let loginForm = document.getElementById('loginForm')
loginForm.addEventListener('submit', (e) => {
    e.preventDefault()

    let username = document.querySelector('#username').value
    let password = document.querySelector('#password').value

    let data = {
        mail: username,
        password: password,
    }

    fetch('https://api-auth-moby.herokuapp.com/api/user/login', {
        headers: {
            'Content-type': 'application/json; charset=utf-8',
        },
        method: 'POST',
        body: JSON.stringify(data),
    })
        .then((response) => response.json())
        .then((resJson) => {
            console.log(resJson)
            let resultCode = resJson.header.resultCode
            // console.log(resultCode)
            if (resultCode === 0) {
                setTimeout(() => {
                    window.location.href = 'characters.html'
                    localStorage.setItem('activeUser', 1)
                }, 1200)
                feedback.innerHTML = `<div class='alert alert-success py-1'>${resJson.header.message}</div>`
            } else {
                setTimeout(() => {
                    document.querySelector('#username').value = ''
                    document.querySelector('#password').value = ''
                    feedback.innerHTML = ''
                }, 2000)
                feedback.innerHTML = `<div class='alert alert-danger py-1'>${resJson.header.error}</div>`
            }
        })
        .catch((error) => console.log(error))
})
