let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
const slider = document.getElementById('slider');
if (index >= totalSlides) currentSlide = 0;
else if (index < 0) currentSlide = totalSlides - 1;
else currentSlide = index;
slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function nextSlide() {
showSlide(currentSlide + 1);
}

function prevSlide() {
showSlide(currentSlide - 1);
}

// Opcional: auto-slide
// setInterval(() => nextSlide(), 8000);
