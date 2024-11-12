function toggleScroll() {
    if (window.innerHeight < 810) {
        document.body.style.overflowY = 'auto';
    } else {
        document.body.style.overflowY = 'hidden';
    }
}

toggleScroll();
document.body.style.overflowX = 'hidden'; 

window.addEventListener('resize', toggleScroll);

// J'ai utiliser cette playlsit youtube pour comprendre comment faire que les zones de texte qui necessite un scroll soit seulement accessible lorsque la page n'est pas en plein ecran : https://youtube.com/playlist?list=PLMPgoZdlPumdjYOZ2WO4zTdvH0uxEZ8ii&si=ja5fK3AP6LpGwUGg