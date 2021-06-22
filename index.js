const open_side_menu=document.querySelector('#open-slide-menu');
const close_side_menu=document.querySelector('.btn-close');

open_side_menu.addEventListener('click',function(e){
  document.getElementById('side-menu').style.width='200px';
  document.getElementById('main').style.marginLeft='200px';
});

close_side_menu.addEventListener('click',function(e){
  document.getElementById('side-menu').style.width='0';
  document.getElementById('main').style.marginLeft='0';
})
/*....................................................*/
var slideIndex = 1;
showSlides(slideIndex);

const plusSlides = (n)=>{
  showSlides(slideIndex+=n);
}

const currentSlide = (n)=>{
  showSlides(slideIndex=n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("gallery_content");
  var dots = document.getElementsByClassName("dot");
  var sl = slides.length;
  var dl = dots.length;
  if (n > sl) {slideIndex = 1}
  if (n < 1) {slideIndex = sl}
  for (i = 0; i < sl; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dl; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
