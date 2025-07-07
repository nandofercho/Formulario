

// Selección de elementos del DOM
const form = document.getElementById('registration-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');
const ageInput = document.getElementById('age');
const submitButton = document.getElementById('submit-button');

// Validaciones individuales
function validateName() {
    const value = nameInput.value.trim();
    const error = document.getElementById('name-error');
    if (value.length < 3) {
        error.textContent = 'El nombre debe tener al menos 3 caracteres';
        nameInput.classList.add('invalid');
        nameInput.classList.remove('valid');
        return false;
    } else {
        error.textContent = '';
        nameInput.classList.add('valid');
        nameInput.classList.remove('invalid');
        return true;
    }
}

function validateEmail() {
    const value = emailInput.value.trim();
    const error = document.getElementById('email-error');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
        error.textContent = 'Ingresa un correo electrónico válido';
        emailInput.classList.add('invalid');
        emailInput.classList.remove('valid');
        return false;
    } else {
        error.textContent = '';
        emailInput.classList.add('valid');
        emailInput.classList.remove('invalid');
        return true;
    }
}

function validatePassword() {
    const value = passwordInput.value;
    const error = document.getElementById('password-error');
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(value)) {
        error.textContent = 'La contraseña debe tener al menos 8 caracteres, un número y un carácter especial';
        passwordInput.classList.add('invalid');
        passwordInput.classList.remove('valid');
        return false;
    } else {
        error.textContent = '';
        passwordInput.classList.add('valid');
        passwordInput.classList.remove('invalid');
        return true;
    }
}

function validateConfirmPassword() {
    const value = confirmPasswordInput.value;
    const error = document.getElementById('confirm-password-error');
    if (value !== passwordInput.value) {
        error.textContent = 'Las contraseñas no coinciden';
        confirmPasswordInput.classList.add('invalid');
        confirmPasswordInput.classList.remove('valid');
        return false;
    } else {
        error.textContent = '';
        confirmPasswordInput.classList.add('valid');
        confirmPasswordInput.classList.remove('invalid');
        return true;
    }
}

function validateAge() {
    const value = parseInt(ageInput.value, 10);
    const error = document.getElementById('age-error');
    if (isNaN(value) || value < 18) {
        error.textContent = 'Debes tener al menos 18 años';
        ageInput.classList.add('invalid');
        ageInput.classList.remove('valid');
        return false;
    } else {
        error.textContent = '';
        ageInput.classList.add('valid');
        ageInput.classList.remove('invalid');
        return true;
    }
}

// Validación general
function validateForm() {
    const isValid = validateName() && validateEmail() && validatePassword() && validateConfirmPassword() && validateAge();
    submitButton.disabled = !isValid;
}

// Event listeners
nameInput.addEventListener('input', validateName);
emailInput.addEventListener('input', validateEmail);
passwordInput.addEventListener('input', validatePassword);
confirmPasswordInput.addEventListener('input', validateConfirmPassword);
ageInput.addEventListener('input', validateAge);

form.addEventListener('input', validateForm);

form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Formulario enviado con exito.');
    form.reset();
    submitButton.disabled = true;
    document.querySelectorAll('input').forEach(input => {
        input.classList.remove('valid', 'invalid');
    });
});
