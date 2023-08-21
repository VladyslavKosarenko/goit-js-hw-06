const btnDecrement = document.querySelector('[data-action="decrement"]');
const btnIncrement = document.querySelector('[data-action="increment"]');
let counterValue = 0;
btnDecrement.addEventListener('click', () => {
    
    counterValue--;
    console.log(counterValue)
})
btnIncrement.addEventListener('click', () => {
    
    counterValue++;
    console.log(counterValue)
})

