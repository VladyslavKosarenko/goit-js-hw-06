const input = document.querySelector('#font-size-control');
const span = document.querySelector('#text');
input.addEventListener('input', onInput);
function onInput(event) {
    const inputValue = event.currentTarget.value;
    span.style.fontSize = inputValue + 'px';
    console.log(inputValue)
    console.log(span)
    
}