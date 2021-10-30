const selectTheme = document.querySelector(".btn-select-theme");

selectTheme.addEventListener("click", ()=>{
    (localStorage.getItem("theme") === "dark")?localStorage.removeItem("theme"):(localStorage.setItem("theme", "dark"));
    addDarkClass();
})

function addDarkClass (){
    const html = document.querySelector("html");
    (localStorage.getItem("theme") === "dark")?html.classList.add("dark"):html.classList.remove("dark");
    (localStorage.getItem("theme") === "dark")?selectTheme.textContent = "Light":selectTheme.textContent = "Dark";
    (localStorage.getItem("theme") === "dark")?selectTheme.classList.add("btn-dark"):selectTheme.classList.remove("btn-dark");
}
addDarkClass();


const options = document.querySelector(".options");
const selectOption = document.querySelector(".btn-continue");
const optionsItem = [...options.children];

options.addEventListener("click", (event)=>{
    for(let value of optionsItem) {
        if(value === event.target.closest(".option")){
            localStorage.setItem("selectedOption", optionsItem.indexOf(value)+1);
            value.classList.add("active");
        }else {
            value.classList.remove("active");
        }   
    }
})
 
function saveSelectedOption(){
    for(let value of optionsItem){
        if(+localStorage.getItem("selectedOption") === optionsItem.indexOf(value)+1) value.classList.add("active");
    }
}
saveSelectedOption();

selectOption.addEventListener("click", ()=>{
    window.open(`https://www.google.com/search?q=${localStorage.getItem("selectedOption")}`, "_blank");
})


const swiper = new Swiper(".swiper", {
    direction: "horizontal",
    loop: true,
    spaceBetween: 5,
    centeredSlides: true,
    slidesPerView: 1.1,
    speed: 500,
    autoplay: {
        delay: 5000,
        stopOnLastSlide: false,
        disableOnInteraction: true
    },
    breakpoints: {
        320: {
            slidesPerView: 1.15,
        },
        350: {
            slidesPerView: 1.1,
        },
        480: {
            slidesPerView: 2
        },
        992: {
            slidesPerView: 3
        }
    }
  });