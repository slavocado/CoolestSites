$(document).ready(function () {
    $('.slider').slick({
        speed: 300,
        slidesToShow: 4,
        infinite: true,
        centerMode: true,
        responsive: [
          {
            breakpoint: 1440,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              centerMode: true,
              dots: true
            }
          },
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              centerMode: false,
              dots: true
            }
          },
          {
            breakpoint: 1000,
            settings: {
              slidesToShow:2,
              centerMode: true,
              dots: true
            }
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow:2,
              centerMode: false,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              centerMode: true,
              dots: true
            }
          },
          {
            breakpoint: 450,
            settings: {
              slidesToShow: 1,
              centerMode: false,
              dots: true
            }
          }
        ]
      });


      $('.page__slider').slick({
        speed: 700,
        slidesToShow: 4,
        slidesToScroll: 2,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: false,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3,
            }
          },
          {
            breakpoint: 380,
            settings: {
              slidesToShow: 2
            }
          }
        ]
      });
    
});