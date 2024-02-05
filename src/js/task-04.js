let initialValue = 0;

let value = document.getElementById('value');
value.innerText = initialValue;

let incValue = document.querySelector('[data-action="increment"]');
let decValue = document.querySelector('[data-action="decrement"]');

incValue.onclick = () => {
    initialValue += 1;
    value.innerText = initialValue;
};

decValue.onclick = () => {
    initialValue -= 1;
    value.innerText = initialValue;
};