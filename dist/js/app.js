const slider = document.querySelector(".slide-show__slider"),
        slides = document.querySelectorAll(".slide-show__slider__slide"),
        menuHambuger = document.querySelector(".nav-bar__hambuger__line"),
        menuBar = document.querySelector(".nav-bar__list"),
        infoSlider = document.querySelector(".slide-show__slider__slide__info"),
        navContainer = document.querySelector(".nav-container"),
        slideMarkers = document.querySelectorAll(".slide-show__buttons__item"),
        imgLogo = document.querySelectorAll(".nav-bar__logo a img"),
        testSlider = document.querySelector(".testimonial-container"),
        testSlides = document.querySelectorAll(".testimonial-container__users")
//Slider//
const move = (array) =>{
    for (i = 0; i < array.length; i++){
        if(array[i].classList.contains('active')){
            array[i].classList.remove('active')
            i < array.length - 1 ? nextItem = i + 1 : nextItem = 0
    }   }   
    setSlide(nextItem)
    setActive(array[nextItem])
}
const move2 = array =>{
    for (i = 0; i < array.length; i++){
        i< array.length-1 ? nextItem = i + 1 : nextItem =0
    }
    setSlideTest(nextItem)
}
slideMarkers.forEach( ( mark, i ) => {
    mark.onclick = () => { 
        slideMarkers.forEach(e => e.classList.remove('active'))
        setActive(mark)
        setSlide(i)
}   }   )
setInterval( () => move(slideMarkers), 5000)
setInterval( () => move2(testSlider), 10000)
const setSlide = (i) => { slider.style.marginLeft = `${-100 * i}%`}
const setActive = (el) => { el.classList.add('active') }
const setSlideTest = (i) => { 
    testSlides.forEach(e=>e.style.animation = "none")
    testSlides[i].style.animation = "fade-in 10s"
    testSlider.style.marginTop= `${i * -300}px`
}


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

