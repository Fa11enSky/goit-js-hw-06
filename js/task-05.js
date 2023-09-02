const inputEl = document.querySelector('#name-input');
const spanOutputEl = document.querySelector('#name-output');
inputEl.addEventListener('input', (ev) => {
    spanOutputEl.textContent = ev.currentTarget.value;
    if (ev.currentTarget.value === '') {
        spanOutputEl.textContent = 'Anonymous'
    }
})