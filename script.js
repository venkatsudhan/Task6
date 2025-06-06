const form = document.getElementById('contactForm');
const nameField = document.getElementById('name');
const emailField = document.getElementById('email');
const messageField = document.getElementById('message');

const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const messageError = document.getElementById('messageError');
const successMessage = document.getElementById('successMessage');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    let valid = true;

    nameError.textContent = '';
    emailError.textContent = '';
    messageError.textContent = '';
    successMessage.textContent = '';

    if (nameField.value.trim() === '') {
        nameError.textContent = 'Name is required';
        valid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailField.value.trim() === '') {
        emailError.textContent = 'Email is required';
        valid = false;
    } else if (!emailPattern.test(emailField.value)) {
        emailError.textContent = 'Enter a valid email';
        valid = false;
    }

    if (messageField.value.trim() === '') {
        messageError.textContent = 'Message is required';
        valid = false;
    }

    if (valid) {
        successMessage.textContent = 'Form submitted successfully!';
        form.reset();
    }
});
