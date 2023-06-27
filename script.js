let menuBtn = document.querySelector('#menu-btn');
let searchBtn = document.querySelector('#search-btn');
let colorBtn = document.querySelector('#color-btn');
let themeBtn = document.querySelector('#theme-btn');

let navbar = document.querySelector('.navbar');
let searchForm = document.querySelector('.search-form');
let colorPalettte = document.querySelector('.colors-palette');

menuBtn.onclick = () =>{
  navbar.classList.toggle('active');
  searchForm.classList.remove('active');
  colorPalettte.classList.remove('active');
}

searchBtn.onclick = () =>{
  searchForm.classList.toggle('active');
  navbar.classList.remove('active');
  colorPalettte.classList.remove('active');
}

colorBtn.onclick = () =>{
  colorPalettte.classList.toggle('active');
  navbar.classList.remove('active');
  searchForm.classList.remove('active');
}

window.onscroll = () =>{
  navbar.classList.remove('active');
  searchForm.classList.remove('active');
  colorPalettte.classList.remove('active');
}

document.querySelectorAll('.colors-palette .color').forEach(btn =>{
  btn.onclick = () =>{
    let color = btn.style.background;
    document.querySelector(':root').style.setProperty('--main-color',color);
  }
});


themeBtn.onclick = () =>{
  themeBtn.classList.toggle('fa-sun');
  if(themeBtn.classList.contains('fa-sun')){
    document.body.classList.add('active');
  }else{
    document.body.classList.remove('active');
  }
}










var swiper = new Swiper(".home-slider", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },

  loop: true,
  autoplay:
  {
    delay: 3000,
    disableOnInteraction: false,
  }
});


var swiper = new Swiper(".review-slider", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "1",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },

  loop: true,
  autoplay:
  {
    delay: 3000,
    disableOnInteraction: false,
  }
});


var loader = document.getElementById("preloader");
window.addEventListener("load", function(){
  loader.style.display = "none";
})

