const input = document.querySelector('#validation-input');
input.addEventListener('blur', checkInput)
function checkInput(event) {
    let value = event.currentTarget.value;
    const dataLength = Number(input.getAttribute('data-length'));

      if (value.length <= dataLength) {
        input.classList.remove('invalid');
        input.classList.add('valid');
      } else {
        input.classList.remove('valid');
        input.classList.add('invalid');
      }
    
}