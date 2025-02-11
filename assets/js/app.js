document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const sectionId = this.getAttribute('href');
        const offset = document.querySelector(sectionId).offsetTop;

        window.scrollTo({
            top: offset - 100, // Adjust this value as needed to offset the scroll position
            behavior: 'smooth'
        });
    });
});