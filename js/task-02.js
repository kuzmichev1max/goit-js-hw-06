const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");

ingredients.forEach( ingridient => {
  const li = document.createElement("li");
  li.textContent = ingridient;
  li.classList.add("item");
  list.append(li);
});
