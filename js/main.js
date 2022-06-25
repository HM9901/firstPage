$(document).ready(function () {

  var counters = document.querySelectorAll('.counter');
  var speech = 200;

  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute('data-target');
      const count = +counter.innerText;
      const inc = target / speech;
      if (count < target) {
        counter.innerText = Math.ceil(count + inc);
        setTimeout(updateCount, 1)
      } else {
        counter.innerText = target
      }
    }
    updateCount()
  })
  var achie = document.querySelector('.achivement__area')
  console.log(achie)

  var slide = $(".img-slider")
  slide.slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    swipe: true,
    swipeToSlide: true,
    infinite: true,
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 1196,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
    autoplay: true,
    autoplaySpeed: 2000,
  });
  var slide = $(".info-slider")
  slide.slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: true,
    arrows: false,
    swipe: true,
    swipeToSlide: true,
    draggable: true,
    dots: true,
    responsive: [
      {
        breakpoint: 1196,
        settings: {
          slidesToShow: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 1,
          arrows: false,
          infinite: true,
        },
      },
    ],
    // autoplay: true,
    // autoplaySpeed: 5000,
  });

  var slide = $(".banner-area")
  slide.slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    swipe: true,
    swipeToSlide: true,
    arrows: false,
    draggable: true,
    dots: false,
    responsive: [
      {
        breakpoint: 1196,
        settings: {
          slidesToShow: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 1,
          infinite: true,
        },
      },
    ],
    // autoplay: true,
    // autoplaySpeed: 5000,
  });
});
