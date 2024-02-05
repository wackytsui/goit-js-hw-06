let nameInput = document.getElementById("name-input");
let nameOutput = document.getElementById("name-output");

nameInput.addEventListener("keyup", (input) => {
    nameOutput.innerText = input.target.value;
});

// if (nameInput = ' '){
//     nameOutput.textContent = `Anonymous `;
// } else {
//     nameOutput.textContent = nameInput.textContent;
// }