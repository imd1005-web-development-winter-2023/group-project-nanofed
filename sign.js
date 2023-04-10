/*const form = document.getElementById('.form');
const email = document.getElementById('.email');
const password = document.getElementById('.password');


form.addEventListener('submit', (event) => {
  event.preventDefault();

  Validate();
});

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = message;
  inputControl.classList.add('error');
  inputControl.classList.remove('success');
};

const setSucess = element => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = '';
  inputControl.classList.add('success');
  inputControl.classList.remove('error');
};

const isValidEmail = (emailVal) => {
  var atSymbol = emailVal.indexOf('@');
  if (atSymbol < 1) return false;
  var dot = emailVal.lastIndexOf('.');
  if (dot <= atSymbol + 2) return false;
  if (dot === emailVal.length - 1) return false;
  return true;
};

const Validate = () => {
  const emailVal = email.value.trim();
  const passwordVal = password.value.trim();

  //Email
  if (emailVal === '') {
    setError(email, 'Email is required');
  }
  else if (!isValidEmail(emailVal)) {
    setError(email, 'Email is not valid');
  }
  else {
    setSuccess(email);
  }

  //Password
  if (passwordVal === '') {
    setError(password, 'Password is required');
  }
  else if (passwordVal.length <= 7) {
    setError(password, "Password must be 8 or + characters");
  }
  else {
    setSuccess(password);
  }
};*/
