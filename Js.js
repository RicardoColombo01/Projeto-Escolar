const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
let index = 0;

function showSlide(n) {
  if (n >= slides.length) index = 0;
  if (n < 0) index = slides.length - 1;
  const offset = -index * 100;
  document.querySelector(".slides").style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
  index = (index + 1) % slides.length;
  showSlide(index);
}

function prevSlide() {
  index = (index - 1 + slides.length) % slides.length;
  showSlide(index);
}

prevBtn.addEventListener("click", prevSlide);
nextBtn.addEventListener("click", nextSlide);

// Optional: Auto-slide every 5 seconds
setInterval(nextSlide, 10000);
