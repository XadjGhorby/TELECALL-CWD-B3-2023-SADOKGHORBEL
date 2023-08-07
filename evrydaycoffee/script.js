// script.js
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function showSlide() {
  slides[currentSlide].style.display = "block";
  setTimeout(hideSlide, 5000); 
}

function hideSlide() {
  slides[currentSlide].style.display = "none";
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide();
}

showSlide(); // Start the slideshow


