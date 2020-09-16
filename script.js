const form = document.querySelector('#form');
const email = document.querySelector('#email');
const iconError = document.querySelector('.icon-error');
const iconDesc = document.querySelector('.error-desc');

form.addEventListener('submit', onClick);

function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function onClick(e) {
  e.preventDefault();

  const isEmail = validateEmail(email.value);
  if (!isEmail) {
    iconDesc.classList.remove('error');
    iconError.classList.remove('error');
    iconDesc.classList.remove('success');
    iconDesc.innerHTML = 'Please provide a valid email.';
  } else {
    iconError.classList.add('error');
    iconDesc.classList.add('success');
    iconDesc.innerHTML = 'You will be inform with the launch time soon.';
  }
}
