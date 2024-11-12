document.querySelectorAll('.learning-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        const confettiContainer = item.querySelector('.confetti-container');
        
        for (let i = 0; i < 30; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti-piece';
            confetti.style.backgroundColor = getRandomColor();
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.animation = `confetti-fall 1s forwards`;
            confetti.style.top = Math.random() * 100 + '%';

            confettiContainer.appendChild(confetti);

            confetti.addEventListener('animationend', () => {
                confetti.remove();
            });
        }
    });
});

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


// j'ai utiliser ce site web pour apprendre comment en faire : https://dev.to/devlawrence/creating-a-confetti-effect-from-scratch-using-html-css-and-javascript-4poi