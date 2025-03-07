// Находим кнопку и аудио-элемент
const button = document.getElementById('soundButton');
const audio = document.getElementById('audio');

// Добавляем обработчик события на кнопку
button.addEventListener('click', () => {
    audio.play(); // Воспроизводим звук
});