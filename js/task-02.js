const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const elements = [];
ingredients.forEach((el) => {
  const tagEl = document.createElement("li");
  tagEl.textContent = el;
  tagEl.classList.add("item");
  elements.push(tagEl);
});
const listEl = document.querySelector("#ingredients");
listEl.append(...elements);
