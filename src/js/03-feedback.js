import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const formData = {};
const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('.feedback-form input'),
  message: document.querySelector('.feedback-form textarea'),
};

refs.form.addEventListener('submit', onFormsSubmit);
refs.form.addEventListener('input', throttle(onFormsInput, 500));

function onFormsInput(event) {
  formData[event.target.name] = event.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormsSubmit(e) {
  const parsObject = JSON.parse(localStorage.getItem(STORAGE_KEY));
  e.preventDefault();
  e.currentTarget.reset();
  console.log(parsObject);
  localStorage.removeItem(STORAGE_KEY);
}

populateTextarea();
function populateTextarea() {
  const saveMessage = localStorage.getItem(STORAGE_KEY);
  const obj = JSON.parse(saveMessage);

  if (obj?.message) {
    refs.message.value = obj.message;
  }
  if (obj?.email) {
    refs.email.value = obj.email;
  }
}
