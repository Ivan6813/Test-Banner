const options = document.querySelector(".options");
const first = document.querySelector(".first-option");
const second = document.querySelector(".second-option");
const third = document.querySelector(".third-option");
const btnSelect = document.querySelector(".btn-continue");

options.addEventListener("click", (event)=> {
    
    if(event.target.closest(".first-option") === first) {
        first.classList.add("active");
        second.classList.remove("active");
        third.classList.remove("active");
        localStorage.removeItem("options");
        localStorage.setItem("options", "1")
    }
    if(event.target.closest(".second-option") === second) {
        second.classList.add("active");
        first.classList.remove("active");
        third.classList.remove("active");
        localStorage.removeItem("options");
        localStorage.setItem("options", "2")
    }
    if(event.target.closest(".third-option") === third) {
        third.classList.add("active");
        first.classList.remove("active");
        second.classList.remove("active");
        localStorage.removeItem("options");
        localStorage.setItem("options", "3")
    }
})

btnSelect.addEventListener("click", ()=> {
    const path = localStorage.getItem("options");
    window.open(`https://www.google.com/search?q=${path}`, "_blank");
})

function saveSelection() {
    if(localStorage.getItem("options") === "1"){
        first.classList.add("active");
    }
    if(localStorage.getItem("options") === "2"){
        second.classList.add("active");
    }
    if(localStorage.getItem("options") === "3"){
        third.classList.add("active");
    }
}
saveSelection();