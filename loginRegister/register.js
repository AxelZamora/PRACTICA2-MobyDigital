let registerForm = document.querySelector('#registerForm')
registerForm.addEventListener('submit', (e) => {
    e.preventDefault()
    let username = document.querySelector('#username').value
    let password = document.querySelector('#password').value
    let fullname = document.querySelector('#fullname').value
    let stack = document.querySelector('#stack').value

    if (checkEmptyInput('password') == true && checkFullName('fullname') === true && checkStack('stack') === true && checkUsername('username') === true) {
        // let registerUser = new RegisterLogin(username, password)
        // registerUser.registerUser(fullname, stack)
    } else {
        checkEmptyInput('password')
        checkUsername('username')
        checkFullName('fullname')
        checkStack('stack')
    }

    let data = {
        name: fullname,
        password: password,
        mail: username,
    }

    fetch('https://api-auth-moby.herokuapp.com/api/user/register', {
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
            console.log(resultCode)
            if (resultCode === 0) {
                setTimeout(() => {
                    window.location.href = 'index.html'
                }, 600)
                feedback.innerHTML = `<div class='alert alert-success py-1'>${resJson.header.message}</div>`
            } else {
                setTimeout(() => {
                    document.querySelector('#username').value = ''
                    document.querySelector('#password').value = ''
                    document.querySelector('#fullname').value = ''
                    document.querySelector('#stack').value = ''
                    feedback.innerHTML = ''
                }, 2000)
                feedback.innerHTML = `<div class='alert alert-danger py-1'>${resJson.header.error}</div>`
            }
        })
        .catch((error) => console.log(error))
})
