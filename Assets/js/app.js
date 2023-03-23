//Dark and Light Theme
const body = document.querySelector("body"),
      nav = document.querySelector("nav"),
      footer = document.querySelector("footer"),
      modeToggle = document.querySelector(".dark-light"),
      searchToggle = document.querySelector(".searchToggle"),
      sidebarOpen = document.querySelector(".sidebarOpen"),
      siderbarClose = document.querySelector(".siderbarClose");

      let getMode = localStorage.getItem("mode");
          if(getMode && getMode === "dark-mode"){
            body.classList.add("dark");
            footer.classList.add("dark");
          }

// js code to toggle dark and light mode
      modeToggle.addEventListener("click" , () =>{
        modeToggle.classList.toggle("active");
        body.classList.toggle("dark");
        footer.classList.toggle("dark");

        // js code to keep user selected mode even page refresh or file reopen
        if(!body.classList.contains("dark")){
            localStorage.setItem("mode" , "light-mode");
        }else{
            localStorage.setItem("mode" , "dark-mode");
        }
      });

// js code to toggle search box
        searchToggle.addEventListener("click" , () =>{
        searchToggle.classList.toggle("active");
      });
 

//   js code to toggle sidebar
sidebarOpen.addEventListener("click" , () =>{
    nav.classList.add("active");
});



body.addEventListener("click" , e =>{
    let clickedElm = e.target;

    if(!clickedElm.classList.contains("sidebarOpen") && !clickedElm.classList.contains("menu")){
        nav.classList.remove("active");
    }
});



// Image Carousel

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');

function init() {
  slides[0].classList.add('active-slide');
  nextButton.addEventListener('click', () => changeSlide(1));
  prevButton.addEventListener('click', () => changeSlide(-1));
}

function changeSlide(direction) {
  slides[currentSlide].classList.remove('active-slide');
  currentSlide = (currentSlide + direction + slides.length) % slides.length;
  slides[currentSlide].classList.add('active-slide');
}

  init();

``
// FAQS section

// Get all the FAQ items

const faqToggles = document.querySelectorAll('.toggle-faq');

faqToggles.forEach((toggle) => {
  toggle.addEventListener('click', () => {
    const faqContent = toggle.parentNode.nextElementSibling;
    toggle.classList.toggle('-active');
    faqContent.classList.toggle('-active');
    if (faqContent.classList.contains('-active')) {
      faqContent.style.display = 'block';
    } else {
      faqContent.style.display = 'none';
    }
  });
});

// FAQS 2 section

const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach((item) => {
  const title = item.querySelector('.faq-title');
  const text = item.querySelector('.faq-text');

  title.addEventListener('click', () => {
    title.classList.toggle('active');
  });
});


