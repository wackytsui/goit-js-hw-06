let form = document.querySelector(".login-form");
form.addEventListener("submit", (event) => {
    event.preventDefault();

    let email = document.getElementsByName("email");
    let password = document.getElementsByName("password");

    let user = {
        email: "allan.altavano@gmail.com",
        password: "allan4817",
    };

    if (email[0].value === user.email && password[0].value === user.password) {
        console.log('Successfully');
        console.log(`Email: ${email[0].value}`)
        console.log(`Password: ${password[0].value}`)
        alert('Successfully');
    } else {
        console.log('Invalid input, please try again');
        alert('Invalid input, please try again');
    }

    form.reset();
});
