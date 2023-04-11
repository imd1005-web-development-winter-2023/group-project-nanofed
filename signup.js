const formSU = document.querySelector('form');
const email2 = document.querySelector('.sign-up-email');
const password2 = document.querySelector('.sign-up-password');
const firstname = document.querySelector('.sign-up-fn');
const lastname = document.querySelector('.sign-up-ln');

let isValid = false;

form.addEventListener('submit', (event) => {
    event.preventDefault();

    validate();
    
if (isValid == true) {
    location.replace("./main.html");
}
else if (isValid == false) {
    return;
}
});



const showError = (element, message) => {
    const inputControl1 = element.parentElement;
    const errorDisplay1 = inputControl.querySelector('.error');

    errorDisplay1.innerText = message;
    inputControl1.classList.add('error');
    inputControl1.classList.remove('success');
};

const showSuccess = (element) => {
    const inputControl1 = element.parentElement;
    const errorDisplay1 = inputControl.querySelector('.error');

    errorDisplay1.innerText = '';
    inputControl1.classList.add('success');
    inputControl1.classList.remove('error');
};


const checkEmail2 = (emailVal2) => {
    var atSymbol2 = emailVal2.indexOf('@');
    if (atSymbol2 < 1) return false;
    var dot2 = emailVal2.lastIndexOf('.');
    if (dot2 <= atSymbol2 + 2) return false;
    if (dot2 === emailVal2.length - 1) return false;
    return true;
};


const validate = () => {

    const emailVal2 = email2.value.trim();
    const passwordVal2 = password2.value.trim();
    const firstnameVal = firstname.value.trim();
    const lastnameVal = lastname.value.trim();

    if (emailVal2 === '') {
        showError(email2, 'Email is required')
        isValid == false;
    }
    else if (!checkEmail(emailVal2)) {
        showError(email2, 'Email is invalid')
        isValid == false;
    }
    else {
        showSuccess(email2);
        isValid == true;
    }

    if (passwordVal2 === '') {
        showError(password2, 'Password is required')
        isValid == false;
    }
    else if (passwordVal2.length <= 7) {
        showError(password2, 'Password must be min 8 characters')
        isValid == false;
    }
    else {
        showSuccess(password2)
        isValid == true;
    }

    if (firstnameVal === '') {
        showError(firstname, 'First Name is required')
        isValid == false;
    }
    else {
        showSuccess(firstname)
        isValid == true;
    }

    if (lastnameVal === '') {
        showError(firstname, 'First Name is required')
        isValid == false;
    }
    else {
        showSuccess(lastname)
        isValid == true;
    }
};
