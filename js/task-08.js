const formSubmit = document.querySelector('.login-form')
formSubmit.addEventListener('submit', onSubmit)
function onSubmit(event) {
    event.preventDefault();
    const formValue = event.currentTarget;
    const email = formValue.email.value;
    const password = formValue.password.value;
    if (email === "" || password === "") {
        const massage = 'Усі поля мають бути заповнені!';
        alert(massage);
    }
    else {
    const formInfo = {
    Email: email,
    Password: password,
    }
        console.log(formInfo);
        formSubmit.reset();
    }

}