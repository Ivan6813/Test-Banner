const selectTheme = document.querySelector(".btn-select-theme");

selectTheme.addEventListener("click", ()=> {
    if(localStorage.getItem("theme") === "dark"){
        localStorage.removeItem("theme");
    }
    else {
        localStorage.setItem("theme", "dark");

    }
    addDarkClass();
})

function addDarkClass () {
    if(localStorage.getItem("theme") === "dark") {
        document.querySelector("html").classList.add("dark");
        selectTheme.textContent = "Light";
        selectTheme.classList.add("btn-dark");
    }
    else {
        document.querySelector("html").classList.remove("dark");
        selectTheme.textContent = "Dark";
        selectTheme.classList.remove("btn-dark");
    }
}

addDarkClass();