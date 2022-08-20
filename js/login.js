// step-1 : add click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click', function () {
    //    get the email address inside the email input field
    // allways remember to use .value to get text from an input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    // step - 3 = get password
    // 3.a: set id on the element
    // 3.b: get the element
    // 3.c: get the value from the password field
    const passwordFiled = document.getElementById('user-password')
    const password = passwordFiled.value

    // DO Not Verify email password on the client side
    // step-4: verify email and password
    if (email === 'myaccount@ownbank.com' && password === 'own9652@') {
        window.location.href = 'bank.html'
        alert('login successful')
    }
    else {
        alert('Asslamualikum boro vai')
    }
}) 
