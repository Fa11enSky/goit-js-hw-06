const inputEL = document.querySelector('input')
console.log(inputEL)
inputEL.addEventListener('blur', (ev) => {
    if (ev.currentTarget.value.length !== Number(ev.currentTarget.dataset.length)) {
        ev.currentTarget.id = 'validation-input.invalid';
        return
    } 
    ev.currentTarget.id = 'validation-input.valid';
})