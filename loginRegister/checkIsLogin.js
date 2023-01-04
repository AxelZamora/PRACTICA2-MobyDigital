const logout = document.getElementById('logout')
const userActive = localStorage.getItem('activeUser')

if (userActive === null) {
    window.location.href = 'index.html'
}

logout.addEventListener('click', () => {
    localStorage.removeItem('activeUser')
    window.location.href = 'index.html'
})
