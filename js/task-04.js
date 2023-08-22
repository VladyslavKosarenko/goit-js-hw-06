const btnDecrement = document.querySelector('[data-action="decrement"]');
const btnIncrement = document.querySelector('[data-action="increment"]');
const span = document.querySelector('#value')
let counterValue = 0;
let updateValue = () => {
    span.textContent = counterValue;
}
btnDecrement.addEventListener('click',  () => {
    counterValue--;
    updateValue();
    
})
btnIncrement.addEventListener('click', () => {
    
    counterValue++;
    updateValue();
})

