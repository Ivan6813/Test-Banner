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