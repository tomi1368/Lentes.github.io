const slider = document.querySelector(".slide-show__slider"),
        slides = document.querySelectorAll(".slide-show__slider__slide"),
        menuHambuger = document.querySelector(".nav-bar__hambuger__line"),
        menuBar = document.querySelector(".nav-bar__list"),
        infoSlider = document.querySelector(".slide-show__slider__slide__info"),
        navContainer = document.querySelector(".nav-container"),
        slideMarkers = document.querySelectorAll(".slide-show__buttons__item"),
        imgLogo = document.querySelectorAll(".nav-bar__logo a img");
//Slider//
let i = 0,
e = 0;
const move = () =>{
    slideMarkers.forEach(e =>{
        e.classList.remove("active");
    })
    if (e == 3) e = 2
    slider.style.marginLeft = `${-100*i}%`
    slider.style.transition = "all .6s"
    slideMarkers[e].classList.add("active");
    i++
    e++
    if (i === slides.length){
        slideMarkers[2].classList.remove("active");
        slideMarkers[0].classList.add("active");
       setTimeout(() =>{
        slider.style.marginLeft = `0%`;
        slider.style.transition = "all 0s";
        e = 0
        i =0;
        /* slideMarkers[2].classList.remove("active");
        slideMarkers[e].classList.add("active"); */
       },2000)
    }
}


setInterval(function(){
    move()
}, 5000 )

//End Slider

//Menu Hambuger




document.addEventListener("click", e=>{
    if (e.target.matches(".nav-bar__hambuger") || e.target.matches(".nav-bar__hambuger__line")){
        e.stopPropagation()
        e.preventDefault()
        menuBar.classList.toggle("activo") ? menuHambuger.classList.add("open") : menuHambuger.classList.remove("open")
    }
} )

document.addEventListener("scroll", e=>{
    if (document.documentElement.scrollTop > 0){
        navContainer.classList.add("activar")
        imgLogo[0].style.opacity = "1"
    } else {
        navContainer.classList.remove("activar");
        imgLogo[0].style.opacity = "0"
    }
})

