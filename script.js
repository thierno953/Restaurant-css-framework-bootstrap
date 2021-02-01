
const navToggle = document.querySelector('#toggle-menu');
const navLink = document.querySelector('.nav-link');

const menu = () => {
    navToggle.classList.toggle('is-active');
    navLink.classList.toggle('active');
};
navToggle.addEventListener('click', menu);  
 
/* slider */
window.onload = function(){
    const nextBtn = document.getElementById('next');
    const prevBtn = document.getElementById('prev');

    nextBtn.addEventListener('click', function(){
        nextSlide();
    });
    prevBtn.addEventListener('click', function(){
        prevSlide();
    });
};
let sliderNumber = 0;
const nextSlide = () => {
    const slider = document.getElementById('slider');
    const slides = slider.getElementsByClassName('slides');
    const currentSlide = slider.getElementsByClassName('current');
    console.log(currentSlide);

    currentSlide[0].classList.remove("current");
    if(sliderNumber == (slides.length - 1)){
        sliderNumber = 0;
    }else{
        sliderNumber += 1;
    }
    slides[sliderNumber].classList.add("current");
};
const prevSlide = () => {
    const slider = document.getElementById('slider');
    const slides = slider.getElementsByClassName('slides');
    const currentSlide = slider.getElementsByClassName('current');
    console.log(currentSlide);

    currentSlide[0].classList.remove("current");
    if(sliderNumber == 0){
        sliderNumber = slides.length - 1;
    }else{
        sliderNumber -= 1;
    }
    slides[sliderNumber].classList.add("current");
};