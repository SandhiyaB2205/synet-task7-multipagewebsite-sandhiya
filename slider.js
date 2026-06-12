const slides = document.getElementById("slides");
const totalSlides = document.querySelectorAll(".slide").length;

let currentSlide = 0;

function showSlide(index){
    slides.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide(){
    currentSlide++;

    if(currentSlide >= totalSlides){
        currentSlide = 0;
    }

    showSlide(currentSlide);
}

function prevSlide(){
    currentSlide--;

    if(currentSlide < 0){
        currentSlide = totalSlides - 1;
    }

    showSlide(currentSlide);
}