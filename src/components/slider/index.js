import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

let swiper = new Swiper()

export default function renderSlider(slides){
    const mySwiper = document.createElement('div');
    mySwiper.className = 'swiper my-swiper';

    const swiperWrapper = document.createElement('div');
    swiperWrapper.className = 'swiper-wrapper';

    const sliders = slides.map((slide, index) =>{
        const sl = document.createElement('div');
        sl.className = 'swiper-slide';
        sl.innerText = slide.title;
        return sl;
    })

    swiperWrapper.append(...sliders)
    mySwiper.append(swiperWrapper)

    // navigations
    const nextEl = document.createElement('div');
    nextEl.className = 'swiper-button-next';

    const prevEl = document.createElement('div');
    prevEl.className = 'swiper-button-prev';
    
    // pagination
    const paginationEl = document.createElement('div');
    paginationEl.className = 'swiper-pagination';


    mySwiper.append(nextEl,prevEl,paginationEl)

    return mySwiper;
}

function renderNavigation(){
  const navigationWrapper = document.createElement('div');
  const nextEl = document.createElement('button');
  nextEl.innerText = 'Next';

  nextEl.onclick = (e) => {
    swiper.slideNext(); 
    console.log(swiper.activeIndex);
    if(swiper.activeIndex === 2){
      e.target.innerText = "Get Started"
    }else{
      e.target.innerText = "Next"
    }};

  // const prevEl = document.createElement('button');
  // prevEl.innerText = 'Previous';
  // prevEl.onclick = () => {swiper.slidePrev()};

  navigationWrapper.append(nextEl)
  app.append(navigationWrapper);
}

document.addEventListener('DOMContentLoaded', () => {
    
  swiper =new Swiper('.my-swiper', {
      // Optional parameters
      direction: 'horizontal',
      loop: false,

      modules: [Navigation, Pagination],
  
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
      },
      navigation:{
        nextEl:'.swiper-button-next',
        prevEl:'.swiper-button-prev'
      }
    });
  });