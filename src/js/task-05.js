let nameInput = document.getElementById('name-input');
let nameOutput = document.getElementById('name-output');

nameInput.addEventListener('keyup', (e) => {
    
});

if (nameInput = ' '){
    nameOutput.textContent = `Anonymous `;
} else {
    nameOutput.textContent = nameInput.textContent;
}