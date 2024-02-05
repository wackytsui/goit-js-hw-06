let validInput = document.getElementById("validation-input");


validInput.addEventListener('keypress', () => {
    if (validInput.value.length <= 6) {
        console.log(validInput.value.length);
        document.getElementById('validation-input').classList.add("valid");
    } else {
        alert('Please enter 6 symbol')
        console.log(validInput.value.length);
        document.getElementById('validation-input').classList.add("invalid");
        validInput.value = " ";
    }
})

// validInput.addEventListener('focus', () => {
//     document.getElementById("validation-input").classList.add('valid');
// })

// validInput.addEventListener('blur', () => {
//     document.getElementById("validation-input").classList.add('invalid')
// })