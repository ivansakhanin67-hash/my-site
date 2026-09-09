function sayHello() {
    const message = document.getElementById('message');
    const now = new Date();
    const hours = now.getHours();
    let greeting = '';

    if (hours < 12) greeting = 'Доброе утро! ☀️';
    else if (hours < 18) greeting = 'Добрый день! 🌤️';
    else greeting = 'Добрый вечер! 🌙';

    message.textContent = `${greeting} Спасибо, что зашёл на My Site! ❤️`;
    message.style.color = '#667eea';
    message.style.animation = 'fadeIn 0.5s ease';
}
