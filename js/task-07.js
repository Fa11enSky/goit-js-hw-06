const inputEl = document.querySelector('input');
const textEl = document.querySelector('#text');
inputEl.addEventListener('input', (event) => {
    textEl.style.fontSize = event.currentTarget.value+'px';
})
console.dir(inputEl)