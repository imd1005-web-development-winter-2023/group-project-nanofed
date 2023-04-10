const form = document.querySelector('form');
const email = document.querySelector('.sign-in-email');
const password = document.querySelector('.sign-in-password');

form.addEventListener('submit', (event) => {

    event.preventDefault();

    validate();
});

const showError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
};

const showSuccess = (element) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');

};

const checkEmail = (emailVal) => {
    var atSymbol = emailVal.indexOf('@');
    if (atSymbol < 1) return false;
    var dot = emailVal.lastIndexOf('.');
    if (dot <= atSymbol + 2) return false;
    if (dot === emailVal.length - 1) return false;
    return true;
};

const validate = () => {
    const emailVal = email.value.trim();
    const passwordVal = password.value.trim();

    if (emailVal === '') {
        showError(email, 'Email is required')
    }
    else if (!checkEmail(emailVal)) {
        showError(email, 'Email is invalid')
    }
    else {
        showSuccess(email);
    }

    if (passwordVal === '') {
        showError(password, 'Password is required')
    }
    else if (password.length <= 7) {
        showError(password, 'Password must be min 8 characters')
    }
    else {
        showSuccess(password)
    }
};