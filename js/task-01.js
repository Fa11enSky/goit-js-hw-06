const listEl = document.querySelector("#categories");
console.log(`Number of categories: ${listEl.children.length}`);

const listItemEl = document.querySelectorAll(".item");

listItemEl.forEach((el) => {
  console.log(`Category: ${el.firstElementChild.textContent}`);
  console.log(`Elements: ${el.lastElementChild.children.length}`);
});
