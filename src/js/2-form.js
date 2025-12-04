const form = document.querySelector('.feedback-form');
const email = form.querySelector('input[name="email"]');
const message = form.querySelector('textarea[name="message"]');
const STORAGE_KEY = 'form-input-value';

let formData = { email: '', message: '' };

const saved = localStorage.getItem(STORAGE_KEY);
if (saved) {
  formData = JSON.parse(saved);
  email.value = formData.email;
  message.value = formData.message;
}

form.addEventListener('input', event => {
  formData[event.target.name] = event.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

form.addEventListener('submit', e => {
  e.preventDefault();

  const emailValue = email.value.trim();
  const messageValue = message.value.trim();

  if (emailValue === '' || messageValue === '') {
    alert('feedback-form-state');
    return;
  } else {
    console.log(
      `Відправлено:, email:${email.value}, message:${message.value} `
    );
    localStorage.removeItem(STORAGE_KEY);
    form.reset();
    formData = { email: '', message: '' };
  }
});
