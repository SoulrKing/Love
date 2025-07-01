document.addEventListener('DOMContentLoaded', function() {
    const heart = document.getElementById('heart');
    heart.addEventListener('click', function() {
        heart.classList.add('glow', 'pulsing');
        setTimeout(() => {
            heart.classList.remove('glow');
            window.location.href = "index2.html";
        }, 2000);
    });
});



