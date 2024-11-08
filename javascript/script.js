function toggleScroll() {
    if (window.innerWidth < 800) {
        document.body.style.overflowY = 'auto';
    } else {
        document.body.style.overflowY = 'hidden';
    }
}

toggleScroll();

window.addEventListener('resize', toggleScroll);