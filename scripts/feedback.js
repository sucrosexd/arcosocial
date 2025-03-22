function handleFeedback(event) {
    event.preventDefault();
    const type = document.getElementById('feedbackType').value;
    const message = document.getElementById('feedbackMessage').value;
    console.log({ type, message });
    alert('Спасибо за обращение! Мы ответим в течение 24 часов.');
    event.target.reset();
}
function logout() {
    localStorage.removeItem('currentUser');
    window.location.href = '../index.html';
}
