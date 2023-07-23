const button = document.querySelector('.playButton')
const input = document.querySelector('#userName')


input.addEventListener('input', (e) => {
    if (e.target.value.length > 1) {
    return   button.removeAttribute('disabled')
    }
        button.setAttribute('disabled', true)
})

button.addEventListener('click', (e) => {
    e.preventDefault()

    localStorage.setItem('UserName', input.value)
    window.location = '../gamePage/gamePage.html'
})