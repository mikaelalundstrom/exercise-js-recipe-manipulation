// Part 2 - Correcting the wrongs

// Exercise 1
const logoRef = document.querySelector(".logo-text");
logoRef.style.color = "black";

// Exercise 2
const headerRef = document.querySelector("header");
headerRef.style.justifyContent = "flex-start";

// Exercise 3
headerRef.style.borderColor = "lightgray";

// Exercise 4
const recipeNameRef = document.querySelector("#recipe-name");
recipeNameRef.innerText = "Frozen Cheesecake";

// Exercise 5
const materialIconsSpanRef = document.querySelector(".time-container>span");

materialIconsSpanRef.classList.add("material-icons");

// Exercise 6
const timeRef = document.querySelector(".time");
timeRef.innerText = "60+ min";

// Exercise 7
const imgRef = document.querySelector("img");
imgRef.src = "assets/frozen-cheesecake-slice.jpg";

// Exercise 8
const ingredientsContainerRef = document.querySelector(".ingredients-container");
ingredientsContainerRef.style.backgroundColor = "#f9f9f9";

// Exercise 9
const ingredientsListBottomRef = document.querySelector(".ingredients-list-bottom");
ingredientsListBottomRef.removeChild(ingredientsListBottomRef.firstElementChild);

ingredientsListBottomRef.insertAdjacentHTML(
  "beforeend",
  "<li>15st digestivetex</li><li>Lite smör</li>"
);

// Exercise 10
const ingredientsListPasteItemsRefs = document.querySelectorAll(".ingredients-list-paste>li");
ingredientsListPasteItemsRefs[2].innerText = "3tsk vaniljsocker";

// Exercise 11
const ingredientsListPasteRef = document.querySelector(".ingredients-list-paste");
const listItemRef = document.createElement("li");
listItemRef.innerText = "400g naturell philadelphiaost";
ingredientsListPasteRef.appendChild(listItemRef);

// Exercise 12
const instructionsH3Ref = document.querySelector(".instructions");
instructionsH3Ref.classList.remove("shadow");

// Exercise 13
const instructionsRefs = document.querySelectorAll(".instructions-list>li");
instructionsRefs[1].innerText =
  "Separera ägggulor och äggvitor. Äggvitorna lägger du i en stor bunke, äggulorna i en liten bunke. ";
instructionsRefs[8].innerText = "Ställ in i frysen över natten.";
