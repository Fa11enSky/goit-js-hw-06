const formEl = document.querySelector('.login-form');
formEl.addEventListener('submit', (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    if (email === '' || password ==='' ) {
        alert('Всі поля повині бути заповнені')
        return;
    }
    const formObj = {
        email,
        password,   
    }
    
    console.log(formObj);
    form.reset()
})