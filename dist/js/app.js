const slider = document.querySelector(".slide-show__slider"),
        slides = document.querySelectorAll(".slide-show__slider__slide"),
        menuHambuger = document.querySelector(".nav-bar__hambuger__line"),
        menuBar = document.querySelector(".nav-bar__list"),
        infoSlider = document.querySelector(".slide-show__slider__slide__info"),
        navContainer = document.querySelector(".nav-container"),
        slideMarkers = document.querySelectorAll(".slide-show__buttons__item"),
        imgLogo = document.querySelectorAll(".nav-bar__logo a img"),
        testSlider = document.querySelector(".testimonial-container"),
        testSlides = document.querySelectorAll(".testimonial-container__users");
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
    testSlider.style.marginTop= `${i * -400}px`
}
const scrollActive = ()=>{
    const scrollY = window.pageYOffset,
    sections = document.querySelectorAll(".section");
    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 400;
        sectionId = current.getAttribute('id');
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav-bar__list__items[data-pos='+ sectionId +']').classList.add('active-link')
        } else{
            document.querySelector('.nav-bar__list__items[data-pos='+ sectionId +']').classList.remove('active-link')
        }
    }) }
const rQuery = (mq,sl,cmob,cdesk) =>{
    let breakpoint = window.matchMedia(mq);
    const responsive = e => e.matches ? document.querySelector(sl).innerHTML = cmob : document.querySelector(sl).innerHTML = cdesk;
    breakpoint.addEventListener("change", e =>{
        responsive(e)
    })
    responsive(breakpoint)
}

//End Slider

//Menu Hambuger

document.addEventListener("click", e=>{
    if (e.target.matches(".nav-bar__hambuger") || e.target.matches(".nav-bar__hambuger__line")){
        e.stopPropagation();
        e.preventDefault();
        menuBar.classList.toggle("activo") ? menuHambuger.classList.add("open") : menuHambuger.classList.remove("open");
    }
    if (e.target.matches(".nav-bar__list__items")){
        menuBar.classList.remove("activo");
        menuHambuger.classList.remove("open");
    }
} )

document.addEventListener("DOMContentLoaded",e=>{
    rQuery("(max-width:768px)",".footer-map",`<a href="" class="btn">Ver en Google Maps</a>`,`<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52422.57475623781!2d-58.30566578648093!3d-34.795602284867215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a329628f552cad%3A0x813d55ba09834999!2sFlorencio%20Varela%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1627503516032!5m2!1ses!2sar" width="600" height="450" style="border:0;" allowfullscreen="true" loading="lazy"></iframe>`)
})
document.addEventListener("scroll", e=>{
    const reveals = document.querySelectorAll(".reveal")
    if (document.documentElement.scrollTop > 0){
        navContainer.classList.add("activar")
        imgLogo[0].style.opacity = "1"
    } else {
        navContainer.classList.remove("activar");
        imgLogo[0].style.opacity = "0"
    }
    for (let i = 0; i < reveals.length;i++){
        let windowHeight = window.innerHeight;
        let revealTop = reveals[i].getBoundingClientRect().top;
        let revealPoint = 150;
         revealTop < (windowHeight - revealPoint) ? reveals[i].classList.add("jump") : reveals[i].classList.remove("jump") 
    }
})

window.addEventListener('scroll', scrollActive)