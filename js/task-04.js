let counterValue = 0;
const counterEl = document.querySelector('#value')
const decrementBtnEl = document.querySelector('button[data-action="decrement"]')
const incrementBtnEl = document.querySelector('button[data-action="increment"]')

decrementBtnEl.addEventListener('click', () => {
    counterValue -= 1;
    counterEl.textContent = counterValue;
});
incrementBtnEl.addEventListener('click', () => {
    counterValue += 1;
    counterEl.textContent = counterValue;
})
console.dir(counterEl)