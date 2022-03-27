var activePosition = 1;
slider(activePosition);

// forward/Back controls
function plusSlides(n) {
  slider(activePosition += n);
}

//  images controls
function activeSlide(n) {
  slider(activePosition = n);
}

function slider(n) {
  let i;
  let slides = document.getElementsByClassName("Containers");
  let dots = document.getElementsByClassName("dots");
  if (n > slides.length) {activePosition = 1}
  if (n < 1) {activePosition = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" enable", "");
  }
  slides[activePosition-1].style.display = "block";
  dots[activePosition-1].className += " enable";
} 
var activePosition = 0;
slider();

function slider() {
  let i;
  let slides = document.getElementsByClassName("Containers");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  activePosition++;
  if (activePosition > slides.length) {activePosition = 1}
  slides[activePosition-1].style.display = "block";
  setTimeout(slider, 2000); // Change image every 2 seconds
} 