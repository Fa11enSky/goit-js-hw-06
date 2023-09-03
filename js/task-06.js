const inputEL = document.querySelector('input')
console.log(inputEL)
inputEL.addEventListener('blur', (ev) => {
    if (ev.currentTarget.value.length !== Number(ev.currentTarget.dataset.length)) {
        ev.currentTarget.classList.add('invalid')
        return
    } 
    if (ev.currentTarget.classList.contains('invalid')) {
        ev.currentTarget.classList.remove('invalid')
    }
    ev.currentTarget.classList.add('valid')
})
