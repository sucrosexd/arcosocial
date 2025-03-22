let users = JSON.parse(localStorage.getItem('users')) || [];
function switchForm(formType) {
    document.querySelectorAll('.auth-form').forEach(f => f.classList.remove('active'));
    document.getElementById(`${formType}Form`).classList.add('active');
}
function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
async function handleRegister(e) {
    e.preventDefault();
    const email = document.getElementById('regEmail').value;
    const password = document.getElementById('regPassword').value;
    const confirm = document.getElementById('regConfirm').value;

    if (!validateEmail(email)) {
        alert('Некорректный email');
        return;
    }
    if (password !== confirm) {
        alert('Пароли не совпадают');
        return;

    }
    toggleLoader(true);
    await new Promise(resolve => setTimeout(resolve, 1500));

    if (users.some(u => u.email === email)) {
        alert('Пользователь уже существует');
        toggleLoader(false);
        return;
    }

    users.push({ email, password });
    localStorage.setItem('users', JSON.stringify(users));
    
    toggleLoader(false);
    alert('Регистрация успешна!');
    switchForm('login');
}
function showPasswordStep() {
    const login = document.getElementById('login').value;
    if (login) {
        document.getElementById('step1').classList.remove('active');
        document.getElementById('step2').classList.add('active');
    }
}
function back() {
    if (login) {
        document.getElementById('step1').classList.add('active');
        document.getElementById('step2').classList.remove('active');
    }
}
function toggleLoader(show) {
    document.querySelectorAll('.loader').forEach(l => l.style.display = show ? 'block' : 'none');
    document.querySelectorAll('.btn-text').forEach(t => t.style.display = show ? 'none' : 'block');
}
function setAuthState(isAuth) {
    localStorage.setItem('isAuth', isAuth);
    if (isAuth) window.location.href = '../pages/messenger.html';
}
function handleLogin(event) {
    event.preventDefault();
    const login = document.getElementById('login').value;
    const password = document.getElementById('password').value;
    const users = JSON.parse(localStorage.getItem('users')) || [];

    const user = users.find(u => u.email === login && u.password === password);

    if(user) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        window.location.href = "./pages/messenger.html";
    } else {
        alert('Неверные учетные данные!');
    }
}
document.querySelectorAll('input').forEach(input => {
    input.addEventListener('input', function() {
        if (this.checkValidity()) {
            this.style.borderColor = '#80D4F7';
        } else {
            this.style.borderColor = '#FE83C6';
        }
    });
});