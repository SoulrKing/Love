document.addEventListener('DOMContentLoaded', function() {
    const heart = document.getElementById('heart');
    heart.addEventListener('click', function() {
        heart.classList.add('glow', 'pulsing');
        setTimeout(() => {
            heart.classList.remove('glow');
        }, 2000); // Glow dura 1 segundo, pulsar continua
    });
});