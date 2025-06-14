document.addEventListener('DOMContentLoaded', () => {
const form = document.getElementById('registarion-Form');
const feedback = document.getElementById('feedback');    

form.addEventListener('submit', (event) => {
    Event.preventDefault();

    const username = document.getElementById('username').value.trim ();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    let invalid =true;
    const messages = [];

    if (username.lenghth <3){
        messages.push('Username must be at least 3 characters long');
        invalid = false;
    }

    if (password.length < 8) {
        messages.push('Password must be at least 8 characters long');
        invalid = false;
    }
    if (!email.includes('@')) {
        messages.push('Email must be a valid email address');
        invalid = false;
    }
    if (invalid) {
        feedback.textContent = 'Registration successful!';
        feedback.style.color = 'green';
    } else {
        feedback.textContent = messages.join(' ');
        feedback.style.color = 'red';
        feedback.style.backgroundColor = 'lightyellow';
    }