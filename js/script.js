window.addEventListener('DOMContentLoaded', () => {
    // slider
    const slides = document.querySelectorAll('.works__slider-item'),
          prev = document.querySelector('.works__slider-navigation-arrprev'),
          next = document.querySelector('.works__slider-navigation-arrnext');
          dots = document.querySelectorAll('.works__slider-navigation-dot');
    let slideIndex = 1;

    showSlides(slideIndex);
    paintDots(slideIndex);

    function showSlides (n) {
        if (n > slides.length) {
            slideIndex = 1;
        }

        if (n < 1 ) {
            slideIndex = slides.length;
        }

        slides.forEach(item => item.style.display = 'none');

        slides[slideIndex - 1].style.display = 'flex';

    }

    function plusSlides(n){
        showSlides(slideIndex += n);
    }

    prev.addEventListener('click', ()=> {
        plusSlides(-1);
        paintDots(slideIndex);
    });

    next.addEventListener('click', ()=> {
        plusSlides(1);
        paintDots(slideIndex);
    });

    function paintDots (slideIndex) {
        dots.forEach(item => item.style.backgroundColor = '#fff');
        dots[slideIndex - 1].style.backgroundColor = '#000';
    }


});


$(document).ready(function(){
    $('.team__slider').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev"><img src="../icons/arr_prev.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../icons/arr_next.svg"></button>',
      });
  });