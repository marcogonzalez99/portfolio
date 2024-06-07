document.addEventListener('DOMContentLoaded', () => {
    let currentSlide = 0;

    function moveSlide(direction) {
        const items = document.querySelectorAll('.carousel-item');
        const totalSlides = items.length;

        items[currentSlide].classList.remove('active');

        currentSlide = (currentSlide + direction + totalSlides) % totalSlides;

        items[currentSlide].classList.add('active');
    }

    document.querySelector('.prev').addEventListener('click', () => moveSlide(-1));
    document.querySelector('.next').addEventListener('click', () => moveSlide(1));
});
