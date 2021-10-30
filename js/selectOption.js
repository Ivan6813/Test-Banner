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