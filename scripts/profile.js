function loadProfile() {
    const user = JSON.parse(localStorage.getItem('currentUser')) || {};

    document.getElementById('firstName').value = user.firstName || '';
    document.getElementById('lastName').value = user.lastName || '';
    document.getElementById('middleName').value = user.middleName || '';
    document.getElementById('privacyLevel').value = user.privacy || 'public';
}
function saveProfile() {
    const user = {
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        middleName: document.getElementById('middleName').value,
        privacy: document.getElementById('privacyLevel').value
    };

    localStorage.setItem('currentUser', JSON.stringify(user));
    const btn = document.querySelector('.save-btn');
        btn.textContent = '✓ Сохранено!';
        btn.style.background = '#4fff64';
        
        setTimeout(() => {
            btn.textContent = 'Сохранить изменения';
            btn.style.background = 'linear-gradient(45deg, #FE83C6, #80D4F7)';
        }, 2000);
}
function changeTheme(theme) {
    alert('Эх, блин, оно толком не работает(')
}
function logout() {
    localStorage.removeItem('currentUser');
    window.location.href = '../index.html';
}
document.addEventListener('DOMContentLoaded', () => {
    loadProfile();
});
