let chats = [
    {id: 1, name: "Техподдержка", lastMessage: "Обратитесь к команде...", unread: 1},
    {id: 2, name: "Команда проекта", lastMessage: "Заодно с техподдержкой...", unread: 3}
];
let messages = {
    1: [
        {text: "**начало переписки с техподдержкой**", sender: "system", time: "10:00"},
        {text: "Добрый день! Чем можем помочь?", sender: "support", time: "10:00"},
        {text: "Меня начало кидать к вам в чат по неизвестной причине.", sender: "me", time: "17:27"},
        {text: "Обратитесь к команде проекта, может они помогут.", sender: "support", time: "17:28"}
    ],
    2: [
        {text: "**начало переписки с командой проекта**", sender: "system", time: "17:25"},
        {text: "Так, что мы можем сделать?", sender: "dev", time: "17:25" },
        {text: "Ну, есть у меня одна идея, но...", sender: "me", time: "17:26"},
        {text: "???", sender: "dev", time: "17:26"},
        {text: "Так, стоп, ты сюда теперь почему-то не можешь сюда писать?.. Передай инфу через техподдержку, мы же все на связи.", sender: "dev", time: "17:27"},
        {text: "Тебя всё время кидает в чат техподдержки?", sender: "dev", time: "17:28"},
        {text: "Хах, весело.", sender: "dev", time: "17:28"},
        {text: "Ну ладно, придётся пока так пожить.", sender: "dev", time: "17:29"},
        {text: "Заодно с техподдержкой подружишься быстрее)", sender: "dev", time: "17:30"}
    ]
};
function initChats() {
    const chatList = document.getElementById('chatList');
    chatList.innerHTML = chats.map(chat => `
                <div class="chat-item" data-chat-id="${chat.id}" onclick="openChat(${chat.id})">
                    <h3>${chat.name}</h3>
                    <p>${chat.lastMessage}</p>
                    ${chat.unread > 0 ? `<span class="unread">${chat.unread}</span>` : ''}
                </div>
            `).join('');
}
function openChat(chatId) {
    document.getElementById('chatList').style.display = 'none';
    document.getElementById('backBtnmobile').style.display = 'inline-block';
    document.getElementById('backBtn').style.display = 'none';
    document.getElementById('chatWindow').style.display = 'flex';
    loadMessages(chatId);
    if(window.innerWidth >= 768) {
        document.getElementById('chatList').style.width = '30%';
        document.getElementById('chatWindow').style.display = 'flex';
        document.getElementById('backBtnmobile').style.display = 'none';
        document.getElementById('backBtn').style.display = 'inline-block';
    }
    if(window.innerWidth < 1024) {
        document.getElementById('backBtn').style.display = 'inline-block';
        document.getElementById('backBtnmobile').style.display = 'none';
        document.getElementById('chatList').style.display = 'none';
    }

}
function closeChat() {
    document.getElementById('backBtnmobile').style.display = 'none';
    document.getElementById('backBtn').style.display = 'none';
    document.getElementById('chatList').style.display = 'block';
    document.getElementById('chatWindow').style.display = 'none';
    if(window.innerWidth >= 768) {
        document.getElementById('chatList').style.width = '300px';
    }
    if(window.innerWidth < 1024) {
        document.getElementById('backBtnmobile').style.display = 'none';
        document.getElementById('backBtn').style.display = 'none';
        document.getElementById('chatList').style.display = 'block';
    }
}
function loadMessages(chatId) {
    const container = document.getElementById('messagesContainer');
    container.innerHTML = messages[chatId].map(msg => `
                <div class="message ${msg.sender === 'me' ? 'my-message' : ''}">
                    <div class="message-content">${msg.text}</div>
                    <div class="message-time">${msg.time}</div>
                </div>
            `).join('');
}
function sendMessage(e) {
    e.preventDefault();
    const input = document.getElementById('messageInput');
    const text = input.value.trim();

    if (text) {
        messages[1].push({
            text: text,
            sender: 'me',
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        });

        input.value = '';
        loadMessages(1);
    }
}
function startVideoCall() {
    alert('Видеозвонок запущен (заглушка)');
}
function startGroupCall() {
    alert('Групповой звонок запущен (заглушка)');
}
function logout() {
    localStorage.removeItem('currentUser');
    window.location.href = '../index.html';
}
document.addEventListener('DOMContentLoaded', () => {
    initChats();
});