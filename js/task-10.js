function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const createBtnEl = document.querySelector('[data-create]')
const destroyBtnEl = document.querySelector('[data-destroy]')
const inputEl = document.querySelector('input');
const mainBox = document.querySelector('#boxes');
let amount = 0;
inputEl.addEventListener('change', (ev) => {
  amount = Number(ev.currentTarget.value);

})
createBtnEl.addEventListener('click', () => {
  createBoxes(amount)
})

destroyBtnEl.addEventListener('click', () => {
  destroyBoxes();
})
function createBoxes(amount) {
  if (amount<=0) {
      alert('Значення поля не може бути нулем')
     return
  }
  const arrElements = [];
  let sizeCounter = 30;
  for (let i = 1; i <= amount; i += 1){
   const newEl= document.createElement('div')
    newEl.style.width = sizeCounter+'px';
    newEl.style.height = sizeCounter+'px';
    newEl.style.backgroundColor = getRandomHexColor();
    arrElements.push(newEl)
    sizeCounter += 10;
  }
  mainBox.append(...arrElements)

}
function destroyBoxes() {
  mainBox.innerHTML = '';
}