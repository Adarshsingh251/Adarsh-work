var swiper = new Swiper(".slider",{
    loop: true,
    autoplay: {
        delay:2000
    },
    speed: 2500,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true, //main zoom rest all small in size
        // type: "progressbar", // linear bar animation
      },
})

var slider = new Swiper(".sliders",{
    loop: true,
    // autoplay: {
    //     delay:2000
    // },
    slidesPerView: 8,
    breakpoints:{
        350:{
            slidesPerView: 3,
            spaceBetween : 18,
        },
        1300:{
            slidesPerView: 8,
            // spaceBetween : 18,
        }
    }

})