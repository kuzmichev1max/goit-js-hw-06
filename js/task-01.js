const list = document.querySelector("#categories");

const categoriesArray = [...list.children];

console.log(`Number of categories: ${categoriesArray.length}`);

categoriesArray.forEach( element => {
  const categoryName = element.firstElementChild.textContent;
  const numberOfEl = element.lastElementChild.children.length;

  console.log(
    `Category: ${categoryName}
    Elements: ${numberOfEl}`
  );
});
