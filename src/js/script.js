// $(document).ready(function(){
//     $('.carousel__inner').slick({
//         infinite: true,
//         speed: 300,
//         slidesToShow: 1,
//         adaptiveHeight: true,
//         prevArrow: '<button type="button" class="slick-prev"><img src="images/icons/left_arrow.png"></button>',
//         nextArrow: '<button type="button" class="slick-next"><img src="images/icons/right_arrow.png"></button>',
//         responsive: [
//             {
//                 breakpoint: 992,
//                 settings: {
//                     dots: true,
//                     arrows: false
//                 }
//             }
//         ]

//       });
//   });

var slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: false,
    nav: false
  });

document.querySelector('.next').onclick = function () {
    slider.goTo('next');
};

document.querySelector('.prev').onclick = function () {
    slider.goTo('prev');
};