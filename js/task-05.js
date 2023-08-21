const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');
input.addEventListener('input', changeInput);
function changeInput(event) {
    const newInput = event.currentTarget.value;
    if (output === "") {
        output.textContent = "Anonymous";
        
    }
    output.textContent = newInput;
    console.log(newInput);
}
