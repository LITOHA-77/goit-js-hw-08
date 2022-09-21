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
// refs.message.addEventListener('input', throttle(onTextareaInput, 500));
// refs.email.addEventListener('input', throttle(onTextareaInput, 500));
// refs.form.addEventListener('input', event => {
//   formData[event.target.name] = event.target.value;
//   localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
// });
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
  const objV = Object.values(JSON.parse(saveMessage));
  const objK = Object.keys(JSON.parse(saveMessage));
  if (!saveMessage) {
    return null;
  }
  if (objK.includes('message')) {
    refs.message.value = objV;
    console.log(objK);
  }
  if (objK.includes('email')) {
    refs.email.value = objV;
    console.log(objK);
  }
}

// const parsObject = JSON.parse(localStorage.getItem(STORAGE_KEY));
// const userInput = localStorage.getItem(STORAGE_KEY);
// const parseData = JSON.parse(userInput);
// console.log(parsObject);
// console.log(userInput);
