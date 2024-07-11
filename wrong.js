// Part 2 - Correcting the wrongs

// Exercise 1
let logoRef = document.querySelector(".logo-text");
logoRef.style.color = "black";

// Exercise 2
let headerRef = document.querySelector("header");
headerRef.style.justifyContent = "flex-start";

// Exercise 3
headerRef.style.borderColor = "lightgray";

// Exercise 4
let recipeNameRef = document.querySelector("#recipe-name");
recipeNameRef.innerText = "Frozen Cheesecake";

// Exercise 5
let materialIconsSpanRef = document.querySelector(".time-container>span");

materialIconsSpanRef.classList.add("material-icons");

// Exercise 6
let timeRef = document.querySelector(".time");
timeRef.innerText = "60+ min";

// Exercise 7
let imgRef = document.querySelector("img");
imgRef.src = "assets/frozen-cheesecake-slice.jpg";

// Exercise 8
let ingredientsContainerRef = document.querySelector(".ingredients-container");
ingredientsContainerRef.style.backgroundColor = "#f9f9f9";

// Exercise 9
let ingredientsListBottomRef = document.querySelector(".ingredients-list-bottom");
ingredientsListBottomRef.removeChild(ingredientsListBottomRef.firstElementChild);

ingredientsListBottomRef.insertAdjacentHTML(
  "beforeend",
  "<li>15st digestivetex</li><li>Lite smör</li>"
);

// Exercise 10
let ingredientsListPasteItemsRefs = document.querySelectorAll(".ingredients-list-paste>li");
ingredientsListPasteItemsRefs[2].innerText = "3tsk vaniljsocker";

// Exercise 11
let ingredientsListPasteRef = document.querySelector(".ingredients-list-paste");
let listItemRef = document.createElement("li");
listItemRef.innerText = "400g naturell philadelphiaost";
ingredientsListPasteRef.appendChild(listItemRef);

// Exercise 12
let instructionsH3Ref = document.querySelector(".instructions");
instructionsH3Ref.classList.remove("shadow");

// Exercise 13
let instructionsRefs = document.querySelectorAll(".instructions-list>li");
instructionsRefs[1].innerText =
  "Separera ägggulor och äggvitor. Äggvitorna lägger du i en stor bunke, äggulorna i en liten bunke. ";
instructionsRefs[8].innerText = "Ställ in i frysen över natten.";
