import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageTextarea = form.querySelector('textarea[name="message"]');
const storageKey = 'feedback-form-state';


const savedData = JSON.parse(localStorage.getItem(storageKey)) || {};


if (savedData.email) {
  emailInput.value = savedData.email;
}

if (savedData.message) {
  messageTextarea.value = savedData.message;
}


const saveDataToLocalStorage = () => {
  const dataToSave = {
    email: emailInput.value,
    message: messageTextarea.value,
  };

  localStorage.setItem(storageKey, JSON.stringify(dataToSave));
};


emailInput.addEventListener('input', throttle(saveDataToLocalStorage, 500));
messageTextarea.addEventListener('input', throttle(saveDataToLocalStorage, 500));


form.addEventListener('submit', (event) => {
  event.preventDefault();

  
  const email = emailInput.value;
  const message = messageTextarea.value;

  
  console.log('Form Data:');
  console.log('Email:', email);
  console.log('Message:', message);

  
  localStorage.removeItem(storageKey);
  emailInput.value = '';
  messageTextarea.value = '';
});
