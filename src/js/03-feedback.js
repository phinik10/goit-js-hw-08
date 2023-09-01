import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageTextarea = form.querySelector('textarea[name="message"]');
const storageKey = 'feedback-form-state';

// Зчитуємо дані з локального сховища
const savedData = JSON.parse(localStorage.getItem(storageKey)) || {};

// Заповнюємо поля форми зі зчитаними даними
if (savedData.email) {
  emailInput.value = savedData.email;
}

if (savedData.message) {
  messageTextarea.value = savedData.message;
}

// Функція, яка зберігає дані в локальному сховищі
const saveDataToLocalStorage = () => {
  const dataToSave = {
    email: emailInput.value,
    message: messageTextarea.value,
  };

  localStorage.setItem(storageKey, JSON.stringify(dataToSave));
};

// Встановлюємо обробники подій для полів форми
emailInput.addEventListener('input', throttle(saveDataToLocalStorage, 500));
messageTextarea.addEventListener('input', throttle(saveDataToLocalStorage, 500));

// Обробник події сабміту форми
form.addEventListener('submit', (event) => {
  event.preventDefault();

  // Отримуємо дані з полів форми
  const email = emailInput.value;
  const message = messageTextarea.value;

  // Виводимо їх у консоль
  console.log('Form Data:');
  console.log('Email:', email);
  console.log('Message:', message);

  // Очищаємо локальне сховище та поля форми
  localStorage.removeItem(storageKey);
  emailInput.value = '';
  messageTextarea.value = '';
});
