// Part 1 - Get data from the DOM
// Exercise 1
console.log("Exercise 1");

let recipeName = document.querySelector("#recipe-name");
console.log(`Recipe name: ${recipeName.innerText}`);

// Exercise 2
console.log("Exercise 2");

console.log(`The tag used to display the Recipe name is: ${recipeName.tagName}`);

// Exercise 3
console.log("Exercise 3");

let descriptionRef = document.querySelector(".description");
//if no set value, log computed style
if (!descriptionRef.style.fontSize) {
  console.log(`The font size of the description is: ${getComputedStyle(descriptionRef).fontSize}`);
  // else log normal style
} else {
  console.log(`The font size of the description is: ${descriptionRef.style.fontSize}`);
}

// Exercise 4
console.log("Exercise 4");

let imgRef = document.querySelector("img");
console.log(`The alt attribute for the img says: ${imgRef.alt}`);

// Exercise 5
console.log("Exercise 5");

let imgRefObject = {
  url: imgRef.src,
  height: imgRef.clientHeight,
  width: imgRef.clientWidth,
};
console.log(imgRefObject);

// Exercise 6
console.log("Exercise 6");

ingredientsListPasteRef = document.querySelector(".ingredients-list-paste");

console.log(`The paste has ${ingredientsListPasteRef.children.length} ingredients.`);

// Exercise 7
console.log("Exercise 7");
pasteIngredientEl4 = ingredientsListPasteRef.children[3].outerHTML;
console.log(`The fourth element in the paste ingredients list is "${pasteIngredientEl4}"`);

// Exercise 8
console.log("Exercise 8");

let instructions = [];
let instructionsRefs = document.querySelectorAll(".instructions-list>li");

instructionsRefs.forEach((instruction, index) => {
  instructions.push({
    order: index + 1,
    text: instruction.innerText,
  });
});

console.log(instructions);
